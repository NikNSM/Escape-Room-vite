import { Level, Type } from '../const';

export type QuestCard = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Exclude<Level, 'any'>;
  type: Exclude<Type, 'all'>;
  peopleMinMax: [number, number];
};

export type QuestsCards = QuestCard[];

export type QuestPage = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Exclude<Level, 'any'>;
  type: Exclude<Type, 'all'>;
  peopleMinMax: [number, number];
  description: string;
  coverImg: string;
  coverImgWebp: string;
};

export type Location = {
  address: string;
  coords: [number, number];
};

export type Slot = {
  time: string;
  isAvailable: boolean;
};
export type InformationQuestBooking = {
  id: string;
  location: Location;
  slots: {
    today: Slot[];
    tomorrow: Slot[];
  };
};

export type InformationPostBookingUser = {
  id: string;
  date: 'today' | 'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
};

export type ReservationUserQuest = {
  date: 'today' | 'tomorrow';
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: QuestCard;
};

export type ReservationUserQuests = ReservationUserQuest[];

export type UserLogin = {
  email: string;
  token: string;
};

export type UserPostLogin = {
  email: string;
  password: string;
  pathName: string;
};
