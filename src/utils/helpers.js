import { faker } from '@faker-js/faker';

const NUM_EMPLOYEES = process.env.REACT_APP_NUM_EMPLOYEES;
const KEY_EMPLOYEES = process.env.REACT_APP_KEY_EMPLOYEES;

const generateEmployees = () => {
  const employees = [];

  for (let i = 0; i < NUM_EMPLOYEES; i++) {
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

const saveEmployeesToLocalStorage = (employees) => {
  localStorage.setItem(KEY_EMPLOYEES, JSON.stringify(employees));
};

const getEmployeesFromLocalStorage = () => {
  return localStorage.getItem(KEY_EMPLOYEES);
};

const getEmployees = () => {
  const storedEmployees = getEmployeesFromLocalStorage();
  // if there are no employees in local storage, generate them
  if (!storedEmployees) {
    const employees = generateEmployees();
    saveEmployeesToLocalStorage(employees);
    return employees;
  }
  // if there are employees in local storage, parse them and return them
  return JSON.parse(storedEmployees);
};

export { getEmployees };
