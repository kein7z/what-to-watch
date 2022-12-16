import { humanizeDueDate } from '../../../utils';

type RenderFilmDetailReviewsProps = {
  comment: string
  date: string
  rating: number
  user: {
    id: number
    name: string
  }
};

const RenderFilmDetailTabReviews = ({ comment, date, rating, user }: RenderFilmDetailReviewsProps) => (
  <div className="film-card__reviews film-card__row">
    <div className="film-card__reviews-col">
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">
            {comment}
          </p>
          <footer className="review__details">
            <cite className="review__author">{user.name}</cite>
            <time className="review__date" dateTime="2016-12-24">
              {humanizeDueDate(date)}
            </time>
          </footer>
        </blockquote>
        <div className="review__rating">{rating}</div>
      </div>
    </div>
  </div>
);

export default RenderFilmDetailTabReviews;
