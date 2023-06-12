import PropTypes from 'prop-types';
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
            <li className={css.item} key={id}>
                <p>{name}</p>
                <p>: {number}</p>
                <button className={css.buttons} onClick={() => onDeleteContact(id)}>Delete</button>
            </li>))}
    </ul>);

ContactList.propTypes = {
contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    )
};
    
export default ContactList;