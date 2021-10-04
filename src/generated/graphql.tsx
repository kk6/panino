import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Activity = Node & {
  __typename?: 'Activity';
  annictId: Scalars['Int'];
  /** ID of the object. */
  id: Scalars['ID'];
  user: User;
};

export enum ActivityAction {
  Create = 'CREATE'
}

/** The connection type for Activity. */
export type ActivityConnection = {
  __typename?: 'ActivityConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ActivityEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Activity>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ActivityEdge = {
  __typename?: 'ActivityEdge';
  action: ActivityAction;
  annictId: Scalars['Int'];
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  node?: Maybe<ActivityItem>;
  user: User;
};

export type ActivityItem = MultipleRecord | Record | Review | Status;

export type ActivityOrder = {
  direction: OrderDirection;
  field: ActivityOrderField;
};

export enum ActivityOrderField {
  CreatedAt = 'CREATED_AT'
}

export type Cast = Node & {
  __typename?: 'Cast';
  annictId: Scalars['Int'];
  character: Character;
  id: Scalars['ID'];
  name: Scalars['String'];
  nameEn: Scalars['String'];
  person: Person;
  sortNumber: Scalars['Int'];
  work: Work;
};

/** The connection type for Cast. */
export type CastConnection = {
  __typename?: 'CastConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CastEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Cast>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CastEdge = {
  __typename?: 'CastEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Cast>;
};

export type CastOrder = {
  direction: OrderDirection;
  field: CastOrderField;
};

export enum CastOrderField {
  CreatedAt = 'CREATED_AT',
  SortNumber = 'SORT_NUMBER'
}

export type Channel = Node & {
  __typename?: 'Channel';
  annictId: Scalars['Int'];
  channelGroup: ChannelGroup;
  id: Scalars['ID'];
  name: Scalars['String'];
  programs?: Maybe<ProgramConnection>;
  published: Scalars['Boolean'];
  scChid: Scalars['Int'];
};


export type ChannelProgramsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** The connection type for Channel. */
export type ChannelConnection = {
  __typename?: 'ChannelConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ChannelEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Channel>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ChannelEdge = {
  __typename?: 'ChannelEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Channel>;
};

export type ChannelGroup = Node & {
  __typename?: 'ChannelGroup';
  annictId: Scalars['Int'];
  channels?: Maybe<ChannelConnection>;
  id: Scalars['ID'];
  name: Scalars['String'];
  sortNumber: Scalars['Int'];
};


export type ChannelGroupChannelsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Character = Node & {
  __typename?: 'Character';
  age: Scalars['String'];
  ageEn: Scalars['String'];
  annictId: Scalars['Int'];
  birthday: Scalars['String'];
  birthdayEn: Scalars['String'];
  bloodType: Scalars['String'];
  bloodTypeEn: Scalars['String'];
  description: Scalars['String'];
  descriptionEn: Scalars['String'];
  descriptionSource: Scalars['String'];
  descriptionSourceEn: Scalars['String'];
  favoriteCharactersCount: Scalars['Int'];
  height: Scalars['String'];
  heightEn: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nameEn: Scalars['String'];
  nameKana: Scalars['String'];
  nationality: Scalars['String'];
  nationalityEn: Scalars['String'];
  nickname: Scalars['String'];
  nicknameEn: Scalars['String'];
  occupation: Scalars['String'];
  occupationEn: Scalars['String'];
  series: Series;
  weight: Scalars['String'];
  weightEn: Scalars['String'];
};

/** The connection type for Character. */
export type CharacterConnection = {
  __typename?: 'CharacterConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CharacterEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Character>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CharacterEdge = {
  __typename?: 'CharacterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Character>;
};

export type CharacterOrder = {
  direction: OrderDirection;
  field: CharacterOrderField;
};

export enum CharacterOrderField {
  CreatedAt = 'CREATED_AT',
  FavoriteCharactersCount = 'FAVORITE_CHARACTERS_COUNT'
}

/** Autogenerated input type of CreateRecord */
export type CreateRecordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  episodeId: Scalars['ID'];
  ratingState?: Maybe<RatingState>;
  shareFacebook?: Maybe<Scalars['Boolean']>;
  shareTwitter?: Maybe<Scalars['Boolean']>;
};

