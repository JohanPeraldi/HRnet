import { faker } from '@faker-js/faker';

const employees = [];
function createEmployee() {
  return {
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
  };
}
// Create 10 employees
for (let i = 0; i < 10; i++) {
  employees.push(createEmployee());
}
console.log(employees);

export default employees;
