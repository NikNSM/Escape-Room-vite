import MainContent from './main-content/main-content';
import { useAppSelector } from '../../utils';
import Loader from '../loader/loader';

export default function MainPage(): JSX.Element {
  const lodingQuestsList = useAppSelector((state) => state.quest.loadingQuestsList);

  return (
    <main className="page-content">
      {lodingQuestsList ?
        <Loader /> :
        <MainContent />}
    </main>
  );
}
