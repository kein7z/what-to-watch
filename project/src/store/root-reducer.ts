import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { addCommentProcess } from './add-comment-process/add-comment-process';
import { commentsProcess } from './comments-process/comments-process';
import { filmProcess } from './film-process/film-process';
import { filmPromoProcess } from './film-promo-process/film-promo-process';
import { filmsFavoriteProcess } from './films-favorite-process/films-favorite-process';
import { filmsProcess } from './films-process/films-process';
import { filmsSimilarProcess } from './films-similar-process/films-similar-process';
import { genreProcess } from './genre-process/genre-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Comments]: commentsProcess.reducer,
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.FilmPromo]: filmPromoProcess.reducer,
  [NameSpace.FilmsSimilar]: filmsSimilarProcess.reducer,
  [NameSpace.Genre]: genreProcess.reducer,
  [NameSpace.AddComment]: addCommentProcess.reducer,
  [NameSpace.FilmsFavorite]: filmsFavoriteProcess.reducer,
});