/** Autogenerated return type of CreateRecord */
export type CreateRecordPayload = {
  __typename?: 'CreateRecordPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  record?: Maybe<Record>;
};

/** Autogenerated input type of CreateReview */
export type CreateReviewInput = {
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  ratingAnimationState?: Maybe<RatingState>;
  ratingCharacterState?: Maybe<RatingState>;
  ratingMusicState?: Maybe<RatingState>;
  ratingOverallState?: Maybe<RatingState>;
  ratingStoryState?: Maybe<RatingState>;
  shareFacebook?: Maybe<Scalars['Boolean']>;
  shareTwitter?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  workId: Scalars['ID'];
};

/** Autogenerated return type of CreateReview */
export type CreateReviewPayload = {
  __typename?: 'CreateReviewPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  review?: Maybe<Review>;
};

/** Autogenerated input type of DeleteRecord */
export type DeleteRecordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  recordId: Scalars['ID'];
};

/** Autogenerated return type of DeleteRecord */
export type DeleteRecordPayload = {
  __typename?: 'DeleteRecordPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  episode?: Maybe<Episode>;
};

/** Autogenerated input type of DeleteReview */
export type DeleteReviewInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  reviewId: Scalars['ID'];
};

/** Autogenerated return type of DeleteReview */
export type DeleteReviewPayload = {
  __typename?: 'DeleteReviewPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  work?: Maybe<Work>;
};

/** An episode of a work */
export type Episode = Node & {
  __typename?: 'Episode';
  annictId: Scalars['Int'];
  id: Scalars['ID'];
  nextEpisode?: Maybe<Episode>;
  number?: Maybe<Scalars['Int']>;
  numberText?: Maybe<Scalars['String']>;
  prevEpisode?: Maybe<Episode>;
  recordCommentsCount: Scalars['Int'];
  records?: Maybe<RecordConnection>;
  recordsCount: Scalars['Int'];
  satisfactionRate?: Maybe<Scalars['Float']>;
  sortNumber: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  viewerDidTrack: Scalars['Boolean'];
  viewerRecordsCount: Scalars['Int'];
  work: Work;
};


/** An episode of a work */
export type EpisodeRecordsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  hasComment?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RecordOrder>;
};

/** The connection type for Episode. */
export type EpisodeConnection = {
  __typename?: 'EpisodeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EpisodeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Episode>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EpisodeEdge = {
  __typename?: 'EpisodeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Episode>;
};

export type EpisodeOrder = {
  direction: OrderDirection;
  field: EpisodeOrderField;
};

export enum EpisodeOrderField {
  CreatedAt = 'CREATED_AT',
  SortNumber = 'SORT_NUMBER'
}

/** Media of anime */
export enum Media {
  Movie = 'MOVIE',
  Other = 'OTHER',
  Ova = 'OVA',
  Tv = 'TV',
  Web = 'WEB'
}

export type MultipleRecord = Node & {
  __typename?: 'MultipleRecord';
  annictId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  records?: Maybe<RecordConnection>;
  user: User;
  work: Work;
};


export type MultipleRecordRecordsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createRecord?: Maybe<CreateRecordPayload>;
  createReview?: Maybe<CreateReviewPayload>;
  deleteRecord?: Maybe<DeleteRecordPayload>;
  deleteReview?: Maybe<DeleteReviewPayload>;
  updateRecord?: Maybe<UpdateRecordPayload>;
  updateReview?: Maybe<UpdateReviewPayload>;
  updateStatus?: Maybe<UpdateStatusPayload>;
};


export type MutationCreateRecordArgs = {
  input: CreateRecordInput;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};


export type MutationDeleteRecordArgs = {
  input: DeleteRecordInput;
};


export type MutationDeleteReviewArgs = {
  input: DeleteReviewInput;
};


export type MutationUpdateRecordArgs = {
  input: UpdateRecordInput;
};


export type MutationUpdateReviewArgs = {
  input: UpdateReviewInput;
};


