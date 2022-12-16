import { MAX_NUMBER_OF_SIMILAR_FILMS } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilmsSimilar } from '../../store/films-similar-process/selectors';
import RenderFilmsCard from '../render-films-list.tsx/render-films-card/render-films-card';

const RenderFilmsSimilar = () => {

  const films = useAppSelector(getFilmsSimilar);

  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__films-list">
          {films.slice(0, MAX_NUMBER_OF_SIMILAR_FILMS).map((item) => (<RenderFilmsCard key={item.id} {...item} />))}
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

export default RenderFilmsSimilar;
