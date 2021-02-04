const fs = require('fs').promises;
const path = require('path');

const records = ['id'];

for (let i = 1; i <= 10000000; i += 1) {
  records.push(i);
}

const filePath = path.join(__dirname, 'generated');

fs.writeFile(`${filePath}/related.csv`, records.join('\n'))
  .then(() => {
    console.log('Success');
  })
  .catch((err) => {
    console.error(err);
  });
