import { Navigate, Outlet } from 'react-router-dom';
import { useProductStore } from '../store/store';
import { PublicRoutes } from '../types';

const AuthGuard = () => {
  const product = useProductStore((state) => state.product);
  return product.id ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;