export type MutationUpdateStatusArgs = {
  input: UpdateStatusInput;
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID'];
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Organization = Node & {
  __typename?: 'Organization';
  annictId: Scalars['Int'];
  favoriteOrganizationsCount: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nameEn: Scalars['String'];
  nameKana: Scalars['String'];
  staffsCount: Scalars['Int'];
  twitterUsername: Scalars['String'];
  twitterUsernameEn: Scalars['String'];
  url: Scalars['String'];
  urlEn: Scalars['String'];
  wikipediaUrl: Scalars['String'];
  wikipediaUrlEn: Scalars['String'];
};

/** The connection type for Organization. */
export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OrganizationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Organization>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Organization>;
};

export type OrganizationOrder = {
  direction: OrderDirection;
  field: OrganizationOrderField;
};

export enum OrganizationOrderField {
  CreatedAt = 'CREATED_AT',
  FavoriteOrganizationsCount = 'FAVORITE_ORGANIZATIONS_COUNT'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Person = Node & {
  __typename?: 'Person';
  annictId: Scalars['Int'];
  birthday: Scalars['String'];
  bloodType: Scalars['String'];
  castsCount: Scalars['Int'];
  favoritePeopleCount: Scalars['Int'];
  genderText: Scalars['String'];
  height: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nameEn: Scalars['String'];
  nameKana: Scalars['String'];
  nickname: Scalars['String'];
  nicknameEn: Scalars['String'];
  prefecture: Prefecture;
  staffsCount: Scalars['Int'];
  twitterUsername: Scalars['String'];
  twitterUsernameEn: Scalars['String'];
  url: Scalars['String'];
  urlEn: Scalars['String'];
  wikipediaUrl: Scalars['String'];
  wikipediaUrlEn: Scalars['String'];
};

/** The connection type for Person. */
export type PersonConnection = {
  __typename?: 'PersonConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Person>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PersonEdge = {
  __typename?: 'PersonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Person>;
};

export type PersonOrder = {
  direction: OrderDirection;
  field: PersonOrderField;
};

export enum PersonOrderField {
  CreatedAt = 'CREATED_AT',
  FavoritePeopleCount = 'FAVORITE_PEOPLE_COUNT'
}

export type Prefecture = Node & {
  __typename?: 'Prefecture';
  annictId: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Program = Node & {
  __typename?: 'Program';
  annictId: Scalars['Int'];
  channel: Channel;
  episode: Episode;
  id: Scalars['ID'];
  rebroadcast: Scalars['Boolean'];
  scPid?: Maybe<Scalars['Int']>;
  startedAt: Scalars['DateTime'];
  state: ProgramState;
  work: Work;
};

/** The connection type for Program. */
export type ProgramConnection = {
  __typename?: 'ProgramConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProgramEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Program>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProgramEdge = {
  __typename?: 'ProgramEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Program>;
};

export type ProgramOrder = {
  direction: OrderDirection;
  field: ProgramOrderField;
};

export enum ProgramOrderField {
  StartedAt = 'STARTED_AT'
}

export enum ProgramState {
  Hidden = 'HIDDEN',
  Published = 'PUBLISHED'
}

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Fetches a list of objects given a list of IDs. */
  nodes: Array<Maybe<Node>>;
  searchCharacters?: Maybe<CharacterConnection>;
  searchEpisodes?: Maybe<EpisodeConnection>;
  searchOrganizations?: Maybe<OrganizationConnection>;
  searchPeople?: Maybe<PersonConnection>;
  searchWorks?: Maybe<WorkConnection>;
  user?: Maybe<User>;
  viewer?: Maybe<User>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QuerySearchCharactersArgs = {
  after?: Maybe<Scalars['String']>;
  annictIds?: Maybe<Array<Scalars['Int']>>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  names?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<CharacterOrder>;
};


export type QuerySearchEpisodesArgs = {
  after?: Maybe<Scalars['String']>;
  annictIds?: Maybe<Array<Scalars['Int']>>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EpisodeOrder>;
};


export type QuerySearchOrganizationsArgs = {
  after?: Maybe<Scalars['String']>;
  annictIds?: Maybe<Array<Scalars['Int']>>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  names?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<OrganizationOrder>;
};


export type QuerySearchPeopleArgs = {
  after?: Maybe<Scalars['String']>;
  annictIds?: Maybe<Array<Scalars['Int']>>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  names?: Maybe<Array<Scalars['String']>>;
  orderBy?: Maybe<PersonOrder>;
};


export type QuerySearchWorksArgs = {
  after?: Maybe<Scalars['String']>;
  annictIds?: Maybe<Array<Scalars['Int']>>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<WorkOrder>;
  seasons?: Maybe<Array<Scalars['String']>>;
  titles?: Maybe<Array<Scalars['String']>>;
};


export type QueryUserArgs = {
  username: Scalars['String'];
};

export enum RatingState {
  Average = 'AVERAGE',
  Bad = 'BAD',
  Good = 'GOOD',
  Great = 'GREAT'
}

export type Record = Node & {
  __typename?: 'Record';
  annictId: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  commentsCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  episode: Episode;
  facebookClickCount: Scalars['Int'];
  id: Scalars['ID'];
  likesCount: Scalars['Int'];
  modified: Scalars['Boolean'];
  rating?: Maybe<Scalars['Float']>;
  ratingState?: Maybe<RatingState>;
  twitterClickCount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  work: Work;
};

/** The connection type for Record. */
export type RecordConnection = {
  __typename?: 'RecordConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RecordEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Record>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RecordEdge = {
  __typename?: 'RecordEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Record>;
};

export type RecordOrder = {
  direction: OrderDirection;
  field: RecordOrderField;
};

export enum RecordOrderField {
  CreatedAt = 'CREATED_AT',
  LikesCount = 'LIKES_COUNT'
}

export type Review = Node & {
  __typename?: 'Review';
  annictId: Scalars['Int'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  impressionsCount: Scalars['Int'];
  likesCount: Scalars['Int'];
  modifiedAt?: Maybe<Scalars['DateTime']>;
  ratingAnimationState?: Maybe<RatingState>;
  ratingCharacterState?: Maybe<RatingState>;
  ratingMusicState?: Maybe<RatingState>;
  ratingOverallState?: Maybe<RatingState>;
  ratingStoryState?: Maybe<RatingState>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  work: Work;
};

/** The connection type for Review. */
export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReviewEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Review>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Review>;
};

export type ReviewOrder = {
  direction: OrderDirection;
  field: ReviewOrderField;
};

export enum ReviewOrderField {
  CreatedAt = 'CREATED_AT',
  LikesCount = 'LIKES_COUNT'
}

/** Season name */
export enum SeasonName {
  Autumn = 'AUTUMN',
  Spring = 'SPRING',
  Summer = 'SUMMER',
  Winter = 'WINTER'
}

export type Series = Node & {
  __typename?: 'Series';
  annictId: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nameEn: Scalars['String'];
  nameRo: Scalars['String'];
  works?: Maybe<SeriesWorkConnection>;
};


export type SeriesWorksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SeriesWorkOrder>;
};

/** The connection type for Series. */
export type SeriesConnection = {
  __typename?: 'SeriesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SeriesEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Series>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SeriesEdge = {
  __typename?: 'SeriesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Series>;
};

/** The connection type for Work. */
export type SeriesWorkConnection = {
  __typename?: 'SeriesWorkConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SeriesWorkEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Work>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SeriesWorkEdge = {
  __typename?: 'SeriesWorkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  node: Work;
  summary?: Maybe<Scalars['String']>;
  summaryEn?: Maybe<Scalars['String']>;
};

export type SeriesWorkOrder = {
  direction: OrderDirection;
  field: SeriesWorkOrderField;
};

export enum SeriesWorkOrderField {
  Season = 'SEASON'
}

export type Staff = Node & {
  __typename?: 'Staff';
  annictId: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  nameEn: Scalars['String'];
  resource: StaffResourceItem;
  roleOther: Scalars['String'];
  roleOtherEn: Scalars['String'];
  roleText: Scalars['String'];
  sortNumber: Scalars['Int'];
  work: Work;
};

/** The connection type for Staff. */
export type StaffConnection = {
  __typename?: 'StaffConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StaffEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Staff>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type StaffEdge = {
  __typename?: 'StaffEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Staff>;
};

export type StaffOrder = {
  direction: OrderDirection;
  field: StaffOrderField;
};

export enum StaffOrderField {
  CreatedAt = 'CREATED_AT',
  SortNumber = 'SORT_NUMBER'
}

export type StaffResourceItem = Organization | Person;

export type Status = Node & {
  __typename?: 'Status';
  annictId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  likesCount: Scalars['Int'];
  state: StatusState;
  user: User;
  work: Work;
};

export enum StatusState {
  NoState = 'NO_STATE',
  OnHold = 'ON_HOLD',
  StopWatching = 'STOP_WATCHING',
  WannaWatch = 'WANNA_WATCH',
  Watched = 'WATCHED',
  Watching = 'WATCHING'
}

/** Autogenerated input type of UpdateRecord */
export type UpdateRecordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  ratingState?: Maybe<RatingState>;
  recordId: Scalars['ID'];
  shareFacebook?: Maybe<Scalars['Boolean']>;
  shareTwitter?: Maybe<Scalars['Boolean']>;
};

