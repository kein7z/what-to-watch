import { useState } from 'react';
import { FilmDetails } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilm } from '../../store/film-process/selectors';
import RenderFilmDetails from '../render-film-details/render-film-details';

const RenderFilmNavigation = () => {

  const film = useAppSelector(getFilm);

  const [filmDetails, setFilmDetails] = useState('Overview');

  const ratingDescription = (rating: number | undefined) => {

    if (rating !== undefined) {
      switch (true) {
        case rating >= 0 && rating < 3:
          return 'Bad';

        case rating >= 3 && rating < 5:
          return 'Normal';

        case rating >= 5 && rating < 8:
          return 'Good';

        case rating >= 8 && rating < 10:
          return 'Good';

        case rating === 10:
          return 'Awesome';
      }
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(FilmDetails).map((key) => (
            <li key={key} className={`film-nav__item ${key === filmDetails ? 'film-nav__item--active' : ''}`}>
              <button className="film-nav__link btn"
                onClick={(evt) => {
                  evt.preventDefault();
                  setFilmDetails(key);
                }}
              >
                {key}
              </button>
            </li>))}
        </ul>
      </nav>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingDescription(film?.rating)}</span>
          <span className="film-rating__count">{film?.scoresCount}</span>
        </p>
      </div>
      <RenderFilmDetails filmDetail={filmDetails} />
    </div>
  );
};

export default RenderFilmNavigation;
