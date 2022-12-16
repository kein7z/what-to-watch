import { Link } from 'react-router-dom';
import {useAppDispatch, useAppSelector } from '../../hooks';
import { setFilm } from '../../store/film-process/film-process';
import { getFilmPromo } from '../../store/film-promo-process/selectors';
import AddFavoriteButton from '../add-favorite-button/add-favorite-button';
import RenderHeaderLogin from '../render-header-login/render-header-login';

const RenderHeaderFillmCard = () => {
  const promoFilm = useAppSelector(getFilmPromo);

  const dispatch = useAppDispatch();
  dispatch(setFilm(null));

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img
          src={promoFilm?.backgroundImage}
          alt="The Grand Budapest Hotel"
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <RenderHeaderLogin />
      </header>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src={promoFilm?.posterImage}
              alt="The Grand Budapest Hotel poster"
              width={218}
              height={327}
            />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm?.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm?.genre}</span>
              <span className="film-card__year">{promoFilm?.released}</span>
            </p>
            <div className="film-card__buttons">
              <Link to={`player/${promoFilm?.id}`} className="btn btn--play film-card__button">
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </Link>
              <AddFavoriteButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenderHeaderFillmCard;
