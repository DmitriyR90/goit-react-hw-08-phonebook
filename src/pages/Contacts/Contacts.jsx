import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactsWrap } from '../../components/ContactList/ContactList.styled';
import { Filter } from '../../components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading, getError, getContacts } from 'redux/contacts/selectors';
import { Conteiner } from 'components/Conteiner/Conteiner';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Conteiner>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <ContactsWrap>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        {error && <b>{error}</b>}
        {contacts && !isLoading && <ContactList />}
      </ContactsWrap>
    </Conteiner>
  );
};

export default ContactsPage;
