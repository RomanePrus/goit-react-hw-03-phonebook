import ContactItem from 'components/ContactItem';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            nanoid={id}
            deleteContact={deleteContact}
          />
        );
      })}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
