import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFilm } from '../../store/film-process/selectors';

const AddReviewButton = () => {

  const film = useAppSelector(getFilm);

  return (
    <Link to={`/film/${film?.id}/review`} className="btn film-card__button">
      Add review
    </Link>
  );
};

export default AddReviewButton;
