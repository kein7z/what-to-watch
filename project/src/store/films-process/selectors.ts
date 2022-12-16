import { NameSpace } from '../../const';
import { Films } from '../../types/film-type-mock';
import { State } from '../../types/state';

export const getFilms = (state: State): Films[] => state[NameSpace.Films].films;

export const getLoadingFilmsStatus = (state: State): boolean => state[NameSpace.Films].isFilmsLoading;
