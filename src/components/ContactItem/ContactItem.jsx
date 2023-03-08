import PropTypes from 'prop-types';
import { Item, Contact, BtnDelete } from './ContactItem.styled';

const ContactItem = ({ nanoid, name, number, deleteContact }) => {
  return (
    <>
      <Item key={nanoid}>
        <Contact>
          {name}: {number}
        </Contact>
        <BtnDelete type="button" onClick={() => deleteContact(nanoid)}>
          Delete
        </BtnDelete>
      </Item>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  nanoid: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
