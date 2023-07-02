import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
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

  return (
    <div className={style.div}>
      <h1 className={style.h1}>Sign in</h1>
      <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={style.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={style.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
