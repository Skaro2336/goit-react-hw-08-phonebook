import React from 'react';
import { LoginPageContainer, LoginPageTitle } from './LoginPage.styled';
import LoginFormComponent from 'components/LoginFormComponent/LoginFormComponent';

export default function loginPage() {
  return (
    <LoginPageContainer>
      <LoginPageTitle>Login to Phonebook</LoginPageTitle>
      <LoginFormComponent />
    </LoginPageContainer>
  );
}
