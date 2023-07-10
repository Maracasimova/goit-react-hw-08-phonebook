import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Navigate } from 'react-router-dom';
import style from './Pages.module.css';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={style.div}>
      <h1 className={style.h1}>Sign In</h1>
      <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={style.label}>
          Email
          <input className={style.input} type="email" name="email" />
        </label>
        <label className={style.label}>
          Password
          <input className={style.input} type="password" name="password" />
        </label>
        <button className={style.btn} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};
