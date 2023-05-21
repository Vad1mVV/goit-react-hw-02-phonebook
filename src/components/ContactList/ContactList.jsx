import PropTypes from 'prop-types';

export const ContactList = ({contacts, filter}) => {
    return <ul>
        {contacts.filter(contact => contact.name.toLowerCase().includes(filter)).map(contact => (
            <li key={contact.id} >{contact.name}: {contact.number}</li>
        ))}
    </ul>
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
}