import PropTypes from 'prop-types';
import { Input, LabelInput } from '../ContactForm/ContactForm.styled';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions'

const Filter = ({ value, onChange, onBlur }) => (
  <label>
    <LabelInput>Find contact by name</LabelInput>
    <Input type="text" value={value} onChange={onChange} onBlur={onBlur} />
  </label>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter
})

const mapDispatchToProps = dispatch=> ({
  onChange: (e)=> dispatch(contactsActions.changeFilter(e.target.value))
})



export default connect(mapStateToProps,mapDispatchToProps)(Filter);

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
