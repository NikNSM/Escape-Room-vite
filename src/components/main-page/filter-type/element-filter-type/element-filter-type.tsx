import { TYPE_QUEST_NAME, Type } from '../../../../const';
import { getTypeQuest } from '../../../../utils';
type TypeElementFilterTypeProps = {
  filter: Type;
  activeFilter: Type;
  handlerTypeChange: (newType: Type) => void;
}

export default function ElementFilterType({ filter, activeFilter, handlerTypeChange }: TypeElementFilterTypeProps): JSX.Element {

  return (
    <li className="filter__item">
      <input type="radio"
        name="type"
        id={filter === TYPE_QUEST_NAME.sciFi ? 'sciFi' : filter}
        checked={activeFilter === filter}
        onChange={() => handlerTypeChange(filter)}
      />
      <label className="filter__label" htmlFor={filter === TYPE_QUEST_NAME.sciFi ? 'sciFi' : filter}>
        <svg className="filter__icon" width="26" height="30" aria-hidden="true">
          <use xlinkHref={filter === TYPE_QUEST_NAME.all ? '#icon-all-quests' : `#icon-${filter}`}></use>
        </svg><span className="filter__label-text">{getTypeQuest(filter)}</span>
      </label>
    </li>
  );
}
