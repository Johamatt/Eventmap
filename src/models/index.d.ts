import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum Format {
  SEMINARTALK = "SEMINARTALK",
  EXPO = "EXPO",
  PERFORMANCELIVESHOW = "PERFORMANCELIVESHOW",
  CLASSTRAINING = "CLASSTRAINING",
  NETWORKINGMEETING = "NETWORKINGMEETING",
  SOCIALGATHERING = "SOCIALGATHERING",
  TOURNAMENTCOMPETITION = "TOURNAMENTCOMPETITION",
  TOURSWALKS = "TOURSWALKS",
  CAMPTRIP = "CAMPTRIP",
  EXHIBITION = "EXHIBITION"
}

export enum Category {
  MUSIC = "MUSIC",
  FESTIVAL = "FESTIVAL",
  PARTIESNIGHTLIFE = "PARTIESNIGHTLIFE",
  SPORT = "SPORT",
  KIDS = "KIDS",
  HEALTH = "HEALTH",
  TRIP = "TRIP",
  WORKSHOP = "WORKSHOP",
  COOKING = "COOKING",
  BUSINESS = "BUSINESS",
  ACTIVITY = "ACTIVITY",
  CULTURE = "CULTURE",
  COMEDY = "COMEDY",
  CONCERT = "CONCERT",
  PERFORMANCE = "PERFORMANCE",
  FINEARTS = "FINEARTS",
  THEATRE = "THEATRE",
  LITERATURE = "LITERATURE",
  PHOTOGRAPHY = "PHOTOGRAPHY",
  TECHNOLOGY = "TECHNOLOGY",
  OTHER = "OTHER",
  UNTITLEDVALUE = "UNTITLEDVALUE"
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ImagesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LocationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Category {
  readonly id: string;
  readonly category?: Category[] | keyof typeof Category | null;
  readonly format?: (Format | null)[] | keyof typeof Format | null;
  readonly tags?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class Images {
  readonly id: string;
  readonly url: string;
  readonly lisenceType?: number | null;
  readonly lisenceName?: string | null;
  readonly eventID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Images, ImagesMetaData>);
  static copyOf(source: Images, mutator: (draft: MutableModel<Images, ImagesMetaData>) => MutableModel<Images, ImagesMetaData> | void): Images;
}

export declare class Location {
  readonly id: string;
  readonly lat: number;
  readonly lon: number;
  readonly streetAddess: string;
  readonly postalCode?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Location, LocationMetaData>);
  static copyOf(source: Location, mutator: (draft: MutableModel<Location, LocationMetaData>) => MutableModel<Location, LocationMetaData> | void): Location;
}

export declare class Event {
  readonly id: string;
  readonly title: string;
  readonly infoUrl?: string | null;
  readonly intro?: string | null;
  readonly description: string;
  readonly startingDatetime: string;
  readonly endingDatetime: string;
  readonly Location?: Location | null;
  readonly Images?: (Images | null)[] | null;
  readonly Category?: Category | null;
  readonly source: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventLocationId?: string | null;
  readonly eventCategoryId?: string | null;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}