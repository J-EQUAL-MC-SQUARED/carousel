const { LoremIpsum } = require('lorem-ipsum');

const randomName = () => {
  const adj1 = ['Amazing', 'Indoor', 'Home', 'Sharp', 'Golden', 'Recreational', 'Outdoor', 'Kid\'s', 'Emergency', 'Foldable', 'Standard'];
  const adj2 = ['Beige', 'Leather', 'White', 'Black', 'Oak', 'Ceramic', 'Wooden', 'High-quality', 'Eco-friendly', 'Non-toxic', 'Reusable'];
  const noun = ['Chair Set', 'Couch', 'Kitchen Knife', 'Lamp', 'Patio Set', 'Door', 'Bathtub', 'Wine Rack', 'Beer', 'Desk', 'Shelf'];
  const randomIndex = () => Math.floor((Math.random() * 10));

  return `${adj1[randomIndex()]} ${adj2[randomIndex()]} ${noun[randomIndex()]}`;
};

const randomStars = () => parseFloat((Math.random() * 5).toFixed(1));

const randomPrice = () => parseFloat((Math.random() * 500).toFixed(2));

const randomDescription = () => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 4,
      min: 2,
    },
    wordsPerSentence: {
      max: 10,
      min: 5,
    },
  });
  return lorem.generateParagraphs(1);
};

module.exports = {
  randomName,
  randomStars,
  randomPrice,
  randomDescription,
};