/** Autogenerated return type of UpdateRecord */
export type UpdateRecordPayload = {
  __typename?: 'UpdateRecordPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  record?: Maybe<Record>;
};

/** Autogenerated input type of UpdateReview */
export type UpdateReviewInput = {
  body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  ratingAnimationState: RatingState;
  ratingCharacterState: RatingState;
  ratingMusicState: RatingState;
  ratingOverallState: RatingState;
  ratingStoryState: RatingState;
  reviewId: Scalars['ID'];
  shareFacebook?: Maybe<Scalars['Boolean']>;
  shareTwitter?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateReview */
export type UpdateReviewPayload = {
  __typename?: 'UpdateReviewPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  review?: Maybe<Review>;
};

/** Autogenerated input type of UpdateStatus */
export type UpdateStatusInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  state: StatusState;
  workId: Scalars['ID'];
};

/** Autogenerated return type of UpdateStatus */
export type UpdateStatusPayload = {
  __typename?: 'UpdateStatusPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  work?: Maybe<Work>;
};

export type User = Node & {
  __typename?: 'User';
  activities?: Maybe<ActivityConnection>;
  annictId: Scalars['Int'];
  avatarUrl?: Maybe<Scalars['String']>;
  backgroundImageUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  followers?: Maybe<UserConnection>;
  followersCount: Scalars['Int'];
  following?: Maybe<UserConnection>;
  followingActivities?: Maybe<ActivityConnection>;
  followingsCount: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  notificationsCount?: Maybe<Scalars['Int']>;
  onHoldCount: Scalars['Int'];
  programs?: Maybe<ProgramConnection>;
  records?: Maybe<RecordConnection>;
  recordsCount: Scalars['Int'];
  stopWatchingCount: Scalars['Int'];
  url?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  viewerCanFollow: Scalars['Boolean'];
  viewerIsFollowing: Scalars['Boolean'];
  wannaWatchCount: Scalars['Int'];
  watchedCount: Scalars['Int'];
  watchingCount: Scalars['Int'];
  works?: Maybe<WorkConnection>;
};


