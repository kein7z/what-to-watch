import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/films-process/selectors';
import { getGenre } from '../../store/genre-process/selectors';
import RenderGenreList from '../render-genres-list/render-genre-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import RenderFilmsCard from './render-films-card/render-films-card';

const RenderFilmsList = () => {
  const films = useAppSelector(getFilms);
  const genre = useAppSelector(getGenre);

  const [filmsCounter, setFilmsCounter] = useState(8);

  useEffect(() => {
    setFilmsCounter(8);
  }, [genre]);

  const filtredFilmsList = films.filter((item) => item.genre === genre || genre === 'All genres');

  return (
    <>
      <RenderGenreList />
      <div className="catalog__films-list">
        {filtredFilmsList
          .slice(0, filmsCounter)
          .map((item) => (<RenderFilmsCard key={item.id} {...item} />))}
      </div>
      {filmsCounter < filtredFilmsList.length
        ?
        <ShowMoreButton setFilmsCounter={setFilmsCounter} filmsCounter={filmsCounter} />
        :
        null}
    </>
  );
};

export default RenderFilmsList;
