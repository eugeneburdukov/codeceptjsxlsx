const Helper = require('@codeceptjs/helper');
const { Faker, en_CA, en } = require('@faker-js/faker');

class FakerHelper extends Helper {
  constructor(config) {
    super(config);
    this.faker = new Faker({ locale: [en_CA, en] });
  }

  getAddress() {
    return {
      street: this.faker.location.streetAddress(),
      city: this.faker.location.city(),
      province: this.faker.location.state({ abbreviated: true }),
      postalCode: this.faker.location.zipCode('?#?#?#'),
      country: 'Canada',
    };
  }
}

module.exports = FakerHelper;
