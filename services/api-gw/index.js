import Fastify from 'fastify';
import fetch from 'node-fetch';
import pg from 'pg';
const app = Fastify();
const db = new pg.Pool({connectionString:
  `postgres://co2user:silneheslo@localhost/co2toll`});

app.post('/calc', async (req, reply)=>{
  const {vin, route} = req.body;
  try{
    const coords = [
      [17.107747,48.1485965], // Bratislava, SK
      [16.373819,48.208174],  // Vienna, AT
      [13.431946,48.566697],  // Passau, DE
      [11.582,48.1351]        // Munich, DE
    ];
    const coordStr = coords.map(c=>c.join(',')).join(';');
    const res = await fetch(
      `http://router.project-osrm.org/route/v1/driving/${coordStr}?overview=false`);
    const data = await res.json();
    const [legSK, legAT, legDE] = data.routes[0].legs;
    const kmSK = legSK.distance/1000;
    const kmAT = legAT.distance/1000;
    const kmDE = legDE.distance/1000;
    const rate = 0.05;
    const price = (kmSK+kmAT+kmDE)*rate;
    reply.type('application/json').send({vin,kmSK,kmAT,kmDE,price});
  }catch(err){
    reply.code(500).send({error:err.message});
  }
});
app.listen({port:3000});
