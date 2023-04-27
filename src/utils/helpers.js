import { faker } from '@faker-js/faker';

const generateEmployees = (numberOfEmployeesToGenerate) => {
  const employees = [];

  for (let i = 0; i < numberOfEmployeesToGenerate; i++) {
    employees.push({
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      startDate: faker.date.past().toISOString().slice(0, 10),
      department: faker.name.jobArea(),
      dateOfBirth: faker.date.past().toISOString().slice(0, 10),
      address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
      },
    });
  }

  return employees;
};

const formatData = (data) => {
  const {
    city,
    dateOfBirth,
    department,
    firstName,
    lastName,
    startDate,
    state,
    street,
    zipCode,
  } = data;
  return {
    address: {
      city,
      state,
      street,
      zip: zipCode,
    },
    dateOfBirth,
    department,
    firstName,
    id: faker.datatype.uuid(),
    lastName,
    startDate,
  };
};

// A function to add the leading zero to the month if it's less than 10
const formatMonth = (month) => {
  if (month < 10) {
    return `0${month}`;
  }
  return month;
};

export { formatData, formatMonth, generateEmployees };
