// /* eslint-disable */
// import http from 'k6/http';
// import { sleep } from 'k6';

// export const options = {
//   vus: 100,
//   duration: '1m',
// };

// export default function () {
//   http.get(`http://54.185.191.122/api/carousels/${Math.floor((Math.random() * 10000000) + 1)}`);
//   sleep(0.005);
// }

// /* eslint-disable */
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '1m',
  ext: {
    loadimpact: {
      projectId: 3524844,
      distribution: {
        portlandDistribution: { loadZone: 'amazon:us:portland', percent: 100 },
      },
    },
  },
};

export default function () {
  http.get(
    `http://54.185.191.122/api/carousels/${Math.floor((Math.random() * 10000000) + 1)}`,
    {
      tags: { name: '54.185.191.122/api/carousels' }
    }
  );
  sleep(0.05);
}
