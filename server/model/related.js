const db = require('../../database');

const Related = (id) => db.query(`SELECT id, name, price, stars, "imageUrl", description FROM related WHERE "primaryId" = ${id};`);

module.exports = Related;
