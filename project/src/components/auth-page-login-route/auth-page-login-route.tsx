import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import * as React from 'react';

type AuthPageLoginRouteProps = {
  children: JSX.Element;
}

const AuthPageLoginRoute: React.FC<AuthPageLoginRouteProps> = (props) => {
  const authStatus = useAppSelector(getAuthorizationStatus);

  return (
    authStatus !== AuthorizationStatus.Auth
      ? props.children
      : <Navigate to={AppRoute.Main} />
  );
};

export default AuthPageLoginRoute;
