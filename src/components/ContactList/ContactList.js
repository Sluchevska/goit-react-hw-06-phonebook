import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions'

import {
  Span,
  Button,
  ContactItems,
  ContainerItems,
} from './ContactList.styled';

function ContactList({ contacts, onRemove }) {
  return (
    <ContainerItems>
      {contacts.map(({ id, name, number }) => (
        <ContactItems key={id} name={name} number={number}>
          <Span>{name}: </Span>
          <Span>{number} </Span>
          <Button type="button" onRemove={()=>onRemove(id)} >
            Delete contact
          </Button>
        </ContactItems>
      ))}
    </ContainerItems>
  );
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items
})

const mapDispatchToProps = dispatch => ({
  onRemove: (id)=>dispatch (contactsActions(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ContactList);

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     }),
//   ),
//   onRemove: PropTypes.func,
// };
