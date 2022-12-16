import { NameSpace } from '../../const';
import { Films } from '../../types/film-type-mock';
import { State } from '../../types/state';

export const getFilmPromo = (state: State): Films | null => state[NameSpace.FilmPromo].filmPromo;

export const getFilmPromoLoadingStatus = (state: State): boolean => state[NameSpace.FilmPromo].isFilmPromoLoading;
