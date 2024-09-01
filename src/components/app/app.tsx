import { Routes, Route } from 'react-router-dom';
import { RouteAdresses } from '../../const';
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';
import ContactsPage from '../contacts-page/contacts-page';
import MainPage from '../main-page/main-page';
import BookingQuetsPage from '../booking-quest-page/booling-quets-page';
import MyQuestsPage from '../my-quests-page/my-quests-page';
import Page404 from '../page-404/page-404';
import QuetsPage from '../quest-page/quests-page';
import AutorizationPage from '../autorization-page/autorization-page';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { useAppSelector } from '../../utils';

export default function App(): JSX.Element {
  const statusAutorization = useAppSelector((state) => state.user.status);
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={RouteAdresses.MAIN_PAGE} element={<Layout autorization={statusAutorization} />} >
          <Route index element={<MainPage />} />
          <Route path={RouteAdresses.CONTACTS} element={<ContactsPage />} />
          <Route path={RouteAdresses.QUEST}>
            <Route path=':id' element={<QuetsPage />} />
          </Route>
          <Route path={`${RouteAdresses.QUEST}/:id${RouteAdresses.BOOKING}`} element=
            {
              <PrivateRoute autorization={statusAutorization} >
                <BookingQuetsPage />
              </PrivateRoute>
            }
          />
          <Route path={RouteAdresses.LOGIN} element={<AutorizationPage />} />
          <Route path={RouteAdresses.MY_QUESTS} element=
            {
              <PrivateRoute autorization={statusAutorization} >
                <MyQuestsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </HistoryRouter>
  );
}
