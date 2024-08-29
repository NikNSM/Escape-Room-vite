import { Link, NavLink, useLocation } from 'react-router-dom';
import { RouteAdresses } from '../../../const';
import { AutorizationStatus } from '../../../const';
import LogoMainPage from './logo/logo-main-page';
import Logo from './logo/logo';

type TypeHeaderProps = {
  autorization: AutorizationStatus;
}


export default function Header({ autorization }: TypeHeaderProps): JSX.Element {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <div className="container container--size-l">
        {pathname === RouteAdresses.MAIN_PAGE ? <LogoMainPage /> : <Logo />}

        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <NavLink to={RouteAdresses.MAIN_PAGE} className={({ isActive }) => isActive ? 'link active' : 'link not-disabled'}>Квесты</ NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink to={RouteAdresses.CONTACTS} className={({ isActive }) => isActive ? 'link active' : 'link'}>Контакты</ NavLink>
            </li>
            {
              autorization === AutorizationStatus.AUTORIZATION ?
                <li className="main-nav__item">
                  <NavLink to={RouteAdresses.MY_QUESTS} className={({ isActive }) => isActive ? 'link active' : 'link'}>Мои бронирования</ NavLink>
                </li> : ''
            }
          </ul>
        </nav>
        <div className="header__side-nav">
          {
            autorization === AutorizationStatus.AUTORIZATION ?
              <a className="btn btn--accent header__side-item" href="#">Выйти</a> :
              <Link className="btn header__side-item header__login-btn" to={RouteAdresses.LOGIN}>Вход</Link>
          }
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}
