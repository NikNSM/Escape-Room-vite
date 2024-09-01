import { AutorizationStatus, RouteAdresses } from '../../../../const';
import { useAppDispatch } from '../../../../utils';
import { logOutUser } from '../../../../store/user-slice/api-action';
import { Link, useNavigate } from 'react-router-dom';

type TypeButtonLoginAndLogoutProps = {
  autorization: AutorizationStatus;
  pathName: string;
}
export default function ButtonLoginAndLogout({ autorization, pathName }: TypeButtonLoginAndLogoutProps): JSX.Element {
  const regPathName = /(\/my-quests){1} | (\/booking){1}/i;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickLogOut = () => {
    const routePathName = regPathName.test(pathName) ? RouteAdresses.MAIN_PAGE : pathName;
    navigate(routePathName);
    dispatch(logOutUser());
  };

  return (
    autorization === AutorizationStatus.AUTORIZATION ?
      <a className="btn btn--accent header__side-item" href="#" onClick={onClickLogOut}>Выйти</a> :
      <Link className="btn header__side-item header__login-btn" to={RouteAdresses.LOGIN} state={{ pathName }}>Вход</Link>
  );
}
