import { refreshUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { PublicRoute } from 'components/AuthRouts/PublicRoute';
import { PrivateRoute } from 'components/AuthRouts/PrivateRoute';
import { Layout } from 'components/AuthRouts/Layout';
import { ContactsPage } from 'pages/ContactsPage';
import { useAuth } from 'hooks';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/register"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
