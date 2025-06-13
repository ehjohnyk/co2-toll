# CO₂ Toll – minimálna kostra
Spúšťame:  

```bash
npm install
node services/api-gw/index.js
npx serve -s apps/web -l 5000
```

Výpočet funguje tak, že služba zavolá OSRM a zistí dĺžky úsekov
pre Slovensko, Rakúsko a Nemecko. Tieto vzdialenosti sa premenia na
kilometre a vynásobia sadzbou 0.05 €/km, čím vznikne výsledná cena,
ktorá sa vracia ako súčasť odpovede.
