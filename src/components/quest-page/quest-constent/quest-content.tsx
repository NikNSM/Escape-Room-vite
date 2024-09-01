import { useAppSelector } from '../../../utils';
import { LEVEL_QUETS_NAME, RouteAdresses } from '../../../const';
import { getTypeQuest } from '../../../utils';
import Image from './image/image';
import EmptyPageQuest from '../empty-page-quest/empty-page-quest';
import { Link } from 'react-router-dom';

export default function QuestContent(): JSX.Element {
  const quest = useAppSelector((state) => state.quest.quest);
  return (
    quest !== null ?
      <>
        <Image quest={quest} />
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{quest.title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{getTypeQuest(quest.type)};
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>{quest.peopleMinMax[0]}&ndash;{quest.peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>{LEVEL_QUETS_NAME[quest.level]}
              </li>
            </ul>
            <p className="quest-page__description">{quest.description}</p>
            <Link className="btn btn--accent btn--cta quest-page__btn" to={`${RouteAdresses.QUEST}/${quest.id}/${RouteAdresses.BOOKING}`}>Забронировать</ Link>
          </div>
        </div>
      </> : <EmptyPageQuest />
  );
}
