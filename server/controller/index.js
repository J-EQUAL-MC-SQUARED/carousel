const { Related } = require('../model');

module.exports = {
  getRelated: (req, res) => {
    const { id } = req.params;
    Related(id)
      .then((data) => {
        res.send([{ relatedItems: data.rows }]);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
