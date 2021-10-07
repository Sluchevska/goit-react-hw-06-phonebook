import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contacts-actions';
import initialContacts from '../components/data/initialContacts.json';

const items = createReducer(initialContacts, {
  [contactsActions.addContact]: (state, { payload }) => {
    if (
      state.find(
        contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
      )
    ) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    return [payload, ...state];
  },
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, {payload}) => payload,
});

export default combineReducers({
  items,
  filter,
});
