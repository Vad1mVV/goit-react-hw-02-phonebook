import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

export const ContactForm = ({contactChange}) => {
    const initialValues = {
        name: '',
        number: '',
    }

    return (
        <Formik initialValues={initialValues} onSubmit={contactChange}>
            <Form>
                <label>
                    <p>Name</p>
                    <Field
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <br />
                <label>
                    <p>Number</p>
                    <Field
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <br />
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    )
}

ContactForm.propTypes = {
    contactChange: PropTypes.func
}