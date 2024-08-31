import { FILTER_TYPE_NAME, Type } from '../../../../const';

type TypeElementFilterTypeProps = {
  filter: Type;
  activeFilter: Type;
  handlerTypeChange: (newType: Type) => void;
}

export default function ElementFilterType({ filter, activeFilter, handlerTypeChange }: TypeElementFilterTypeProps): JSX.Element {

  const getFilterName = () => {
    switch (filter) {
      case FILTER_TYPE_NAME.all:
        return 'Все квесты';
      case FILTER_TYPE_NAME.detective:
        return 'Детектив';
      case FILTER_TYPE_NAME.adventures:
        return 'Приключения';
      case FILTER_TYPE_NAME.horror:
        return 'Ужасы';
      case FILTER_TYPE_NAME.mystic:
        return 'Мистика';
      case FILTER_TYPE_NAME.sciFi:
        return 'Sci-fi';
    }
  };

  return (
    <li className="filter__item">
      <input type="radio"
        name="type"
        id={filter === FILTER_TYPE_NAME.sciFi ? 'sciFi' : filter}
        checked={activeFilter === filter}
        onChange={() => handlerTypeChange(filter)}
      />
      <label className="filter__label" htmlFor={filter === FILTER_TYPE_NAME.sciFi ? 'sciFi' : filter}>
        <svg className="filter__icon" width="26" height="30" aria-hidden="true">
          <use xlinkHref={filter === FILTER_TYPE_NAME.all ? '#icon-all-quests' : `#icon-${filter}`}></use>
        </svg><span className="filter__label-text">{getFilterName()}</span>
      </label>
    </li>
  );
}