export type UserActivitiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ActivityOrder>;
};


export type UserFollowersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserFollowingArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserFollowingActivitiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ActivityOrder>;
};


export type UserProgramsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProgramOrder>;
  unwatched?: Maybe<Scalars['Boolean']>;
};


export type UserRecordsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  hasComment?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RecordOrder>;
};


export type UserWorksArgs = {
  after?: Maybe<Scalars['String']>;
  annictIds?: Maybe<Array<Scalars['Int']>>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<WorkOrder>;
  seasons?: Maybe<Array<Scalars['String']>>;
  state?: Maybe<StatusState>;
  titles?: Maybe<Array<Scalars['String']>>;
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

/** An anime title */
export type Work = Node & {
  __typename?: 'Work';
  annictId: Scalars['Int'];
  casts?: Maybe<CastConnection>;
  episodes?: Maybe<EpisodeConnection>;
  episodesCount: Scalars['Int'];
  id: Scalars['ID'];
  image?: Maybe<WorkImage>;
  malAnimeId?: Maybe<Scalars['String']>;
  media: Media;
  noEpisodes: Scalars['Boolean'];
  officialSiteUrl?: Maybe<Scalars['String']>;
  officialSiteUrlEn?: Maybe<Scalars['String']>;
  programs?: Maybe<ProgramConnection>;
  reviews?: Maybe<ReviewConnection>;
  reviewsCount: Scalars['Int'];
  satisfactionRate?: Maybe<Scalars['Float']>;
  seasonName?: Maybe<SeasonName>;
  seasonYear?: Maybe<Scalars['Int']>;
  seriesList?: Maybe<SeriesConnection>;
  staffs?: Maybe<StaffConnection>;
  syobocalTid?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  titleEn?: Maybe<Scalars['String']>;
  titleKana?: Maybe<Scalars['String']>;
  titleRo?: Maybe<Scalars['String']>;
  twitterHashtag?: Maybe<Scalars['String']>;
  twitterUsername?: Maybe<Scalars['String']>;
  viewerStatusState?: Maybe<StatusState>;
  watchersCount: Scalars['Int'];
  wikipediaUrl?: Maybe<Scalars['String']>;
  wikipediaUrlEn?: Maybe<Scalars['String']>;
};


/** An anime title */
export type WorkCastsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CastOrder>;
};


