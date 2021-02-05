const { Related } = require('../model');

module.exports = {
  getRelated: (req, res) => {
    const { id } = req.params;
    Related.findAll({
      where: {
        primaryId: +id,
      },
    })
      .then((data) => {
        res.send([{ relatedItems: data }]);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
