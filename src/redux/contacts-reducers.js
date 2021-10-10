import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contacts-actions';
import initialContacts from '../data/initialContacts.json';

const items = createReducer(initialContacts, {
  [contactsActions.addContact]: (state, { payload }) => {
    const isNameExist = state.find(
      contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
    );
    const isNumberExist = state.find(
      contact => contact.number === payload.number,
    );
    if (isNameExist) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    if (isNumberExist) {
      alert(`${payload.number} is already in contacts`);
      return state;
    }
    return [payload, ...state];
  },
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
