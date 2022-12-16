import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import { logoutAction } from '../../../store/api-actions';
import { AppRoute } from '../../../const';

const RenderHeaderLogout = () => {
  const dispatch = useAppDispatch();

  const onClickLogoutHeandler = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width={63}
              height={63}
            />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link
          to="/"
          className="user-block__link"
          onClick={onClickLogoutHeandler}
        >
          Sign out
        </Link>
      </li>
    </ul >
  );
};

export default RenderHeaderLogout;
