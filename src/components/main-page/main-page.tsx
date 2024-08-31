import { useFilter } from './use-filter/use-filter';
import { useAppSelector } from '../../utils';
import CardQuest from './card-quest/card-quest';
import FilterLevel from './filter-level/filter-level';
import FilterType from './filter-type/filter-type';

export default function MainPage(): JSX.Element {
  const questsList = useAppSelector((state) => state.questsList.quests);

  const { filterActive, handlerLevelChange, handlerTypeChange, getFilterQuests } = useFilter();

  return (
    <main className="page-content">
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
          </h1>
          <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
        </div>
        <div className="page-content__item">
          <form className="filter" action="#" method="get">
            <FilterType activeFilter={filterActive.type} handlerTypeChange={handlerTypeChange} />
            <FilterLevel activeFilter={filterActive.level} handlerLevelChange={handlerLevelChange} />
          </form>
        </div>
        <h2 className="title visually-hidden">Выберите квест</h2>
        <div className="cards-grid">
          {
            questsList.length !== 0 ?
              getFilterQuests(questsList).map((quest) => < CardQuest quest={quest} key={`key-${quest.id}`} />) : ''
          }
        </div>
      </div>
    </main>
  );
}
