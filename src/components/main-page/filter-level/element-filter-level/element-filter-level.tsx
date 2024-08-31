import { Level, FILTER_LEVEL_NAME } from '../../../../const';

type TypeElementFilterLevelProps = {
  filter: Level;
  activeFilter: Level;
  handlerLevelChange: (newLevel: Level) => void;
}

export default function ElementFilterLevel({ filter, activeFilter, handlerLevelChange }: TypeElementFilterLevelProps): JSX.Element {
  return (
    <li className="filter__item">
      <input type="radio" name="level" id={filter}
        onChange={() => handlerLevelChange(filter)}
        checked={activeFilter === filter}
      />
      <label className="filter__label" htmlFor={filter}><span className="filter__label-text">{FILTER_LEVEL_NAME[filter]}</span>
      </label>
    </li>
  );
}
