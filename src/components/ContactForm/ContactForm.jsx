import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import style from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: e.target.name.value,
      number: e.target.number.value,
    };
    if (contacts.some(e => e.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      e.target.reset();
      return;
    }
    dispatch(addContact(newContact));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.div}>
        <label htmlFor="name" className={style.label}>
          Name
        </label>
        <input
          className={style.input}
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>

      <div className={style.div}>
        <label htmlFor="number" className={style.label}>
          Number
        </label>
        <input
          className={style.input}
          name="number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button className={style.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
