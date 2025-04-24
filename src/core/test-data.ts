import { faker } from '@faker-js/faker';
import { RegistrationData } from '../pages/RegistrationPage';

export function buildUser(): RegistrationData {
  return {
    firstName: faker.person.firstName(),
    lastName:  faker.person.lastName(),
    address:   faker.location.streetAddress(),
    city:      faker.location.city(),
    state:     faker.location.state({ abbreviated: true }),
    zip:       faker.location.zipCode(),
    phone:     faker.phone.number(),
    ssn:       faker.string.numeric(9),
    username:  faker.internet.username().toLowerCase(),
    password:  faker.internet.password({ length: 12 })
  };
}

/* NUEVO → datos aleatorios para Update Profile */
export function buildNewProfile() {
  return {
    firstName:  faker.person.firstName(),
    lastName:   faker.person.lastName(),
    address:    faker.location.streetAddress(),
    city:       faker.location.city(),
    state:      faker.location.state({ abbreviated: true }),
    zip:        faker.location.zipCode(),
    phone:     faker.phone.number(),
  };
}