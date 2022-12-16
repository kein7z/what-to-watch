import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import RenderHeaderLogout from './render-header-logout/render-header-logout';

const RenderHeaderLogin = () => {
  const authStatus = useAppSelector(getAuthorizationStatus);

  if (authStatus === AuthorizationStatus.Auth) {
    return <RenderHeaderLogout />;
  }

  return (
    <div className="user-block">
      <Link to={AppRoute.SignIn} className="user-block__link">
        Sign in
      </Link>
    </div>
  );
};

export default RenderHeaderLogin;
