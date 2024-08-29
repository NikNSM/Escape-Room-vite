import { Navigate } from 'react-router-dom';
import { AutorizationStatus, RouteAdresses } from '../../const';

type PrivateRouteProps = {
  autorization: AutorizationStatus;
  children: JSX.Element;
}

export default function PrivateRoute({ autorization, children }: PrivateRouteProps): JSX.Element {
  return (
    autorization === AutorizationStatus.AUTORIZATION ?
      children : <Navigate to={RouteAdresses.LOGIN} />
  );
}
