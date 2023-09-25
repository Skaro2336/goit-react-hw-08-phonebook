import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/auth-thunk';
import { UserName } from './Header.styled';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

export default function Header() {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handleLogin = () => {};

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phonebook
          </Typography>

          {isLoggedIn && <UserName>{user.name}</UserName>}

          <Link to="/" style={{ color: 'white' }}>
            <Button color="inherit">Home</Button>
          </Link>
          {!isLoggedIn && (
            <Link to="/registretion" style={{ color: 'white' }}>
              <Button color="inherit">Sign Up</Button>
            </Link>
          )}

          <Link to="/login" style={{ color: 'white' }}>
            <Button
              onClick={isLoggedIn ? handleLogOut : handleLogin}
              color="inherit"
            >
              {isLoggedIn ? 'LogOut' : 'Login'}
            </Button>
          </Link>
          {isLoggedIn && (
          <Link to="/phonebook" style={{ color: 'white' }}>
            <Button color="inherit">Contacts</Button>
          </Link>)}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
