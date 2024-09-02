import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../utils';
import { getQuest } from '../../store/quest-slice/api-action';
import QuestContent from './quest-constent/quest-content';
import Loader from '../loader/loader';

export default function QuetsPage(): JSX.Element {
  const { id } = useParams();
  const loadingQuest = useAppSelector((state) => state.quest.loadingQuest);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getQuest(id));
    }
  }, [dispatch, id]);

  return (
    <main className="decorated-page quest-page">
      {
        loadingQuest ?
          <Loader /> :
          <QuestContent />
      }
    </main>
  );
}
