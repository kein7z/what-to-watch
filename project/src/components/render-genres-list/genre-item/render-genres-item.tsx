import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setGenre } from '../../../store/genre-process/genre-process';
import { getGenre } from '../../../store/genre-process/selectors';

type RenderGenresItemProps = {
  genre: string,
};

const RenderGenresItem = ({ genre }: RenderGenresItemProps) => {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getGenre);

  const onClickSetGenreHendler = () => {
    dispatch(setGenre(genre));
  };

  return (
    <li className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`} >
      <a href="#" className="catalog__genres-link" onClick={onClickSetGenreHendler}>
        {genre}
      </a>
    </li>
  );
};

export default RenderGenresItem;
