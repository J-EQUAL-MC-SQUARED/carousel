const fs = require('fs');
const path = require('path');
const faker = require('faker');
const {
  randomName,
  randomPrice,
  randomStars,
  randomUrl,
  randomDescription,
} = require('./utils');

const filePath = path.join(__dirname, 'generated');
const ws = fs.createWriteStream(`${filePath}/related2.csv`);
ws.write('name,price,stars,imageUrl,description,primaryId\n', 'utf-8');

for (let i = 5000001; i <= 10000000; i += 1) {
  console.log(`Entries for Primary Record #${i}`);
  for (let j = 1; j <= faker.random.number({ min: 5, max: 10 }); j += 1) {
    ws.write(`${randomName()},${randomPrice()},${randomStars()},${randomUrl()},${randomDescription()},${i}\n`, 'utf-8');
  }
}

ws.end();
