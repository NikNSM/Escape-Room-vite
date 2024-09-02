import { Link } from 'react-router-dom';
import { RouteAdresses } from '../../const';

export default function Page404(): JSX.Element {
  return (
    <main>
      <div style={{ textAlign: 'center' }}>
        <p className="title--size-l title--uppercase">404</p>
        <p className="title--size-s">Кажется вы заблудился. Вернемся в начало?</p>
        <Link className="btn btn--accent" to={RouteAdresses.MAIN_PAGE}>
          <p className="title--size-s">На Главную</p>
        </Link>
      </div>
    </main>
  );
}
