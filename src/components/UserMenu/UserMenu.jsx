import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import style from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={style.wrapper}>
      <p className={style.username}>Welcome, {user.name}</p>
      <button
        className={style.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Sign Out
      </button>
    </div>
  );
};