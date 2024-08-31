import { filterLevelArrayKey, Level } from '../../../const';
import ElementFilterLevel from './element-filter-level/element-filter-level';

type TypeFilterLevelProps = {
  activeFilter: Level;
  handlerLevelChange: (newLevel: Level) => void;
}

export default function FilterLevel({ activeFilter, handlerLevelChange }: TypeFilterLevelProps): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {filterLevelArrayKey.map((filter) => <ElementFilterLevel filter={filter} key={filter} activeFilter={activeFilter} handlerLevelChange={handlerLevelChange} />)}
      </ul>
    </fieldset>
  );
}
