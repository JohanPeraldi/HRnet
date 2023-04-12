import React from 'react';
import { formatData, updateLocalStorage } from '../../utils/helpers';
import styles from './CreateEmployeeForm.module.css';

function CreateEmployeeForm({ handleShowModal }) {
  function handleSubmit(event) {
    event.preventDefault();
    handleShowModal();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const formattedData = formatData(data);
    console.log('Employee info: ', formattedData);
    updateLocalStorage(formattedData);
    // TODO: Rerender EmployeeList component UI with new employee
  }
  const states = [
    {
      name: 'Alabama',
      abbreviation: 'AL',
    },
    {
      name: 'Alaska',
      abbreviation: 'AK',
    },
    {
      name: 'American Samoa',
      abbreviation: 'AS',
    },
    {
      name: 'Arizona',
      abbreviation: 'AZ',
    },
    {
      name: 'Arkansas',
      abbreviation: 'AR',
    },
    {
      name: 'California',
      abbreviation: 'CA',
    },
    {
      name: 'Colorado',
      abbreviation: 'CO',
    },
    {
      name: 'Connecticut',
      abbreviation: 'CT',
    },
    {
      name: 'Delaware',
      abbreviation: 'DE',
    },
    {
      name: 'District Of Columbia',
      abbreviation: 'DC',
    },
    {
      name: 'Federated States Of Micronesia',
      abbreviation: 'FM',
    },
    {
      name: 'Florida',
      abbreviation: 'FL',
    },
    {
      name: 'Georgia',
      abbreviation: 'GA',
    },
    {
      name: 'Guam',
      abbreviation: 'GU',
    },
    {
      name: 'Hawaii',
      abbreviation: 'HI',
    },
    {
      name: 'Idaho',
      abbreviation: 'ID',
    },
    {
      name: 'Illinois',
      abbreviation: 'IL',
    },
    {
      name: 'Indiana',
      abbreviation: 'IN',
    },
    {
      name: 'Iowa',
      abbreviation: 'IA',
    },
    {
      name: 'Kansas',
      abbreviation: 'KS',
    },
    {
      name: 'Kentucky',
      abbreviation: 'KY',
    },
    {
      name: 'Louisiana',
      abbreviation: 'LA',
    },
    {
      name: 'Maine',
      abbreviation: 'ME',
    },
    {
      name: 'Marshall Islands',
      abbreviation: 'MH',
    },
    {
      name: 'Maryland',
      abbreviation: 'MD',
    },
    {
      name: 'Massachusetts',
      abbreviation: 'MA',
    },
    {
      name: 'Michigan',
      abbreviation: 'MI',
    },
    {
      name: 'Minnesota',
      abbreviation: 'MN',
    },
    {
      name: 'Mississippi',
      abbreviation: 'MS',
    },
    {
      name: 'Missouri',
      abbreviation: 'MO',
    },
    {
      name: 'Montana',
      abbreviation: 'MT',
    },
    {
      name: 'Nebraska',
      abbreviation: 'NE',
    },
    {
      name: 'Nevada',
      abbreviation: 'NV',
    },
    {
      name: 'New Hampshire',
      abbreviation: 'NH',
    },
    {
      name: 'New Jersey',
      abbreviation: 'NJ',
    },
    {
      name: 'New Mexico',
      abbreviation: 'NM',
    },
    {
      name: 'New York',
      abbreviation: 'NY',
    },
    {
      name: 'North Carolina',
      abbreviation: 'NC',
    },
    {
      name: 'North Dakota',
      abbreviation: 'ND',
    },
    {
      name: 'Northern Mariana Islands',
      abbreviation: 'MP',
    },
    {
      name: 'Ohio',
      abbreviation: 'OH',
    },
    {
      name: 'Oklahoma',
      abbreviation: 'OK',
    },
    {
      name: 'Oregon',
      abbreviation: 'OR',
    },
    {
      name: 'Palau',
      abbreviation: 'PW',
    },
    {
      name: 'Pennsylvania',
      abbreviation: 'PA',
    },
    {
      name: 'Puerto Rico',
      abbreviation: 'PR',
    },
    {
      name: 'Rhode Island',
      abbreviation: 'RI',
    },
    {
      name: 'South Carolina',
      abbreviation: 'SC',
    },
    {
      name: 'South Dakota',
      abbreviation: 'SD',
    },
    {
      name: 'Tennessee',
      abbreviation: 'TN',
    },
    {
      name: 'Texas',
      abbreviation: 'TX',
    },
    {
      name: 'Utah',
      abbreviation: 'UT',
    },
    {
      name: 'Vermont',
      abbreviation: 'VT',
    },
    {
      name: 'Virgin Islands',
      abbreviation: 'VI',
    },
    {
      name: 'Virginia',
      abbreviation: 'VA',
    },
    {
      name: 'Washington',
      abbreviation: 'WA',
    },
    {
      name: 'West Virginia',
      abbreviation: 'WV',
    },
    {
      name: 'Wisconsin',
      abbreviation: 'WI',
    },
    {
      name: 'Wyoming',
      abbreviation: 'WY',
    },
  ];
  const departments = [
    'Sales',
    'Marketing',
    'Engineering',
    'Human Resources',
    'Legal',
  ];

  return (
    <form
      action="#"
      id="create-employee"
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label htmlFor="first-name" className={styles.label}>
        First Name
      </label>
      <input
        type="text"
        id="first-name"
        name="firstName"
        className={styles.input}
        required
      />

      <label htmlFor="last-name" className={styles.label}>
        Last Name
      </label>
      <input
        type="text"
        id="last-name"
        name="lastName"
        className={styles.input}
        // required
      />

      <label htmlFor="date-of-birth" className={styles.label}>
        Date of Birth
      </label>
      <input
        type="date"
        id="date-of-birth"
        name="dateOfBirth"
        className={styles.input}
        // required
      />

      <label htmlFor="start-date" className={styles.label}>
        Start Date
      </label>
      <input
        type="date"
        id="start-date"
        name="startDate"
        className={styles.input}
        // required
      />

      <fieldset className={styles.address}>
        <legend>Address</legend>

        <label htmlFor="street" className={styles.label}>
          Street
        </label>
        <input
          type="text"
          id="street"
          name="street"
          className={styles.input}
          // required
        />

        <label htmlFor="city" className={styles.label}>
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className={styles.input}
          // required
        />

        <label htmlFor="state" className={styles.label}>
          State
        </label>
        <select name="state" id="state" className={styles.select}>
          {states.map((state) => (
            <option className={styles.option} key={state.name}>
              {state.name}
            </option>
          ))}
        </select>

        <label htmlFor="zip-code" className={styles.label}>
          Zip Code
        </label>
        <input
          type="number"
          id="zip-code"
          name="zipCode"
          className={styles.input}
          // required
        />
      </fieldset>

      <label htmlFor="department" className={styles.label}>
        Department
      </label>
      <select name="department" id="department" className={styles.select}>
        {departments.map((department) => (
          <option key={department}>{department}</option>
        ))}
      </select>

      <div className={styles['button-container']}>
        <button type="submit" className={styles.button}>
          Save
        </button>
      </div>
    </form>
  );
}

export default CreateEmployeeForm;
