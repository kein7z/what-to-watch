import { NameSpace } from '../../const';
import { Films } from '../../types/film-type-mock';
import { State } from '../../types/state';

export const getFilm = (state: State): Films | null => state[NameSpace.Film].film;

export const getFilmLoadingStatus = (state: State): boolean => state[NameSpace.Film].isFilmLoading;

export const getFilmLoadingError = (state: State): boolean => state[NameSpace.Film].isFilmLoadingError;

export const getAddToFavoriteFilmStatus = (state: State): boolean => state[NameSpace.Film].isAddFavoriteFilmsLoading;
