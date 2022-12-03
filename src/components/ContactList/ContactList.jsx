import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { ContactSection, ContactItem } from './ContactList.styled';
import { getFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ContactSection>
      {filteredContacts.map(contact => {
        return (
          <ContactItem key={contact.id}>
            <Contact contact={contact} />
          </ContactItem>
        );
      })}
    </ContactSection>
  );
};