/** An anime title */
export type WorkEpisodesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<EpisodeOrder>;
};


/** An anime title */
export type WorkProgramsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ProgramOrder>;
};


/** An anime title */
export type WorkReviewsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  hasBody?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReviewOrder>;
};


/** An anime title */
export type WorkSeriesListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** An anime title */
export type WorkStaffsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StaffOrder>;
};

/** The connection type for Work. */
export type WorkConnection = {
  __typename?: 'WorkConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WorkEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Work>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type WorkEdge = {
  __typename?: 'WorkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Work>;
};

export type WorkImage = Node & {
  __typename?: 'WorkImage';
  annictId?: Maybe<Scalars['Int']>;
  copyright?: Maybe<Scalars['String']>;
  facebookOgImageUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internalUrl?: Maybe<Scalars['String']>;
  recommendedImageUrl?: Maybe<Scalars['String']>;
  twitterAvatarUrl?: Maybe<Scalars['String']>;
  twitterBiggerAvatarUrl?: Maybe<Scalars['String']>;
  twitterMiniAvatarUrl?: Maybe<Scalars['String']>;
  twitterNormalAvatarUrl?: Maybe<Scalars['String']>;
  work?: Maybe<Work>;
};


export type WorkImageInternalUrlArgs = {
  size: Scalars['String'];
};

export type WorkOrder = {
  direction: OrderDirection;
  field: WorkOrderField;
};

export enum WorkOrderField {
  CreatedAt = 'CREATED_AT',
  Season = 'SEASON',
  WatchersCount = 'WATCHERS_COUNT'
}

export type CreateRecordMutationVariables = Exact<{
  episodeId: Scalars['ID'];
  ratingState?: Maybe<RatingState>;
  comment?: Maybe<Scalars['String']>;
  shareTwitter?: Maybe<Scalars['Boolean']>;
}>;


export type CreateRecordMutation = { __typename?: 'Mutation', createRecord?: Maybe<{ __typename?: 'CreateRecordPayload', clientMutationId?: Maybe<string> }> };

export type UpdateStatusMutationVariables = Exact<{
  state: StatusState;
  workId: Scalars['ID'];
}>;


export type UpdateStatusMutation = { __typename?: 'Mutation', updateStatus?: Maybe<{ __typename?: 'UpdateStatusPayload', clientMutationId?: Maybe<string> }> };

