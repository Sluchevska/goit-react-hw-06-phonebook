import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/addContact', (name, number) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contacts/deleteContact');

const changeFilter = createAction('contacts/changeFilter');


// eslint-disable-next-line import/no-anonymous-default-export
export default { deleteContact, addContact, changeFilter };
