import React from 'react';
import style from './Pages.module.css';

export const HomePage = () => (
  <div className={style.wrapper}>
    <div>
      <h1 className={style.title}>Welcome 👋</h1>
    </div>
    <div>
      <p className={style.text}>
        Now you will exactly not forget your contacts!
      </p>
    </div>
    <div>
      <p className={style.info}>
        Please, <b>Sign Up</b> or <b>Sign In</b> to have access to the
        Phonebook!
      </p>
    </div>
  </div>
);