export type GetEpisodeListQueryVariables = Exact<{
  annictId?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type GetEpisodeListQuery = { __typename?: 'Query', searchWorks?: Maybe<{ __typename?: 'WorkConnection', edges?: Maybe<Array<Maybe<{ __typename?: 'WorkEdge', node?: Maybe<{ __typename?: 'Work', id: string, annictId: number, title: string, viewerStatusState?: Maybe<StatusState>, media: Media, image?: Maybe<{ __typename?: 'WorkImage', recommendedImageUrl?: Maybe<string> }>, episodes?: Maybe<{ __typename?: 'EpisodeConnection', edges?: Maybe<Array<Maybe<{ __typename?: 'EpisodeEdge', node?: Maybe<{ __typename?: 'Episode', id: string, number?: Maybe<number>, numberText?: Maybe<string>, title?: Maybe<string>, viewerDidTrack: boolean }> }>>> }> }> }>>> }> };

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = { __typename?: 'Query', viewer?: Maybe<{ __typename?: 'User', name: string, username: string, avatarUrl?: Maybe<string>, watchingCount: number, wannaWatchCount: number, watchedCount: number, onHoldCount: number, stopWatchingCount: number, recordsCount: number }> };

export type WatchingAnimeQueryVariables = Exact<{ [key: string]: never; }>;


export type WatchingAnimeQuery = { __typename?: 'Query', viewer?: Maybe<{ __typename?: 'User', works?: Maybe<{ __typename?: 'WorkConnection', nodes?: Maybe<Array<Maybe<{ __typename?: 'Work', annictId: number, title: string, episodesCount: number, media: Media, image?: Maybe<{ __typename?: 'WorkImage', recommendedImageUrl?: Maybe<string> }> }>>> }> }> };

export type GetWorkListQueryVariables = Exact<{
  state: StatusState;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
}>;


export type GetWorkListQuery = { __typename?: 'Query', viewer?: Maybe<{ __typename?: 'User', works?: Maybe<{ __typename?: 'WorkConnection', edges?: Maybe<Array<Maybe<{ __typename?: 'WorkEdge', node?: Maybe<{ __typename?: 'Work', title: string, id: string, annictId: number, media: Media, seasonYear?: Maybe<number>, seasonName?: Maybe<SeasonName>, image?: Maybe<{ __typename?: 'WorkImage', recommendedImageUrl?: Maybe<string> }> }> }>>>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean } }> }> };


export const CreateRecordDocument = gql`
    mutation createRecord($episodeId: ID!, $ratingState: RatingState, $comment: String, $shareTwitter: Boolean) {
  createRecord(
    input: {episodeId: $episodeId, ratingState: $ratingState, comment: $comment, shareTwitter: $shareTwitter}
  ) {
    clientMutationId
  }
}
    `;
export type CreateRecordMutationFn = Apollo.MutationFunction<CreateRecordMutation, CreateRecordMutationVariables>;

/**
 * __useCreateRecordMutation__
 *
 * To run a mutation, you first call `useCreateRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecordMutation, { data, loading, error }] = useCreateRecordMutation({
 *   variables: {
 *      episodeId: // value for 'episodeId'
 *      ratingState: // value for 'ratingState'
 *      comment: // value for 'comment'
 *      shareTwitter: // value for 'shareTwitter'
 *   },
 * });
 */
export function useCreateRecordMutation(baseOptions?: Apollo.MutationHookOptions<CreateRecordMutation, CreateRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRecordMutation, CreateRecordMutationVariables>(CreateRecordDocument, options);
      }
export type CreateRecordMutationHookResult = ReturnType<typeof useCreateRecordMutation>;
export type CreateRecordMutationResult = Apollo.MutationResult<CreateRecordMutation>;
export type CreateRecordMutationOptions = Apollo.BaseMutationOptions<CreateRecordMutation, CreateRecordMutationVariables>;
export const UpdateStatusDocument = gql`
    mutation updateStatus($state: StatusState!, $workId: ID!) {
  updateStatus(input: {state: $state, workId: $workId}) {
    clientMutationId
  }
}
    `;
export type UpdateStatusMutationFn = Apollo.MutationFunction<UpdateStatusMutation, UpdateStatusMutationVariables>;

/**
 * __useUpdateStatusMutation__
 *
 * To run a mutation, you first call `useUpdateStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStatusMutation, { data, loading, error }] = useUpdateStatusMutation({
 *   variables: {
 *      state: // value for 'state'
 *      workId: // value for 'workId'
 *   },
 * });
 */
export function useUpdateStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStatusMutation, UpdateStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStatusMutation, UpdateStatusMutationVariables>(UpdateStatusDocument, options);
      }
export type UpdateStatusMutationHookResult = ReturnType<typeof useUpdateStatusMutation>;
export type UpdateStatusMutationResult = Apollo.MutationResult<UpdateStatusMutation>;
export type UpdateStatusMutationOptions = Apollo.BaseMutationOptions<UpdateStatusMutation, UpdateStatusMutationVariables>;
export const GetEpisodeListDocument = gql`
    query getEpisodeList($annictId: [Int!]) {
  searchWorks(annictIds: $annictId) {
    edges {
      node {
        id
        annictId
        title
        viewerStatusState
        image {
          recommendedImageUrl
        }
        media
        episodes(orderBy: {field: SORT_NUMBER, direction: ASC}) {
          edges {
            node {
              id
              number
              numberText
              title
              viewerDidTrack
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetEpisodeListQuery__
 *
 * To run a query within a React component, call `useGetEpisodeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodeListQuery({
 *   variables: {
 *      annictId: // value for 'annictId'
 *   },
 * });
 */
