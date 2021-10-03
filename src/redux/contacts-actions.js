import types from "./contacts-type"
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
    type: types.ADD,
    payload:
        uuidv4(),
      name,
      number,
})

const deleteContacts = contactsID => ({
  type: types.DELETE,
  payload: contactsID
})

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {deleteContacts, addContact, changeFilter}