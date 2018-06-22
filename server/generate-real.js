const faker = require("faker");
const getColor = () => Math.floor(Math.random() * 16777215).toString(16);
module.exports = function () {
  return { users: Array.from({ length: 15 }, (v, id) => ({
      id: id + 1,
      name: faker.lorem.words(Math.floor(Math.random() * 3) + 1),
      image: `https://dummyimage.com/360x220/${getColor()}/fff/&text=user${id +
        1}`,
      description: faker.lorem.paragraph(Math.floor(Math.random() * 6) + 1)
    })) };
}