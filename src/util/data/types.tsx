export type Activity = {
  id: string;
  name: string;
};

export enum CATEGORYOPTIONS {
  MUSIC = 1,
  FESTIVAL,
  NIGHTLIFE,
  SPORTFITNESS,
  KIDS,
  HEALTH,
  TRIP,
  WORKSHOPDIY,
  FOODDRINK,
  BUSINESS,
  ACTIVITY,
  CULTURE,
  OTHER,
}

export enum EVENTSCHEDULEOPTIONS {
  NEXTWEEK,
  ALLUPCOMING,
  THISWEEKEND,
  THISWEEK,
  TODAY,
  TOMORROW,
  ONGOINGSTARTING,
}
