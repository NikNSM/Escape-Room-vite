import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TypeAppDispatch, TypeState } from './type/type-redux';
import { Type, TYPE_QUEST_NAME } from './const';
export const useAppDispatch = () => useDispatch<TypeAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TypeState> = useSelector;

export const getTypeQuest = (TypeQuest: Type) => {
  switch (TypeQuest) {
    case TYPE_QUEST_NAME.all:
      return 'Все квесты';
    case TYPE_QUEST_NAME.detective:
      return 'Детектив';
    case TYPE_QUEST_NAME.adventures:
      return 'Приключения';
    case TYPE_QUEST_NAME.horror:
      return 'Ужасы';
    case TYPE_QUEST_NAME.mystic:
      return 'Мистика';
    case TYPE_QUEST_NAME.sciFi:
      return 'Sci-fi';
  }
};
