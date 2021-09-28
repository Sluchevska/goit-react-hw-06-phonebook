import React, { useState, useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container, TitleH1, TitleH2 } from './App.styled';

import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const currentContacts = JSON.parse(localStorage.getItem('contacts')) ?? '';
    currentContacts && setContacts(currentContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact(name, number) {
    const doubleName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    const doublePhoneNumber = contacts.find(
      contact => contact.number === number,
    );
    doubleName && alert(`${name} is already in contacts`);
    doublePhoneNumber && alert(`This number ${number} is already in contacts`);

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    !doublePhoneNumber &&
      !doubleName &&
      setContacts(prevContacts => [newContact, ...prevContacts]);
  }

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  const handleBlur = e => {
    setFilter('');
    e.currentTarget.value = '';
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Container>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm onSubmit={addContact} />
      <TitleH2>Contacts</TitleH2>
      <Filter value={filter} onChange={changeFilter} onBlur={handleBlur} />
      <ContactList contacts={getVisibleContacts()} onRemove={deleteContact} />
    </Container>
  );
}
