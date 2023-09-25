import React from 'react';
import {
  RegistretionPageContainer,
  RegistretionPageTitle,
} from './RegistretionPage.styled';
import SignUpFormComponent from 'components/SignUpFormComponent/SignUpFormComponent';

export default function registretionPage() {
  return (
    <RegistretionPageContainer>
      <RegistretionPageTitle>Sign up to Phonebook</RegistretionPageTitle>
      <SignUpFormComponent />
    </RegistretionPageContainer>
  );
}
