import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { Comments } from './film-comments';
import { Films } from './film-type-mock';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
};

export type FilmsProcess = {
  films: Films[],
  isFilmsLoading: boolean,
};

export type CommentsProcess = {
  comments: Comments[],
  isCommentsLoading: boolean,
};

export type FilmProcess = {
  film: Films | null,
  isFilmLoadingError: boolean,
  isFilmLoading: boolean,
  isAddFavoriteFilmsLoading: boolean,
};

export type FilmPromoProcess = {
  filmPromo: Films | null,
  isFilmPromoLoading: boolean,
}

export type FilmSimilarProcess = {
  filmsSimilar: Films[],
  isFilmsSimilarLoading: boolean,
}

export type GenreProcess = {
  genre: string,
}

export type AddCommentProcess = {
  isAddCommentLoading: boolean,
  reviewSubmited: boolean,
}

export type FilmsFavoriteProcess = {
  favoriteFilms: Films[],
  isFilmsFavoriteLoading: boolean,
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
