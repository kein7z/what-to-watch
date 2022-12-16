import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import NotFoundScreen from '../../pages/404-not-found-screen/404-not-found-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmDetailsScreen from '../../pages/film-overview-screen/film-overview-screen';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { useAppSelector } from '../../hooks';
import { getLoadingFilmsStatus } from '../../store/films-process/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import AuthPageLoginRoute from '../auth-page-login-route/auth-page-login-route';

const App = () => {
  const loadingFilms = useAppSelector(getLoadingFilmsStatus);

  if (loadingFilms) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory} >
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.SignIn}
          element={
            <AuthPageLoginRoute>
              <SignInScreen />
            </AuthPageLoginRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmDetailsScreen />}
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReviewScreen />
            </PrivateRoute>
          }
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter >
  );
};

export default App;
