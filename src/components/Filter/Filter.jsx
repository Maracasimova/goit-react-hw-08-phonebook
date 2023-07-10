import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import style from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <div className={style.div}>
      <input className={style.input} type="text" onChange={handleFilter} placeholder='Search...' />
    </div>
  );
};
