import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/HomePage/HomePage';
import RegistreationPage from '../pages/RegistretionPage/RegistretionPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import { PhonebookPage } from 'pages/PhonebookPage/PhonebookPage';
import Layout from './Layout/Layout';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import PublicRoutes from './PublicRoutes/PublicRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileThunk } from 'redux/auth/auth-thunk';
import { selectIsRefreshing } from 'redux/auth/selectors';

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  console.log(isRefreshing)

  useEffect(() => {
    dispatch(getProfileThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <p> Please wait... </p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route
          path="registretion"
          element={
            <PublicRoutes
              redirectTo="/phonebook"
              component={<RegistreationPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <PublicRoutes redirectTo="/phonebook" component={<LoginPage />} />
          }
        />
        <Route
          path="phonebook"
          element={
            <PrivateRoutes redirectTo="/login" component={<PhonebookPage />} />
          }
        ></Route>
      </Route>
    </Routes>
  );
};
