import types from './contacts-type';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction(types.ADD, (name, number) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

const deleteContacts = createAction(types.DELETE);

const changeFilter = createAction(types.CHANGE_FILTER);

// eslint-disable-next-line import/no-anonymous-default-export
export default { deleteContacts, addContact, changeFilter };
