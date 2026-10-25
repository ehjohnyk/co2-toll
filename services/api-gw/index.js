import Fastify from 'fastify';
import fetch from 'node-fetch';

const app = Fastify();

app.post('/calc', async (req, reply) => {
  const { vin, route } = req.body ?? {};
  if (typeof vin !== 'string' || !vin.trim() || typeof route !== 'string' || !route.trim()) {
    return reply.code(400).send({ error: 'INVALID_INPUT' });
  }

  try {
    // PROTOTYPE ONLY: fixed waypoints, not a user-selected route or country split.
    // Do not use this response for actual toll billing.
    const coords = [
      [17.107747, 48.1485965],
      [16.373819, 48.208174],
      [13.431946, 48.566697],
      [11.582, 48.1351],
    ];
    const coordStr = coords.map((c) => c.join(',')).join(';');
    const res = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${coordStr}?overview=false`,
      { signal: AbortSignal.timeout(10000) },
    );
    if (!res.ok) throw new Error('Routing provider rejected request');
    const data = await res.json();
    const legs = data?.routes?.[0]?.legs;
    if (!Array.isArray(legs) || legs.length !== 3 ||
        legs.some((leg) => !Number.isFinite(leg?.distance) || leg.distance < 0)) {
      throw new Error('Invalid routing provider response');
    }
    const [legSK, legAT, legDE] = legs;
    const kmSK = legSK.distance / 1000;
    const kmAT = legAT.distance / 1000;
    const kmDE = legDE.distance / 1000;
    const rate = 0.05; // UNVERIFIED DEMO RATE, not an official tariff.
    const price = (kmSK + kmAT + kmDE) * rate;
    return reply.type('application/json').send({
      vin, kmSK, kmAT, kmDE, price,
      isDemoEstimate: true,
      warning: 'Fixed demonstration corridor and unverified flat rate; not a toll quote.',
    });
  } catch (err) {
    app.log.error({ err }, 'Routing estimate failed');
    return reply.code(502).send({ error: 'ROUTING_PROVIDER_UNAVAILABLE' });
  }
});

app.listen({ port: 3000 });
