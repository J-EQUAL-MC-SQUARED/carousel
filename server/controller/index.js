const { Related } = require('../model');
const { client } = require('../middleware/cache');

module.exports = {
  getRelated: (req, res) => {
    const { id } = req.params;
    Related(id)
      .then((data) => {
        client.set(id, JSON.stringify(data.rows));
        res.send([{ relatedItems: data.rows }]);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
