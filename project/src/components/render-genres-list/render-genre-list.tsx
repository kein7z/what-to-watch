import { MAX_NUMBER_OF_GENRES } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/films-process/selectors';
import RenderGenresItem from './genre-item/render-genres-item';

const RenderGenreList = () => {
  const films = useAppSelector(getFilms);

  const setGenres = new Set(films.map((element) => element.genre));
  const allGenres = ['All genres', ...setGenres];

  return (
    <ul className="catalog__genres-list">
      {allGenres.slice(0, MAX_NUMBER_OF_GENRES).map((item) => (<RenderGenresItem key={item} genre={item} />))}
    </ul>
  );
};

export default RenderGenreList;
