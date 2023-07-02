import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <>
      <input type="text" onChange={handleFilter} />
    </>
  );
};
