import PropTypes from 'prop-types';

export const ContactList = ({contacts, filter, deleteContact}) => {
    return <ul>
        {contacts.filter(contact => contact.name.toLowerCase().includes(filter)).map(contact => (
            <div key={contact.id}>
                <li >{contact.name}: {contact.number}</li>
                <button id={contact.id} type='button' onClick={deleteContact}>Delete</button>
            </div>
        ))}
    </ul>
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    deleteContact: PropTypes.func,
}