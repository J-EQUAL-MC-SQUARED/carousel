const fs = require('fs');
const axios = require('axios').default;

for (let i = 1; i <= 1000; i += 1) {
  axios.get('https://picsum.photos/225/225', { responseType: 'stream' })
    .then((response) => {
      response.data.pipe(fs.createWriteStream(`./images/image${i}.jpg`));
    })
    .catch((err) => {
      console.error(err);
    });
}
