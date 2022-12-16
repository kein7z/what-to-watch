export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/my-list',
  Film = '/film/:id',
  AddReview = '/film/:id/review',
  Player = '/player/:id',
  Result = '/result',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  FilmId = '/films',
  Login = '/login',
  Logout = '/logout',
  PromoFilm = '/promo',
  Comments = '/comments',
  FilmsFavorite = '/favorite'
}

export enum StatusError {
  NOT_FOUND = 404,
}

export const TIMEOUT_SHOW_ERROR = 5000;


export enum FilmDetails {
  Overview = 'Overview',
  Detail = 'Details',
  Review = 'Reviews',
}

export enum NameSpace {
  User = 'USER',
  Films = 'FILMS',
  Comments = 'COMMENTS',
  Film = 'FILM',
  FilmPromo = 'FILM_PROMO',
  FilmsSimilar = 'FILMS_SIMILAR',
  Genre = 'GENRE',
  AddComment = 'ADD_COMMENT',
  FilmsFavorite = 'FILMS_FAVORITE',
}

export const FILMS_PER_STEP = 8;

export const MAX_NUMBER_OF_SIMILAR_FILMS = 4;

export const MAX_NUMBER_OF_GENRES = 9;

export enum ProgressBar {
  Start = 0,
  End = 100,
}

export enum DurationTemplate {
  MinutesSeconds = 'm[:] s',
  HoursMinutesSeconds = 'H[:] m[:] s',
}

export enum TimeMetric {
  Second = 'seconds',
  Minute = 'minutes',
}
