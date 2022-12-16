import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AddFavoriteButton from '../../components/add-favorite-button/add-favorite-button';
import AddReviewButton from '../../components/add-review-button/add-review-button';
import RenderFilmNavigation from '../../components/render-film-navigation/render-film-navigation';
import RenderFilmsSimilar from '../../components/render-films-similar/render-films-similar';
import RenderHeaderLogin from '../../components/render-header-login/render-header-login';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction, fetchFilmIdAction, fetchFilmsSimilarAction } from '../../store/api-actions';
import { getFilm, getFilmLoadingError, getFilmLoadingStatus } from '../../store/film-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

const FilmDetailsScreen = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const filmLoadingError = useAppSelector(getFilmLoadingError);
  const filmLoading = useAppSelector(getFilmLoadingStatus);
  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    const filmId = Number(id);

    dispatch(fetchFilmIdAction(Number(filmId)));
    dispatch(fetchCommentsAction(Number(filmId)));
    dispatch(fetchFilmsSimilarAction(Number(filmId)));
  }, [dispatch, id]);

  if (filmLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (filmLoadingError) {
    return <Navigate to='*' />;
  }

  const style = { background: film?.backgroundColor };

  return (
    <>
      <section className="film-card film-card--full" style={style}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film?.backgroundImage}
              alt={film?.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <RenderHeaderLogin />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>
              <div className="film-card__buttons">
                <Link to={`/player/${film?.id}`} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <AddFavoriteButton />
                {authStatus === AuthorizationStatus.Auth ? <AddReviewButton /> : null}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film?.posterImage}
                alt={film?.name}
                width={218}
                height={327}
              />
            </div>
            <RenderFilmNavigation />
          </div>
        </div>
      </ section>
      <RenderFilmsSimilar />
    </>
  );
};

export default FilmDetailsScreen;
