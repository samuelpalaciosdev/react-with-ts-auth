import { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Navigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './types';
import { AuthGuard } from './guards';
import { RoutesWithNotFound } from './utilities';
import { Logout } from './components';

const Login = lazy(() => import('./pages/Login/Login'));
const Private = lazy(() => import('./pages/Private/Private'));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<>Loading...</>}>
        <BrowserRouter>
          <Logout />
          <RoutesWithNotFound>
            <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
