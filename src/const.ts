export enum RouteAdresses {
  MAIN_PAGE = '/',
  QUEST = '/quest',
  LOGIN = '/login',
  MY_QUESTS = '/my-quests',
  CONTACTS = '/contacts',
  BOOKING = '/booking',
}

export enum ApiRoute {
  QUEST = '/quest',
  BOOKING = '/booking',
  RESERVATION = '/reservation',
  LOGIN = '/login',
  LOGOUT = '/logout',
}

export enum AutorizationStatus {
  UNKNOW = 'unknow',
  AUTORIZATION = 'autorization',
  NOT_AUTORIZATION = 'not autorization',
}

export const FILTER_TYPE_NAME = {
  all: 'all',
  adventures: 'adventures',
  horror: 'horror',
  mystic: 'mystic',
  detective: 'detective',
  sciFi: 'sci-fi',
} as const;

export const FILTER_LEVEL_NAME = {
  any: 'Любой',
  easy: 'Легкий',
  medium: 'Средний',
  hard: 'Сложный',
} as const;

export const filterTypeValues = Object.values(FILTER_TYPE_NAME);
export type Type = (typeof filterTypeValues)[number];

export type Level = keyof typeof FILTER_LEVEL_NAME;
export const filterLevelArrayKey: Level[] = ['any', 'easy', 'medium', 'hard'];
