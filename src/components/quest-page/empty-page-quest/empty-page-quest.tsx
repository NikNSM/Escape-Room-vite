import { useParams } from 'react-router-dom';
import './empty-page-quest-css/empty-page-quest.css';
import { useAppDispatch } from '../../../utils';
import { getQuest } from '../../../store/quest-slice/api-action';
export default function EmptyPageQuest(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const handlerClickButton = () => {
    if (id) {
      dispatch(getQuest(id));
    }
  };

  return (
    <div className='container-empty'>
      <p className='empty-title'>Кажется произошла ошибка при загруке.<br />
        Вы можете попробовать еще раз, либо обратиться к поддержке
      </p>
      <div className='information'>
        <div className='text-information'>
          <span>Телефон: </span>
          <a className="link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
        <div className='text-information'>
          <span>E&ndash;mail: </span>
          <a className="link" href="mailto:info@escape-room.ru">info@escape-room.ru</a>
        </div>
      </div>
      <button className='btn btn--accent btn-empty' onClick={handlerClickButton}>Попробовать еще раз</button>
    </div >
  );
}
