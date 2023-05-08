import { Navigate, Outlet } from 'react-router-dom';
import { UseAuthStatus } from '../hooks/UseAuthStatus.js';
import Spinner from './Spinner.jsx';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = UseAuthStatus();
  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />;
};

export default PrivateRoute;
