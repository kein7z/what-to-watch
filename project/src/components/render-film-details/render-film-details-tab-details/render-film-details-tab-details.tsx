import { useAppSelector } from '../../../hooks';
import { getFilm } from '../../../store/film-process/selectors';
import { formattingLastTime } from '../../../utils';

const RenderFilmDetailsTabDetails = () => {

  const film = useAppSelector(getFilm);

  const runTime = film?.runTime;

  return (
    <div className="film-card__desc">
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{film?.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {film?.starring}
            </span>
          </p>
        </div>
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{formattingLastTime(runTime)}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film?.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film?.released}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RenderFilmDetailsTabDetails;
