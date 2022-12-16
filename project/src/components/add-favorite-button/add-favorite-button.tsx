import { useEffect } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { patchToAddFavoriteFilmAction, fetchFilmsFavoriteAction, fetchFilmPromoAction } from '../../store/api-actions';
import { getAddToFavoriteFilmStatus, getFilm } from '../../store/film-process/selectors';
import { getFilmPromo } from '../../store/film-promo-process/selectors';
import { getFavoriteFilms } from '../../store/films-favorite-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { Films } from '../../types/film-type-mock';

const AddFavoriteButton = () => {
  const dispatch = useAppDispatch();
  const filmsFavorite = useAppSelector(getFavoriteFilms);
  const film = useAppSelector(getFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const loadingStatus = useAppSelector(getAddToFavoriteFilmStatus);
  const filmPromo = useAppSelector(getFilmPromo);

  let currentFilm: Films | null = null;

  film ? currentFilm = film : currentFilm = filmPromo;

  const favorieFilmHandler = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(patchToAddFavoriteFilmAction({
        filmID: currentFilm?.id,
        status: currentFilm?.isFavorite ? 0 : 1
      }));
    } else {
      dispatch(redirectToRoute(AppRoute.SignIn));
    }
  };

  useEffect(() => {
    dispatch(fetchFilmsFavoriteAction());
    dispatch(fetchFilmPromoAction());
  }, [loadingStatus, dispatch]);

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={favorieFilmHandler}
    >
      <svg viewBox="0 0 19 20" width={19} height={20}>
        <use xlinkHref={currentFilm?.isFavorite ? '#in-list' : '#add'} />
      </svg>
      <span>My list</span>
      <span className="film-card__count">{filmsFavorite.length}</span>
    </button>
  );
};

export default AddFavoriteButton;
