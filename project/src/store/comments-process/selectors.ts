import { NameSpace } from '../../const';
import { Comments } from '../../types/film-comments';
import { State } from '../../types/state';

export const getComments = (state: State): Comments[] => state[NameSpace.Comments].comments;

export const getCommentsLoadingStatus = (state: State): boolean => state[NameSpace.Films].isFilmsLoading;
