import { NameSpace } from '../../const';
import { Films } from '../../types/film-type-mock';
import { State } from '../../types/state';

export const getFavoriteFilms = (state: State): Films[] => state[NameSpace.FilmsFavorite].favoriteFilms;

export const getLoadingFilmsFavoriteStatus = (state: State): boolean => state[NameSpace.FilmsFavorite].isFilmsFavoriteLoading;
