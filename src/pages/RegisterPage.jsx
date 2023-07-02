import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';
import style from './Pages.module.css';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={style.div}>
      <h1 className={style.h1}>Create account</h1>

      <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={style.label}>
          Your name
          <input placeholder="First or last name" type="text" name="name" />
        </label>
        <label className={style.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={style.label}>
          Password
          <input
            placeholder="At least 6 characters"
            type="password"
            name="password"
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
      <p className={style.p}>
        By creating an account you agree to Conditions of Use
      </p>
      <p className={style.p}>
        Already have an account?{' '}
        <NavLink className={style.link} to="/login">
          Sign in{' '}
        </NavLink>{' '}
      </p>
    </div>
  );
};
