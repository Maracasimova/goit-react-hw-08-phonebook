import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilter } from 'redux/selectors';
import style from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <div className={style.div}>
            <li key={id} className={style.li}>
              {name}: {number}
            </li>
            <button
              className={style.btn}
              type="submit"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </div>
        );
      })}
    </ul>
  );
};


