import * as types from './action-types';

export const addPerson = (person) => {
  console.log('people-action -> addPerson: ', person);
  return {
    type: types.ADD_PERSON,
    person
  };
}
