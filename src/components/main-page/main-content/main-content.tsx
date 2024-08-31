import { useFilter } from '../use-filter/use-filter';
import { useAppSelector } from '../../../utils';
import CardQuest from '../card-quest/card-quest';
import FilterLevel from '../filter-level/filter-level';
import FilterType from '../filter-type/filter-type';
import EmptyFilterMainPage from '../empty-filter-main-page/empty-filter-main-page';

export default function MainContent(): JSX.Element {
  const questsList = useAppSelector((state) => state.quest.questList);
  const { filterActive, handlerLevelChange, handlerTypeChange, getFilterQuests } = useFilter();
  return (
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

      {
        getFilterQuests(questsList).length !== 0 ?
          <div className="cards-grid">
            {getFilterQuests(questsList).map((quest) => < CardQuest quest={quest} key={`key-${quest.id}`} />)}
          </div> : <EmptyFilterMainPage />
      }

    </div>
  );
}

