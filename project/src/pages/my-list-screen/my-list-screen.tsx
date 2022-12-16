import { useEffect } from 'react';
import RenderFilmsFavoriteList from '../../components/render-films-favorite-list/render-films-favorite-list';
import RenderHeaderLogin from '../../components/render-header-login/render-header-login';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmsFavoriteAction } from '../../store/api-actions';
import { getFavoriteFilms } from '../../store/films-favorite-process/selectors';

const MyListScreen = () => {

  const dispatch = useAppDispatch();
  const filmsFavorite = useAppSelector(getFavoriteFilms);

  useEffect(() => {
    dispatch(fetchFilmsFavoriteAction());
  }, [dispatch]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{filmsFavorite.length}</span>
        </h1>
        <RenderHeaderLogin />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <RenderFilmsFavoriteList />
        </div>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};
export default MyListScreen;
