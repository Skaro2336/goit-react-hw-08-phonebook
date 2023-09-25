import React from 'react';
import Notiflix from 'notiflix';

import {
  EmailInput,
  PasswordInput,
  SignUpForm,
  UserNameInput,
  Noreg,
  Btn,
} from './SignUpFormComponent.styled';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk, signUpThunk } from 'redux/auth/auth-thunk';

export default function SignUpFormComponent() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const userName = e.target.elements.name.value;
    const userMail = e.target.elements.email.value;
    const userPassword = e.target.elements.password.value;
    const newUser = {
      name: userName,
      email: userMail,
      password: userPassword,
    };
    dispatch(signUpThunk(newUser))
      .then(() => {
        dispatch(
          loginThunk({
            email: userMail,
            password: userPassword,
          })
        );
      })
      .catch(() => Notiflix.Notify.failure('Try another password or mail'));
  };

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <UserNameInput type="text" name="name" placeholder="name" />
      <EmailInput type="email" name="email" placeholder="email" />
      <PasswordInput type="password" name="password" placeholder="password" />
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <Noreg>Already registered?</Noreg>
      </Link>
      <Btn type="submit">Sign up</Btn>
    </SignUpForm>
  );
}
