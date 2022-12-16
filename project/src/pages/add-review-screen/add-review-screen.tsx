import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import RenderHeaderLogin from '../../components/render-header-login/render-header-login';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchAddCommentsAction, fetchCommentsAction } from '../../store/api-actions';
import { getFilm } from '../../store/film-process/selectors';

const AddReviewScreen = () => {
  const film = useAppSelector(getFilm);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [formData, setFormData] = useState({
    rating: 0,
    'comment': '',
  });

  const fieldChangeHandler = (evt: ChangeEvent<(HTMLInputElement | HTMLTextAreaElement)>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const starsButtonList = Array.from({ length: 10 }, (_, i) => {
    const key = Number(10 - i);
    return (
      <>
        <input className="rating__input" id={`star-${key}`} type="radio" name="rating" value={`${key}`} onChange={fieldChangeHandler} />
        <label className="rating__label" htmlFor={`star-${key}`}>{`Rating ${key}`}</label>
      </>);
  });

  const handleReviewFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.rating && formData['comment']) {
      dispatch(fetchAddCommentsAction([params?.id, formData]));
      dispatch(fetchCommentsAction(Number(params?.id)));
      navigate(`/film/${params?.id}`);
    }
  };

  const formDisabled = () => {
    if (formData.rating === 0 || (formData.comment.length < 50 || formData.comment.length > 400)) {
      return true;
    } else {
      return false;
    }
  };

  const style = { background: film?.backgroundColor };

  return (
    <section className="film-card film-card--full" style={style}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={film?.backgroundImage}
            alt={film?.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">
                  {film?.name}
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <RenderHeaderLogin />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={film?.posterImage}
            alt={film?.name}
            width={218}
            height={327}
          />
        </div>
      </div>
      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={handleReviewFormSubmit}>
          <div className="rating">
            <div className="rating__stars">
              {starsButtonList}
            </div>
          </div>
          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="comment"
              id="review-text"
              placeholder="Review text"
              onChange={fieldChangeHandler}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={formDisabled()}>
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddReviewScreen;
