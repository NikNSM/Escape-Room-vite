import { Outlet } from 'react-router-dom';
import { AutorizationStatus } from '../../const';
import Header from './header/header';
import Footer from './footer/footer';

type TypeLayoutProps = {
  autorization: AutorizationStatus;
}

export default function Layout({ autorization }: TypeLayoutProps): JSX.Element {
  return (
    <div className="wrapper">
      < Header autorization={autorization} />

      <Outlet />

      <Footer />
    </div>
  );
}
