import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import {
  FormWrap,
  FormField,
  FormLabel,
  FormButton,
  ErrorMsg,
} from './ContactForm.styled';

function validateName(name) {
  let error;
  if (!name) {
    error = 'Enter name!';
  } else if (
    !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(name)
  ) {
    error =
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
  }
  return error;
}

function validateNumber(number) {
  let error;
  if (!number) {
    error = 'Enter telephone number!';
  } else if (
    !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
      number
    )
  ) {
    error =
      'Phone number must be more then 5 digits and can contain spaces, dashes, parentheses and can start with +';
  }
  return error;
}

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const allContacts = contacts.map(contact =>
      contact.name.toLocaleLowerCase()
    );
    const newContact = values.name.toLocaleLowerCase();

    if (allContacts.includes(newContact)) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <FormWrap autoComplete="off">
          <FormLabel>
            Name
            <FormField
              id="name"
              name="name"
              type="text"
              validate={validateName}
            />
            {errors.name && touched.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </FormLabel>
          <FormLabel>
            Number
            <FormField
              id="number"
              name="number"
              type="tel"
              validate={validateNumber}
            />
            {errors.number && touched.number && (
              <ErrorMsg>{errors.number}</ErrorMsg>
            )}
          </FormLabel>
          <FormButton type="submit">Add contact</FormButton>
        </FormWrap>
      )}
    </Formik>
  );
};
