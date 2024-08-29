import { Link } from 'react-router-dom';
import { RouteAdresses } from '../../../../const';

export default function Logo(): JSX.Element {
  return (
    <Link className="logo header__logo" aria-label="Перейти на Главную" to={RouteAdresses.MAIN_PAGE}>
      <svg width="134" height="52" aria-hidden="true">
        <use xlinkHref="#logo"></use>
      </svg>
    </Link>
  );
}
