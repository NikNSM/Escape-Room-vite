import { Link } from 'react-router-dom';
import { RouteAdresses } from '../../../const';
import { QuestCard } from '../../../type/type';
type TypeCardQuestProps = {
  quest: QuestCard;
}
export default function CardQuest({ quest }: TypeCardQuestProps): JSX.Element {
  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={quest.previewImgWebp} /><img src={quest.previewImg} srcSet={quest.previewImg} width="344" height="232" alt={quest.title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={`${RouteAdresses.QUEST}/${quest.id}`}>{quest.title}</Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{quest.peopleMinMax[0]}&ndash;{quest.peopleMinMax[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{quest.level}
          </li>
        </ul>
      </div>
    </div>
  );
}
