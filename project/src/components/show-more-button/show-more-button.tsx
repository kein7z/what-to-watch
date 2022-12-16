import { FILMS_PER_STEP } from '../../const';

type ShowMoreButtonProps = {
  setFilmsCounter: React.Dispatch<React.SetStateAction<number>>
  filmsCounter: number
}

const ShowMoreButton = ({ setFilmsCounter, filmsCounter }: ShowMoreButtonProps) => {
  const showMoreFilmsHandler = () => {
    setFilmsCounter(filmsCounter + FILMS_PER_STEP);
  };

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={showMoreFilmsHandler}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMoreButton;
