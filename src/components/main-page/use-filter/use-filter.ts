import {
  TYPE_QUEST_NAME,
  filterLevelArrayKey,
  Level,
  Type,
} from '../../../const';
import { useState } from 'react';
import { QuestsCards } from '../../../type/type';

export function useFilter() {
  const [filterActive, setFilterActive] = useState<{
    type: Type;
    level: Level;
  }>({
    type: TYPE_QUEST_NAME.all,
    level: filterLevelArrayKey[0],
  });

  const handlerLevelChange = (newLevel: Level) => {
    setFilterActive({ ...filterActive, level: newLevel });
  };

  const handlerTypeChange = (newType: Type) => {
    setFilterActive({ ...filterActive, type: newType });
  };

  const getFilterQuests = (questsList: QuestsCards) => {
    const filterQuestsList = questsList
      .filter((quest) =>
        filterActive.level === filterLevelArrayKey[0]
          ? quest
          : filterActive.level === quest.level
      )
      .filter((quest) =>
        filterActive.type === TYPE_QUEST_NAME.all
          ? quest
          : filterActive.type === quest.type
      );

    return filterQuestsList;
  };

  return {
    filterActive,
    handlerLevelChange,
    handlerTypeChange,
    getFilterQuests,
  };
}
