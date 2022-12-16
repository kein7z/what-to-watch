import { NameSpace } from '../../const';
import { Films } from '../../types/film-type-mock';
import { State } from '../../types/state';

export const getFilmsSimilar = (state: State): Films[] => state[NameSpace.FilmsSimilar].filmsSimilar;

export const getFilmsSimilarLoadingStatus = (state: State): boolean => state[NameSpace.FilmsSimilar].isFilmsSimilarLoading;
