import BackgroundImage from './background-image/background-image';
import EmptyPageQuest from '../quest-page/empty-page-quest/empty-page-quest';
import Map from './map/map';
import Title from './title/titile';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../utils';
import { useEffect } from 'react';
import { getInformationBooking } from '../../store/booking-slice/api-action';
import { getQuest } from '../../store/quest-slice/api-action';
import { changeInformationBooking } from '../../store/booking-slice/booking-slice';
import Form from './form/form';


export default function BookingQuetsPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const quest = useAppSelector((state) => state.quest.quest);
  const informationsBooking = useAppSelector((state) => state.booking.infotrmationBooking);

  useEffect(() => {
    if (id) {
      if (quest?.id !== id) {
        dispatch(getQuest(id));
      }
      dispatch(getInformationBooking(id));

      return () => {
        dispatch(changeInformationBooking());
      };
    }
  }, [id, quest, dispatch]);

  return (
    quest !== null && informationsBooking.length !== 0 ?
      <main className="page-content decorated-page">
        <BackgroundImage quest={quest} />
        <div className="container container--size-s">
          <Title quest={quest} />
          <div className="page-content__item">
            <Map informationsBooking={informationsBooking} />
          </div>
          < Form informationsBooking={informationsBooking} quest={quest} />
        </div>
      </main> : <EmptyPageQuest />
  );
}