export function useGetEpisodeListQuery(baseOptions?: Apollo.QueryHookOptions<GetEpisodeListQuery, GetEpisodeListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEpisodeListQuery, GetEpisodeListQueryVariables>(GetEpisodeListDocument, options);
      }
export function useGetEpisodeListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodeListQuery, GetEpisodeListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEpisodeListQuery, GetEpisodeListQueryVariables>(GetEpisodeListDocument, options);
        }
export type GetEpisodeListQueryHookResult = ReturnType<typeof useGetEpisodeListQuery>;
export type GetEpisodeListLazyQueryHookResult = ReturnType<typeof useGetEpisodeListLazyQuery>;
export type GetEpisodeListQueryResult = Apollo.QueryResult<GetEpisodeListQuery, GetEpisodeListQueryVariables>;
export const GetUserInfoDocument = gql`
    query getUserInfo {
  viewer {
    name
    username
    avatarUrl
    watchingCount
    wannaWatchCount
    watchedCount
    onHoldCount
    stopWatchingCount
    recordsCount
  }
}
    `;

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
      }
export function useGetUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>;
export type GetUserInfoLazyQueryHookResult = ReturnType<typeof useGetUserInfoLazyQuery>;
export type GetUserInfoQueryResult = Apollo.QueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;
export const WatchingAnimeDocument = gql`
    query WatchingAnime {
  viewer {
    works(state: WATCHING, orderBy: {field: SEASON, direction: DESC}) {
      nodes {
        annictId
        title
        image {
          recommendedImageUrl
        }
        episodesCount
        media
      }
    }
  }
}
    `;

/**
 * __useWatchingAnimeQuery__
 *
 * To run a query within a React component, call `useWatchingAnimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useWatchingAnimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWatchingAnimeQuery({
 *   variables: {
 *   },
 * });
 */
export function useWatchingAnimeQuery(baseOptions?: Apollo.QueryHookOptions<WatchingAnimeQuery, WatchingAnimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WatchingAnimeQuery, WatchingAnimeQueryVariables>(WatchingAnimeDocument, options);
      }
export function useWatchingAnimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WatchingAnimeQuery, WatchingAnimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WatchingAnimeQuery, WatchingAnimeQueryVariables>(WatchingAnimeDocument, options);
        }
export type WatchingAnimeQueryHookResult = ReturnType<typeof useWatchingAnimeQuery>;
export type WatchingAnimeLazyQueryHookResult = ReturnType<typeof useWatchingAnimeLazyQuery>;
export type WatchingAnimeQueryResult = Apollo.QueryResult<WatchingAnimeQuery, WatchingAnimeQueryVariables>;
export const GetWorkListDocument = gql`
    query getWorkList($state: StatusState!, $first: Int, $after: String) {
  viewer {
    works(
      state: $state
      orderBy: {field: SEASON, direction: DESC}
      first: $first
      after: $after
    ) {
      edges {
        node {
          title
          id
          annictId
          media
          image {
            recommendedImageUrl
          }
          seasonYear
          seasonName
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
    `;

/**
 * __useGetWorkListQuery__
 *
 * To run a query within a React component, call `useGetWorkListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkListQuery({
 *   variables: {
 *      state: // value for 'state'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetWorkListQuery(baseOptions: Apollo.QueryHookOptions<GetWorkListQuery, GetWorkListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkListQuery, GetWorkListQueryVariables>(GetWorkListDocument, options);
      }
export function useGetWorkListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkListQuery, GetWorkListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkListQuery, GetWorkListQueryVariables>(GetWorkListDocument, options);
        }
export type GetWorkListQueryHookResult = ReturnType<typeof useGetWorkListQuery>;
export type GetWorkListLazyQueryHookResult = ReturnType<typeof useGetWorkListLazyQuery>;
export type GetWorkListQueryResult = Apollo.QueryResult<GetWorkListQuery, GetWorkListQueryVariables>;