import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';

import {
  Span,
  Button,
  ContactItems,
  ContainerItems,
} from './ContactList.styled';

function ContactList() {
  const dispatch = useDispatch();
  const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };
  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getVisibleContacts(items, filter),
  );
  return (
    <ContainerItems>
      {contacts.map(({ id, name, number }) => (
        <ContactItems key={id}>
          <Span>{name}: </Span>
          <Span>{number} </Span>
          <Button
            type="button"
            onClick={() => dispatch(contactsActions.deleteContact(id))}
          >
            Delete contact
          </Button>
        </ContactItems>
      ))}
    </ContainerItems>
  );
}

export default ContactList;
