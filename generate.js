module.exports = function () {
  const { faker } = require("@faker-js/faker");
  const _ = require("lodash");

  const cuisines = [
    "Indian",
    "Thai",
    "Mexican",
    "Greek",
    "Chinese",
    "Healthy",
    "Italian",
    "Fast Food",
  ];
  const drinks = ["Soups", "Smoothies", "Coffee", "Juices", "Tea"];
  const categories = ["FOOD_TRUCK", "HOME_MADE_FOOD", "LOCAL_BUSINESS"];

  function genRandomNumber(min, max, decimalPlaces) {
    var rand = Math.random() * (max - min) + min;
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
  }

  return {
    shops: _.times(13, function (n) {
      return {
        id: (30000 + n).toString(),
        name: faker.animal.rabbit(),
        description: faker.lorem.sentences(),
        type: categories[genRandomNumber(0, categories.length, 0)],
        address: {
          street: faker.location.street(),
          zipcode: genRandomNumber(32000, 32300, 0),
          city: "Jacksonville",
          country: "US",
        },
        email: faker.internet.email(),
        phone: faker.phone.number().split(" ")[0],
        rating: genRandomNumber(3, 5, 1),
        imgSrc: faker.image.urlLoremFlickr({ category: "foodtrucks" }),
        geo: {
          latitude: faker.location.latitude(),
          longitude: faker.location.longitude(),
        },
        tags: [
          cuisines[genRandomNumber(0, cuisines.length, 0)],
          drinks[genRandomNumber(0, drinks.length, 0)],
        ],
        distance: genRandomNumber(2, 15, 0).toString() + "m",
      };
    }),
  };
};
