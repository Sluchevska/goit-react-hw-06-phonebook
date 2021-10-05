import PropTypes from 'prop-types';
import { Input, LabelInput } from '../ContactForm/ContactForm.styled';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function Filter() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label>
      <LabelInput>Find contact by name</LabelInput>
      <Input
        type="text"
        value={value}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        onBlur={e =>
          dispatch(contactsActions.changeFilter(e.target.value = ''))
        }
      />
    </label>
  );
}
// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
//   onBlur: e => dispatch(contactsActions.changeFilter((e.target.value = ''))),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
