import PropTypes from 'prop-types';

export const ContactList = ({contacts}) => {
    return <ul>
        {contacts.map(contact => (
            <li key={contact.id} >{contact.name} {contact.number}</li>
        ))}
    </ul>
}

ContactList.propTypes = {
    contacts: PropTypes.array
}