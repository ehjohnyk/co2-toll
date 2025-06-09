import Fastify from 'fastify';
import fetch from 'node-fetch';
import pg from 'pg';
const app = Fastify();
const db = new pg.Pool({connectionString:
  `postgres://co2user:silneheslo@localhost/co2toll`});

app.post('/calc', async (req, reply)=>{
  const {vin, route} = req.body;
  const kmSK=100, kmAT=150, kmDE=200;           // ↙ Sem neskôr vložíme OSRM
  reply.type('text/plain').send(
    `VIN ${vin}\nSK ${kmSK} km\nAT ${kmAT}\nDE ${kmDE}`
  );
});
app.listen({port:3000});
