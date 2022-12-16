import { FilmDetails } from '../../const';
import { useAppSelector } from '../../hooks';
import { getComments } from '../../store/comments-process/selectors';
import RenderFilmDetailsTabDetails from './render-film-details-tab-details/render-film-details-tab-details';
import RenderFilmDetailsOverview from './render-film-details-tab-overview/render-film-details-tab-overview';
import RenderFilmDetailReviews from './render-film-details-tab-reviews/render-film-detail-tab-reviews';

type RenderFilmDetailsProps = {
  filmDetail: string,
}

const RenderFilmDetails = (filmDetail: RenderFilmDetailsProps) => {

  const comments = useAppSelector(getComments);

  if (filmDetail.filmDetail === FilmDetails.Review) {
    return (
      <>
        {comments.map((item) => (<RenderFilmDetailReviews key={item.id} {...item} />))}
      </>
    );
  }

  if (filmDetail.filmDetail === FilmDetails.Detail) {
    return <RenderFilmDetailsTabDetails />;
  }

  return (
    < RenderFilmDetailsOverview />
  );
};

export default RenderFilmDetails;
