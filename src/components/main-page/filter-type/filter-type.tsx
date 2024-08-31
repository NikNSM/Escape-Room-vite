import ElementFilterType from './element-filter-type/element-filter-type';
import { Type, filterTypeValues } from '../../../const';
type TypeFilterTypeProps = {
  activeFilter: Type;
  handlerTypeChange: (newType: Type) => void;
}
export default function FilterType({ activeFilter, handlerTypeChange }: TypeFilterTypeProps): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {filterTypeValues.map((filter) => <ElementFilterType filter={filter} key={filter} activeFilter={activeFilter} handlerTypeChange={handlerTypeChange} />)}
      </ul>
    </fieldset>
  );
}
