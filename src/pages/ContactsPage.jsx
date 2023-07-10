import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ThreeDots } from 'react-loader-spinner';
import { selectIsLoading, selectContacts, selectError } from 'redux/selectors';
import style from './Pages.module.css';

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  return (
    <>
      <h1 className={style.h1}>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <ThreeDots />}
      <h2 className={style.h1}>Contacts</h2>
      <p className={style.p}>Find contacts by name</p>
      <Filter />
      <ContactList contacts={contacts} />
    </>
  );
};
