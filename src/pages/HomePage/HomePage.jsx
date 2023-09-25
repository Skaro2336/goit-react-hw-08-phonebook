import { Button } from '@mui/material';
import React from 'react';
import { ContainerPage, HomePageTitle, Greetings } from './HomePage.styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const { isLoggedIn } = useSelector(state => state.auth);
  return (
    <ContainerPage>
      <HomePageTitle>Phonebook</HomePageTitle>
      <Greetings>
        Welcome to phonebook. <br />
        This is the place to keep all your contacts.
      </Greetings>

      {!isLoggedIn && (
        <div style={{ marginTop: '100px' }}>
          <Link to="/login" style={{ color: 'white' }}>
            <Button variant="contained">Try it now!</Button>
          </Link>
        </div>
      )}
    </ContainerPage>
  );
}
