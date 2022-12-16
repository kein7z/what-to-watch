import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/films-favorite-process/selectors';
import RenderFilmsCard from '../render-films-list.tsx/render-films-card/render-films-card';

const RenderFilmsFavoriteList = () => {
  const filmsFavorite = useAppSelector(getFavoriteFilms);

  return (
    <>
      {
        filmsFavorite.map((item) => (<RenderFilmsCard key={item.id} {...item} />))
      }
    </>
  );
};

export default RenderFilmsFavoriteList;
