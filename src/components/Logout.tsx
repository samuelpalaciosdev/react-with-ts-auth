import { useNavigate } from 'react-router-dom';
import { clearLocalStorage } from '../store/store';
import { PublicRoutes } from '../types';

const Logout = () => {
  const navigate = useNavigate();
  const logout = () => {
    clearLocalStorage();
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };

  return <button onClick={logout}>Logout</button>;
};
export default Logout;
