import MainContent from './main-content/main-content';
import { useAppSelector } from '../../utils';
import Loader from './loader/loader';

export default function MainPage(): JSX.Element {
  const lodingQuestsList = useAppSelector((state) => state.questsList.loading);

  return (
    <main className="page-content">
      {lodingQuestsList ?
        <Loader /> :
        <MainContent />}
    </main>
  );
}
