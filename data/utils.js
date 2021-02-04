const faker = require('faker');

const randomName = () => {
  const adj1 = ['Amazing', 'Indoor', 'Home', 'Sharp', 'Golden', 'Recreational', 'Outdoor', 'Kid\'s', 'Emergency', 'Foldable', 'Standard'];
  const adj2 = ['Beige', 'Leather', 'White', 'Black', 'Oak', 'Ceramic', 'Wooden', 'High-quality', 'Eco-friendly', 'Non-toxic', 'Reusable'];
  const noun = ['Chair Set', 'Couch', 'Kitchen Knife', 'Lamp', 'Patio Set', 'Door', 'Bathtub', 'Wine Rack', 'Beer', 'Desk', 'Shelf'];
  const randomIndex = () => faker.random.number({ min: 0, max: 10 });

  return `${adj1[randomIndex()]} ${adj2[randomIndex()]} ${noun[randomIndex()]}`;
};

const randomStars = () => faker.finance.amount(0, 5, 2);

const randomPrice = () => faker.finance.amount(10, 500, 2);

const randomDescription = () => faker.lorem.paragraph(faker.random.number({ min: 2, max: 4 }));

const randomUrl = () => {
  const randomNumber = faker.random.number({ min: 1, max: 1000 });
  return `https://sdc-juan.s3-us-west-2.amazonaws.com/carousel/image${randomNumber}.jpg`;
};

module.exports = {
  randomName,
  randomStars,
  randomPrice,
  randomDescription,
  randomUrl,
};
