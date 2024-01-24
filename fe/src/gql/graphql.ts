/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `BigInt` scalar type represents non-fractional whole numeric values.
   * `BigInt` is not constrained to 32-bit like the `Int` type and thus is a less
   * compatible type.
   */
  BigInt: { input: any; output: any; }
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: any; output: any; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: any; output: any; }
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: { input: any; output: any; }
  /**
   * The `Time` scalar type represents a Time value as
   * specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Time: { input: any; output: any; }
};

export type ActiveInactiveClinicMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  pk: Scalars['ID']['input'];
};

export type ActiveInactiveClinicMutationPayload = {
  __typename?: 'ActiveInactiveClinicMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  details?: Maybe<SchoolType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ActiveInactiveZoomMeetingMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  pk: Scalars['ID']['input'];
};

export type ActiveInactiveZoomMeetingMutationPayload = {
  __typename?: 'ActiveInactiveZoomMeetingMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data?: Maybe<ZoomLinkDetailsType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type AddAttendeInZoomMeetingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  meetingId: Scalars['String']['input'];
};

export type AddAttendeInZoomMeetingPayload = {
  __typename?: 'AddAttendeInZoomMeetingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['JSONString']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type AddCommentReplyOnVideosMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentId: Scalars['ID']['input'];
  parentReplyId?: InputMaybe<Scalars['ID']['input']>;
  reply: Scalars['String']['input'];
};

export type AddCommentReplyOnVideosMutationPayload = {
  __typename?: 'AddCommentReplyOnVideosMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  commentReply?: Maybe<CommentsReplyType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type AddMessageInChatRoomMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  documentUrl?: InputMaybe<Scalars['String']['input']>;
  roomId: Scalars['ID']['input'];
};

export type AddMessageInChatRoomMutationPayload = {
  __typename?: 'AddMessageInChatRoomMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data?: Maybe<MessageType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type AddMessageViewedByMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  messageId: Scalars['ID']['input'];
  roomId: Scalars['ID']['input'];
};

export type AddMessageViewedByMutationPayload = {
  __typename?: 'AddMessageViewedByMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type AddOptionForAssessmentQuestionMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  option: Scalars['String']['input'];
};

export type AddOptionForAssessmentQuestionMutationPayload = {
  __typename?: 'AddOptionForAssessmentQuestionMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  option?: Maybe<StrugglingIssuesOptionsType>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type AddVideoToAssignAccordingToResponsesInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  option: Scalars['ID']['input'];
  question: Scalars['ID']['input'];
  videosToAssignData: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type AddVideoToAssignAccordingToResponsesPayload = {
  __typename?: 'AddVideoToAssignAccordingToResponsesPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  videosToAssignAccResp?: Maybe<VideoAssignDataAccoringToResponsesType>;
};

export type AddVideoViewsMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  tutorialVideo: Scalars['ID']['input'];
};

export type AddVideoViewsMutationPayload = {
  __typename?: 'AddVideoViewsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  videoView?: Maybe<TutorialVideoViewsType>;
};

export type AddZoomMeetingManuallyMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  durationMin?: InputMaybe<Scalars['Int']['input']>;
  hostId?: InputMaybe<Scalars['ID']['input']>;
  joinUrl?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['ID']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
};

export type AddZoomMeetingManuallyMutationPayload = {
  __typename?: 'AddZoomMeetingManuallyMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data?: Maybe<ZoomLinkDetailsType>;
  message?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['JSONString']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

/** An enumeration. */
export enum AssessmentsLearnerAssessmentsBehaviourStatusChoices {
  /** completed */
  Completed = 'COMPLETED',
  /** inprogress */
  Inprogress = 'INPROGRESS',
  /** pending */
  Pending = 'PENDING'
}

/** An enumeration. */
export enum AssessmentsLearnerAssessmentsPersonalizedStatusChoices {
  /** completed */
  Completed = 'COMPLETED',
  /** inprogress */
  Inprogress = 'INPROGRESS',
  /** pending */
  Pending = 'PENDING'
}

/** An enumeration. */
export enum AssessmentsLearnerAssessmentsStatusChoices {
  /** completed */
  Completed = 'COMPLETED',
  /** inprogress */
  Inprogress = 'INPROGRESS',
  /** pending */
  Pending = 'PENDING'
}

/** An enumeration. */
export enum AssessmentsStrugglingIssuesQuestionsWithOptionsQuestionTypeChoices {
  /** behavior */
  Behavior = 'BEHAVIOR',
  /** personalized_behavior */
  PersonalizedBehavior = 'PERSONALIZED_BEHAVIOR'
}

export type AssignVideosToClinicMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  clinic: Scalars['ID']['input'];
  tutorialVideos: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type AssignVideosToClinicMutationPayload = {
  __typename?: 'AssignVideosToClinicMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  clinicTutorialVideos?: Maybe<Array<Maybe<ClinicTutorialVideosType>>>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type AssignVideosToLearnerMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  learner: Scalars['ID']['input'];
  tutorialVideos: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type AssignVideosToLearnerMutationPayload = {
  __typename?: 'AssignVideosToLearnerMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  learnerTutorialVideos?: Maybe<Array<Maybe<StudentsTutorialVideosType>>>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type AttendeAddedLogsType = Node & {
  __typename?: 'AttendeAddedLogsType';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meetingId: Scalars['String']['output'];
  response: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserType;
};

export type AttendeAddedLogsTypeConnection = {
  __typename?: 'AttendeAddedLogsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AttendeAddedLogsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AttendeAddedLogsType` and its cursor. */
export type AttendeAddedLogsTypeEdge = {
  __typename?: 'AttendeAddedLogsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<AttendeAddedLogsType>;
};

export type AvailableStaffWeekdaysTimeSlotType = {
  __typename?: 'AvailableStaffWeekdaysTimeSlotType';
  staff?: Maybe<StaffType>;
  staffWeekday?: Maybe<StaffWeekdaysType>;
  timeSlot?: Maybe<StaffTimeSlotsType>;
};

export type CptCodesType = Node & {
  __typename?: 'CPTCodesType';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  instantzoommeetSet: InstantZoomMeetTypeConnection;
  instantzoommeetmanualSet: InstantZoomMeetManualTypeConnection;
  meetrequestsSet: MeetRequestsTypeConnection;
  updatedAt: Scalars['DateTime']['output'];
};


export type CptCodesTypeInstantzoommeetSetArgs = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  attende?: InputMaybe<Scalars['ID']['input']>;
  attendeJoined?: InputMaybe<Scalars['DateTime']['input']>;
  attendeLeave?: InputMaybe<Scalars['DateTime']['input']>;
  attendeStatus?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cptCode?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  host?: InputMaybe<Scalars['ID']['input']>;
  hostJoined?: InputMaybe<Scalars['DateTime']['input']>;
  hostLeave?: InputMaybe<Scalars['DateTime']['input']>;
  hostStatus?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  meetEnded?: InputMaybe<Scalars['DateTime']['input']>;
  meetJoined?: InputMaybe<Scalars['DateTime']['input']>;
  meetingDetails?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingStatus?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  placeOfService?: InputMaybe<Scalars['ID']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type CptCodesTypeInstantzoommeetmanualSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  attende_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  host_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type CptCodesTypeMeetrequestsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  calenderEventId?: InputMaybe<Scalars['String']['input']>;
  cptCode?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  localEndTime?: InputMaybe<Scalars['DateTime']['input']>;
  localStartTime?: InputMaybe<Scalars['DateTime']['input']>;
  meetLink?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  placeOfService?: InputMaybe<Scalars['ID']['input']>;
  staff?: InputMaybe<Scalars['ID']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  zoomResponse?: InputMaybe<Scalars['String']['input']>;
};

export type ChangeUserForgotPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  current: Scalars['String']['input'];
  new: Scalars['String']['input'];
};

/** change user forgot password */
export type ChangeUserForgotPasswordPayload = {
  __typename?: 'ChangeUserForgotPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<UserType>;
};

/** An enumeration. */
export enum ChatChatRoomRoomTypeChoices {
  /** group */
  Group = 'GROUP',
  /** one_to_one */
  OneToOne = 'ONE_TO_ONE'
}

/** An enumeration. */
export enum ChatNotificationsNotifyTypeChoices {
  /** request_meet */
  RequestMeet = 'REQUEST_MEET',
  /** webinar_meet */
  WebinarMeet = 'WEBINAR_MEET'
}

export type ChatRoomType = Node & {
  __typename?: 'ChatRoomType';
  chatroomusersSet: ChatRoomUsersTypeConnection;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  groupName?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  messageSet: MessageTypeConnection;
  roomType: ChatChatRoomRoomTypeChoices;
  updatedAt: Scalars['DateTime']['output'];
};


export type ChatRoomTypeChatroomusersSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  chatRoom?: InputMaybe<Scalars['ID']['input']>;
  chatUser?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type ChatRoomTypeMessageSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  room?: InputMaybe<Scalars['ID']['input']>;
  sender?: InputMaybe<Scalars['ID']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  viewedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type ChatRoomTypeConnection = {
  __typename?: 'ChatRoomTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ChatRoomTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ChatRoomType` and its cursor. */
export type ChatRoomTypeEdge = {
  __typename?: 'ChatRoomTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ChatRoomType>;
};

export type ChatRoomUsersInput = {
  isAdmin: Scalars['Boolean']['input'];
  userId: Scalars['ID']['input'];
};

export type ChatRoomUsersType = Node & {
  __typename?: 'ChatRoomUsersType';
  chatRoom: ChatRoomType;
  chatUser: ChatUserType;
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ChatRoomUsersTypeConnection = {
  __typename?: 'ChatRoomUsersTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ChatRoomUsersTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ChatRoomUsersType` and its cursor. */
export type ChatRoomUsersTypeEdge = {
  __typename?: 'ChatRoomUsersTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ChatRoomUsersType>;
};

export type ChatRoomWithUnreadCountType = {
  __typename?: 'ChatRoomWithUnreadCountType';
  chatRoom?: Maybe<ChatRoomType>;
  unreadMessageCount?: Maybe<Scalars['Int']['output']>;
};

/** An enumeration. */
export enum ChatUserFcmTokenDeviceTypeChoices {
  /** android */
  Android = 'ANDROID',
  /** ios */
  Ios = 'IOS',
  /** web */
  Web = 'WEB'
}

export type ChatUserType = Node & {
  __typename?: 'ChatUserType';
  chatroomusersSet: ChatRoomUsersTypeConnection;
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  messageSet: MessageTypeConnection;
  messageviewedbySet: MessageViewedByTypeConnection;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<UserType>;
  userName?: Maybe<Scalars['String']['output']>;
};


export type ChatUserTypeChatroomusersSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  chatRoom?: InputMaybe<Scalars['ID']['input']>;
  chatUser?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type ChatUserTypeMessageSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  room?: InputMaybe<Scalars['ID']['input']>;
  sender?: InputMaybe<Scalars['ID']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  viewedBy?: InputMaybe<Scalars['ID']['input']>;
};


export type ChatUserTypeMessageviewedbySetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  viewer?: InputMaybe<Scalars['ID']['input']>;
};

export type CheckIsUsernameExistMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

/** mutation to check if the username is exist or not */
export type CheckIsUsernameExistMutationPayload = {
  __typename?: 'CheckIsUsernameExistMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ClinicDashboardType = {
  __typename?: 'ClinicDashboardType';
  activeLearners?: Maybe<Scalars['Int']['output']>;
  inactiveLearners?: Maybe<Scalars['Int']['output']>;
  performedAssessments?: Maybe<Scalars['Int']['output']>;
  totalLearners?: Maybe<Scalars['Int']['output']>;
  totalVideos?: Maybe<Scalars['Int']['output']>;
  videosAssigned?: Maybe<Scalars['Int']['output']>;
};

export type ClinicSignUpMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  data: SignUpInput;
};

/** clinic signup */
export type ClinicSignUpMutationPayload = {
  __typename?: 'ClinicSignUpMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  school?: Maybe<SchoolType>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type ClinicTutorialVideosType = Node & {
  __typename?: 'ClinicTutorialVideosType';
  averageRating?: Maybe<Scalars['Float']['output']>;
  clinic: SchoolType;
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  totalDislikes?: Maybe<Scalars['Int']['output']>;
  totalLikes?: Maybe<Scalars['Int']['output']>;
  tutorialVideos: TutorialVideosType;
  updatedAt: Scalars['DateTime']['output'];
  videoViews?: Maybe<Scalars['Int']['output']>;
};

export type ClinicTutorialVideosTypeConnection = {
  __typename?: 'ClinicTutorialVideosTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ClinicTutorialVideosTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ClinicTutorialVideosType` and its cursor. */
export type ClinicTutorialVideosTypeEdge = {
  __typename?: 'ClinicTutorialVideosTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ClinicTutorialVideosType>;
};

export type ClinicTutorialVidesHistoryType = Node & {
  __typename?: 'ClinicTutorialVidesHistoryType';
  clinic: SchoolType;
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isAssigned: Scalars['Boolean']['output'];
  tutorialVideo: TutorialVideosType;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserType>;
};

export type ClinicTutorialVidesHistoryTypeConnection = {
  __typename?: 'ClinicTutorialVidesHistoryTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ClinicTutorialVidesHistoryTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ClinicTutorialVidesHistoryType` and its cursor. */
export type ClinicTutorialVidesHistoryTypeEdge = {
  __typename?: 'ClinicTutorialVidesHistoryTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ClinicTutorialVidesHistoryType>;
};

export type ClinicVideosInHierarchyModuleType = {
  __typename?: 'ClinicVideosInHierarchyModuleType';
  isActive?: Maybe<Scalars['Boolean']['output']>;
  moduleId?: Maybe<Scalars['ID']['output']>;
  moduleName?: Maybe<Scalars['String']['output']>;
  moduleOrder?: Maybe<Scalars['Int']['output']>;
  subModules?: Maybe<Array<Maybe<ClinicVideosInHierarchySubModuleType>>>;
};

export type ClinicVideosInHierarchySubModuleType = {
  __typename?: 'ClinicVideosInHierarchySubModuleType';
  clinicTutorialVideos?: Maybe<Array<Maybe<ClinicTutorialVideosType>>>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  subModuleId?: Maybe<Scalars['ID']['output']>;
  subModuleName?: Maybe<Scalars['String']['output']>;
};

export type CommentOnVideosMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment: Scalars['String']['input'];
  tutorialVideo: Scalars['ID']['input'];
};

export type CommentOnVideosMutationPayload = {
  __typename?: 'CommentOnVideosMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  videoComment?: Maybe<VideoCommentsType>;
};

export type CommentsReplyType = Node & {
  __typename?: 'CommentsReplyType';
  comment: Scalars['String']['output'];
  commentsreplySet: CommentsReplyTypeConnection;
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  parentCommentReply?: Maybe<CommentsReplyType>;
  reactBy: UserType;
  updatedAt: Scalars['DateTime']['output'];
  videocommentsSet: VideoCommentsTypeConnection;
};


export type CommentsReplyTypeCommentsreplySetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  parentCommentReply?: InputMaybe<Scalars['ID']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type CommentsReplyTypeVideocommentsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  reply?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};

export type CommentsReplyTypeConnection = {
  __typename?: 'CommentsReplyTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CommentsReplyTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CommentsReplyType` and its cursor. */
export type CommentsReplyTypeEdge = {
  __typename?: 'CommentsReplyTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CommentsReplyType>;
};

/** An enumeration. */
export enum CommunityZoomLinkDetailsStatusChoices {
  /** cancelled */
  Cancelled = 'CANCELLED',
  /** completed */
  Completed = 'COMPLETED',
  /** pending */
  Pending = 'PENDING'
}

/** An enumeration. */
export enum CommunityZoomLinkDetailsZoomMeetTypeChoices {
  /** by_zoom_api */
  ByZoomApi = 'BY_ZOOM_API',
  /** manually */
  Manually = 'MANUALLY'
}

export type CountryType = Node & {
  __typename?: 'CountryType';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  iso3Code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  schoolSet: SchoolTypeConnection;
  staffSet: StaffTypeConnection;
  studentsSet: StudentsTypeConnection;
};


export type CountryTypeSchoolSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  schoolName_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type CountryTypeStaffSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstname_Icontains?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastname_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type CountryTypeStudentsSetArgs = {
  admissionDate?: InputMaybe<Scalars['Date']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  authStaff?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  caseManager?: InputMaybe<Scalars['ID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  country?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentAddress?: InputMaybe<Scalars['String']['input']>;
  dateOfDiagnosis?: InputMaybe<Scalars['Date']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fatherName?: InputMaybe<Scalars['String']['input']>;
  fatherPhone?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  guardionMobile?: InputMaybe<Scalars['String']['input']>;
  guardionName?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  internalNo?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  mobileno?: InputMaybe<Scalars['String']['input']>;
  motherName?: InputMaybe<Scalars['String']['input']>;
  motherPhone?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentFirstname?: InputMaybe<Scalars['String']['input']>;
  parentLastname?: InputMaybe<Scalars['String']['input']>;
  parentMobile?: InputMaybe<Scalars['String']['input']>;
  parentNickname?: InputMaybe<Scalars['String']['input']>;
  pronounceChild?: InputMaybe<Scalars['String']['input']>;
  ssnAadhar?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type CountryTypeConnection = {
  __typename?: 'CountryTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CountryTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CountryType` and its cursor. */
export type CountryTypeEdge = {
  __typename?: 'CountryTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CountryType>;
};

export type CreateAssessmentQuestionMutationInput = {
  allowFreeText: Scalars['Boolean']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  forResponse?: InputMaybe<Scalars['ID']['input']>;
  options: Array<InputMaybe<Scalars['ID']['input']>>;
  parentQuestion?: InputMaybe<Scalars['ID']['input']>;
  question: Scalars['String']['input'];
  questionType: Scalars['String']['input'];
};

export type CreateAssessmentQuestionMutationPayload = {
  __typename?: 'CreateAssessmentQuestionMutationPayload';
  assessmentQuestion?: Maybe<StrugglingIssuesQuestionsWithOptionsType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateAssessmentQuestionResponseMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  learnerAssessment: Scalars['ID']['input'];
  optionId?: InputMaybe<Scalars['ID']['input']>;
  otherOptionText?: InputMaybe<Scalars['String']['input']>;
  questionId: Scalars['ID']['input'];
  selectedOptions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type CreateAssessmentQuestionResponseMutationPayload = {
  __typename?: 'CreateAssessmentQuestionResponseMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  questionResponse?: Maybe<LearnerStrugglingQuestionResponsesType>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateChatRoomMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  isGroup: Scalars['Boolean']['input'];
  users: Array<InputMaybe<Scalars['ID']['input']>>;
};

/** clinic signup */
export type CreateChatRoomMutationPayload = {
  __typename?: 'CreateChatRoomMutationPayload';
  chatRoom?: Maybe<ChatRoomType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateHostMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateHostMutationPayload = {
  __typename?: 'CreateHostMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  hostData?: Maybe<HostInfoType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateInstantZoomMeetManuallyMutationInput = {
  attendeUser: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateInstantZoomMeetManuallyMutationPayload = {
  __typename?: 'CreateInstantZoomMeetManuallyMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data?: Maybe<InstantZoomMeetManualType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateInstantZoomMeetingMutationInput = {
  attendeUser: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateInstantZoomMeetingMutationPayload = {
  __typename?: 'CreateInstantZoomMeetingMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data?: Maybe<InstantZoomMeetType>;
  message?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['JSONString']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateMeetRequestCommentMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment: Scalars['String']['input'];
  meetRequestId: Scalars['ID']['input'];
};

export type CreateMeetRequestCommentMutationPayload = {
  __typename?: 'CreateMeetRequestCommentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  commentData?: Maybe<MeetRequestsCommentsType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateMeetRequestMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  endTime: Scalars['DateTime']['input'];
  localEndTime?: InputMaybe<Scalars['DateTime']['input']>;
  localStartTime?: InputMaybe<Scalars['DateTime']['input']>;
  staffId: Scalars['ID']['input'];
  startTime: Scalars['DateTime']['input'];
  topic?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMeetRequestMutationPayload = {
  __typename?: 'CreateMeetRequestMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data?: Maybe<MeetRequestsType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateStaffMutationInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contactNo?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['ID']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  education?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  experience?: InputMaybe<Scalars['String']['input']>;
  firstname: Scalars['String']['input'];
  gender?: InputMaybe<Scalars['String']['input']>;
  isDefaultBcba?: InputMaybe<Scalars['Boolean']['input']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  meetLink?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type CreateStaffMutationPayload = {
  __typename?: 'CreateStaffMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  staff?: Maybe<StaffType>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateStudentMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  studentData: StudentInput;
};

export type CreateStudentMutationPayload = {
  __typename?: 'CreateStudentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  student?: Maybe<StudentsType>;
};

export type CreateTutorialVideosModuleMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  moduleOrder?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTutorialVideosModuleMutationPayload = {
  __typename?: 'CreateTutorialVideosModuleMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  videoModule?: Maybe<TutorialVideosModuleType>;
};

export type CreateTutorialVideosMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  moduleId: Scalars['ID']['input'];
  submoduleId: Scalars['ID']['input'];
  videoId: Scalars['ID']['input'];
};

export type CreateTutorialVideosMutationPayload = {
  __typename?: 'CreateTutorialVideosMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  tutorialVideo?: Maybe<TutorialVideosType>;
};

export type CreateTutorialVideosSubModuleMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  moduleId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTutorialVideosSubModuleMutationPayload = {
  __typename?: 'CreateTutorialVideosSubModuleMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  videoSubModule?: Maybe<TutorialVideosSubModuleType>;
};

export type CreateUpdateStaffSlotsMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  staffShifts: Array<InputMaybe<StaffShiftsInput>>;
};

export type CreateUpdateStaffSlotsMutationPayload = {
  __typename?: 'CreateUpdateStaffSlotsMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  staff?: Maybe<StaffType>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateVideosMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  videoDocFile?: InputMaybe<Scalars['String']['input']>;
  videoName?: InputMaybe<Scalars['String']['input']>;
  videoUrl: Scalars['String']['input'];
};

export type CreateVideosMutationPayload = {
  __typename?: 'CreateVideosMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  video?: Maybe<VideosType>;
};

export type CreateZoomMeetingMutationInput = {
  agenda?: InputMaybe<Scalars['String']['input']>;
  breakoutRoom?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  durationMin?: InputMaybe<Scalars['Int']['input']>;
  hostVideo?: InputMaybe<Scalars['Boolean']['input']>;
  joinBeforeHost?: InputMaybe<Scalars['Boolean']['input']>;
  muteUponEntry?: InputMaybe<Scalars['Boolean']['input']>;
  participantVideo?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  waitingRoom?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateZoomMeetingMutationPayload = {
  __typename?: 'CreateZoomMeetingMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data?: Maybe<ZoomLinkDetailsType>;
  message?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['JSONString']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteAccountMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteAccountMutationPayload = {
  __typename?: 'DeleteAccountMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteMeetRequestMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type DeleteMeetRequestMutationPayload = {
  __typename?: 'DeleteMeetRequestMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteRequestMeetCommentMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetCommentId: Scalars['ID']['input'];
};

export type DeleteRequestMeetCommentMutationPayload = {
  __typename?: 'DeleteRequestMeetCommentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

/** Debugging information for the current query. */
export type DjangoDebug = {
  __typename?: 'DjangoDebug';
  /** Raise exceptions for this API query. */
  exceptions?: Maybe<Array<Maybe<DjangoDebugException>>>;
  /** Executed SQL queries for this API query. */
  sql?: Maybe<Array<Maybe<DjangoDebugSql>>>;
};

/** Represents a single exception raised. */
export type DjangoDebugException = {
  __typename?: 'DjangoDebugException';
  /** The class of the exception */
  excType: Scalars['String']['output'];
  /** The message of the exception */
  message: Scalars['String']['output'];
  /** The stack trace */
  stack: Scalars['String']['output'];
};

/** Represents a single database query made to a Django managed DB. */
export type DjangoDebugSql = {
  __typename?: 'DjangoDebugSQL';
  /** The Django database alias (e.g. 'default'). */
  alias: Scalars['String']['output'];
  /** Duration of this database query in seconds. */
  duration: Scalars['Float']['output'];
  /** Postgres connection encoding if available. */
  encoding?: Maybe<Scalars['String']['output']>;
  /** Whether this database query was a SELECT. */
  isSelect: Scalars['Boolean']['output'];
  /** Whether this database query took more than 10 seconds. */
  isSlow: Scalars['Boolean']['output'];
  /** Postgres isolation level if available. */
  isoLevel?: Maybe<Scalars['String']['output']>;
  /** JSON encoded database query parameters. */
  params: Scalars['String']['output'];
  /** The raw SQL of this query, without params. */
  rawSql: Scalars['String']['output'];
  /** The actual SQL sent to this database. */
  sql?: Maybe<Scalars['String']['output']>;
  /** Start time of this database query. */
  startTime: Scalars['Float']['output'];
  /** Stop time of this database query. */
  stopTime: Scalars['Float']['output'];
  /** Postgres transaction ID if available. */
  transId?: Maybe<Scalars['String']['output']>;
  /** Postgres transaction status if available. */
  transStatus?: Maybe<Scalars['String']['output']>;
  /** The type of database being used (e.g. postrgesql, mysql, sqlite). */
  vendor: Scalars['String']['output'];
};

export type ForgotPasswordRequestMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type ForgotPasswordRequestMutationPayload = {
  __typename?: 'ForgotPasswordRequestMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type GenerateLearneLessonPlanInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  student: Scalars['ID']['input'];
};

export type GenerateLearneLessonPlanPayload = {
  __typename?: 'GenerateLearneLessonPlanPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  report?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type GenerateMeetingSignatureMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  instantZoomId: Scalars['ID']['input'];
  role?: InputMaybe<Scalars['Int']['input']>;
};

export type GenerateMeetingSignatureMutationPayload = {
  __typename?: 'GenerateMeetingSignatureMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  signature?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type GeoDataStructureType = {
  __typename?: 'GeoDataStructureType';
  learner_Country_Iso3Code?: Maybe<Scalars['String']['output']>;
  learner_Country_Name?: Maybe<Scalars['String']['output']>;
  totalCount?: Maybe<Scalars['String']['output']>;
};

export type GroupType = Node & {
  __typename?: 'GroupType';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  userSet: UserTypeConnection;
};


export type GroupTypeUserSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dateJoined?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  isSuperuser?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  userPermissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type GroupTypeConnection = {
  __typename?: 'GroupTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<GroupTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `GroupType` and its cursor. */
export type GroupTypeEdge = {
  __typename?: 'GroupTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<GroupType>;
};

export type HostInfoType = Node & {
  __typename?: 'HostInfoType';
  clinic?: Maybe<SchoolType>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  designation?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  zoomlinkdetailsSet: ZoomLinkDetailsTypeConnection;
};


export type HostInfoTypeZoomlinkdetailsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  bcbaHost?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hostId?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  joinUrl?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  linkDetails?: InputMaybe<Scalars['String']['input']>;
  manualHost?: InputMaybe<Scalars['ID']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  recordingUrl?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<CommunityZoomLinkDetailsStatusChoices>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  zoomMeetType?: InputMaybe<CommunityZoomLinkDetailsZoomMeetTypeChoices>;
};

export type HostInfoTypeConnection = {
  __typename?: 'HostInfoTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<HostInfoTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `HostInfoType` and its cursor. */
export type HostInfoTypeEdge = {
  __typename?: 'HostInfoTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<HostInfoType>;
};

export type InstantZoomMeetManualType = Node & {
  __typename?: 'InstantZoomMeetManualType';
  attende: UserType;
  callAcceptAt?: Maybe<Scalars['DateTime']['output']>;
  callEndAt?: Maybe<Scalars['DateTime']['output']>;
  client?: Maybe<UserType>;
  cptCode?: Maybe<CptCodesType>;
  createdAt: Scalars['DateTime']['output'];
  duration?: Maybe<Scalars['String']['output']>;
  host: UserType;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meetAudioRecording?: Maybe<Scalars['String']['output']>;
  meetTranscript?: Maybe<Scalars['String']['output']>;
  meetVideoRecording?: Maybe<Scalars['String']['output']>;
  placeOfService?: Maybe<PlaceOfServiceType>;
  provider?: Maybe<UserType>;
  status: Scalars['String']['output'];
  units?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  zoomLink: Scalars['String']['output'];
};

export type InstantZoomMeetManualTypeConnection = {
  __typename?: 'InstantZoomMeetManualTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<InstantZoomMeetManualTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `InstantZoomMeetManualType` and its cursor. */
export type InstantZoomMeetManualTypeEdge = {
  __typename?: 'InstantZoomMeetManualTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<InstantZoomMeetManualType>;
};

export type InstantZoomMeetType = Node & {
  __typename?: 'InstantZoomMeetType';
  attende: UserType;
  attendeJoined?: Maybe<Scalars['DateTime']['output']>;
  attendeLeave?: Maybe<Scalars['DateTime']['output']>;
  attendeStatus: Scalars['String']['output'];
  cptCode?: Maybe<CptCodesType>;
  createdAt: Scalars['DateTime']['output'];
  host: UserType;
  hostJoined?: Maybe<Scalars['DateTime']['output']>;
  hostLeave?: Maybe<Scalars['DateTime']['output']>;
  hostStatus: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meetEnded?: Maybe<Scalars['DateTime']['output']>;
  meetJoined?: Maybe<Scalars['DateTime']['output']>;
  meetingDetails?: Maybe<Scalars['String']['output']>;
  meetingId?: Maybe<Scalars['String']['output']>;
  meetingStatus: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  placeOfService?: Maybe<PlaceOfServiceType>;
  topic: Scalars['String']['output'];
  units?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type InstantZoomMeetTypeConnection = {
  __typename?: 'InstantZoomMeetTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<InstantZoomMeetTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `InstantZoomMeetType` and its cursor. */
export type InstantZoomMeetTypeEdge = {
  __typename?: 'InstantZoomMeetTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<InstantZoomMeetType>;
};

export type JoinRemoveGroupUsersMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  roomId: Scalars['ID']['input'];
  users: Array<InputMaybe<ChatRoomUsersInput>>;
};

/** clinic signup */
export type JoinRemoveGroupUsersMutationPayload = {
  __typename?: 'JoinRemoveGroupUsersMutationPayload';
  chatRoom?: Maybe<ChatRoomType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type LanguagesType = Node & {
  __typename?: 'LanguagesType';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  staffSet: StaffTypeConnection;
};


export type LanguagesTypeStaffSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstname_Icontains?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastname_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type LanguagesTypeConnection = {
  __typename?: 'LanguagesTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LanguagesTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `LanguagesType` and its cursor. */
export type LanguagesTypeEdge = {
  __typename?: 'LanguagesTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<LanguagesType>;
};

export type LearnerAssessmentsType = Node & {
  __typename?: 'LearnerAssessmentsType';
  age: Scalars['Date']['output'];
  assessmentDate: Scalars['Date']['output'];
  assessmentNo: Scalars['Int']['output'];
  behaviourStatus: AssessmentsLearnerAssessmentsBehaviourStatusChoices;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  learner: StudentsType;
  learnerstrugglingquestionresponsesSet: LearnerStrugglingQuestionResponsesTypeConnection;
  name?: Maybe<Scalars['String']['output']>;
  parentName?: Maybe<Scalars['String']['output']>;
  personalizedStatus: AssessmentsLearnerAssessmentsPersonalizedStatusChoices;
  pronounceChild?: Maybe<Scalars['String']['output']>;
  status: AssessmentsLearnerAssessmentsStatusChoices;
  updatedAt: Scalars['DateTime']['output'];
  zipCode?: Maybe<Scalars['String']['output']>;
};


export type LearnerAssessmentsTypeLearnerstrugglingquestionresponsesSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learnerAssessment?: InputMaybe<Scalars['ID']['input']>;
  multipleOptions?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  option?: InputMaybe<Scalars['ID']['input']>;
  otherIssue?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LearnerAssessmentsTypeConnection = {
  __typename?: 'LearnerAssessmentsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LearnerAssessmentsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `LearnerAssessmentsType` and its cursor. */
export type LearnerAssessmentsTypeEdge = {
  __typename?: 'LearnerAssessmentsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<LearnerAssessmentsType>;
};

export type LearnerClinicStatsType = {
  __typename?: 'LearnerClinicStatsType';
  totalClinic?: Maybe<Scalars['Int']['output']>;
  totalLearner?: Maybe<Scalars['Int']['output']>;
};

export type LearnerStrugglingQuestionResponsesType = Node & {
  __typename?: 'LearnerStrugglingQuestionResponsesType';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  learnerAssessment: LearnerAssessmentsType;
  multipleOptions: StrugglingIssuesOptionsTypeConnection;
  option?: Maybe<StrugglingIssuesOptionsType>;
  otherIssue?: Maybe<Scalars['String']['output']>;
  question: StrugglingIssuesQuestionsWithOptionsType;
  updatedAt: Scalars['DateTime']['output'];
};


export type LearnerStrugglingQuestionResponsesTypeMultipleOptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  emailBcba?: InputMaybe<Scalars['Boolean']['input']>;
  emailContent?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  option?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LearnerStrugglingQuestionResponsesTypeConnection = {
  __typename?: 'LearnerStrugglingQuestionResponsesTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LearnerStrugglingQuestionResponsesTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `LearnerStrugglingQuestionResponsesType` and its cursor. */
export type LearnerStrugglingQuestionResponsesTypeEdge = {
  __typename?: 'LearnerStrugglingQuestionResponsesTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<LearnerStrugglingQuestionResponsesType>;
};

export type LearnerTutorialVidesHistoryType = Node & {
  __typename?: 'LearnerTutorialVidesHistoryType';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isAssigned: Scalars['Boolean']['output'];
  learner: StudentsType;
  studentTutorialVideo?: Maybe<StudentsTutorialVideosType>;
  tutorialVideo: TutorialVideosType;
  updatedAt: Scalars['DateTime']['output'];
  updatedBy?: Maybe<UserType>;
};

export type LearnerTutorialVidesHistoryTypeConnection = {
  __typename?: 'LearnerTutorialVidesHistoryTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LearnerTutorialVidesHistoryTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `LearnerTutorialVidesHistoryType` and its cursor. */
export type LearnerTutorialVidesHistoryTypeEdge = {
  __typename?: 'LearnerTutorialVidesHistoryTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<LearnerTutorialVidesHistoryType>;
};

export type LearnerVideosInHierarchyModuleType = {
  __typename?: 'LearnerVideosInHierarchyModuleType';
  isActive?: Maybe<Scalars['Boolean']['output']>;
  moduleId?: Maybe<Scalars['ID']['output']>;
  moduleName?: Maybe<Scalars['String']['output']>;
  moduleOrder?: Maybe<Scalars['Int']['output']>;
  subModules?: Maybe<Array<Maybe<LearnerVideosInHierarchySubModuleType>>>;
};

export type LearnerVideosInHierarchySubModuleType = {
  __typename?: 'LearnerVideosInHierarchySubModuleType';
  isActive?: Maybe<Scalars['Boolean']['output']>;
  learnerTutorialVideos?: Maybe<Array<Maybe<StudentsTutorialVideosType>>>;
  subModuleId?: Maybe<Scalars['ID']['output']>;
  subModuleName?: Maybe<Scalars['String']['output']>;
};

export type LearnerWatchTimeType = Node & {
  __typename?: 'LearnerWatchTimeType';
  clinic: SchoolType;
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  status: TutorialVideosLearnerWatchTimeStatusChoices;
  tutorialVideo: TutorialVideosType;
  updatedAt: Scalars['DateTime']['output'];
  userEndWatching?: Maybe<Scalars['DateTime']['output']>;
  userStartWatching?: Maybe<Scalars['DateTime']['output']>;
  videoEndPoint?: Maybe<Scalars['String']['output']>;
  videoStartPoint?: Maybe<Scalars['String']['output']>;
  watchBy: UserType;
  watchTime: Scalars['BigInt']['output'];
};

export type LearnerWatchTimeTypeConnection = {
  __typename?: 'LearnerWatchTimeTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LearnerWatchTimeTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `LearnerWatchTimeType` and its cursor. */
export type LearnerWatchTimeTypeEdge = {
  __typename?: 'LearnerWatchTimeTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<LearnerWatchTimeType>;
};

export type LearnersVideosProgressReportType = {
  __typename?: 'LearnersVideosProgressReportType';
  reportData?: Maybe<Array<Maybe<LearnersVideosProgressType>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type LearnersVideosProgressType = {
  __typename?: 'LearnersVideosProgressType';
  learner?: Maybe<StudentsType>;
  reportData?: Maybe<StudentVideoDashboardType>;
};

export type LeaveGroupMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  roomId: Scalars['ID']['input'];
  user: Scalars['ID']['input'];
};

/** clinic signup */
export type LeaveGroupMutationPayload = {
  __typename?: 'LeaveGroupMutationPayload';
  chatRoom?: Maybe<ChatRoomType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type LikeDislikeVideosMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dislike?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['Boolean']['input']>;
  tutorialVideo: Scalars['ID']['input'];
};

export type LikeDislikeVideosMutationPayload = {
  __typename?: 'LikeDislikeVideosMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  totalDislikesInClinic?: Maybe<Scalars['Int']['output']>;
  totalLikesInClinic?: Maybe<Scalars['Int']['output']>;
  videoLikeDislike?: Maybe<VideosLikeDislikeType>;
};

export type MarkAllNotificationAsReadInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type MarkAllNotificationAsReadPayload = {
  __typename?: 'MarkAllNotificationAsReadPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Array<Maybe<NotificationsType>>>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type MarkNotificationAsReadInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  pk: Scalars['ID']['input'];
};

export type MarkNotificationAsReadPayload = {
  __typename?: 'MarkNotificationAsReadPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  details?: Maybe<NotificationsType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type MeetRequestsCommentsType = Node & {
  __typename?: 'MeetRequestsCommentsType';
  addedBy: UserType;
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meetRequest: MeetRequestsType;
  updatedAt: Scalars['DateTime']['output'];
};

export type MeetRequestsCommentsTypeConnection = {
  __typename?: 'MeetRequestsCommentsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MeetRequestsCommentsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `MeetRequestsCommentsType` and its cursor. */
export type MeetRequestsCommentsTypeEdge = {
  __typename?: 'MeetRequestsCommentsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<MeetRequestsCommentsType>;
};

export type MeetRequestsType = Node & {
  __typename?: 'MeetRequestsType';
  calenderEventId?: Maybe<Scalars['String']['output']>;
  cptCode?: Maybe<CptCodesType>;
  createdAt: Scalars['DateTime']['output'];
  endTime: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  learner: StudentsType;
  localEndTime?: Maybe<Scalars['DateTime']['output']>;
  localStartTime?: Maybe<Scalars['DateTime']['output']>;
  meetLink?: Maybe<Scalars['String']['output']>;
  meetingId?: Maybe<Scalars['String']['output']>;
  meetrequestscommentsSet: MeetRequestsCommentsTypeConnection;
  password?: Maybe<Scalars['String']['output']>;
  placeOfService?: Maybe<PlaceOfServiceType>;
  staff: StaffType;
  startTime: Scalars['DateTime']['output'];
  status: Scalars['String']['output'];
  topic: Scalars['String']['output'];
  units?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  zoomResponse?: Maybe<Scalars['String']['output']>;
};


export type MeetRequestsTypeMeetrequestscommentsSetArgs = {
  addedBy?: InputMaybe<Scalars['ID']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  meetRequest?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MeetRequestsTypeConnection = {
  __typename?: 'MeetRequestsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MeetRequestsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `MeetRequestsType` and its cursor. */
export type MeetRequestsTypeEdge = {
  __typename?: 'MeetRequestsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<MeetRequestsType>;
};

export type MessageType = Node & {
  __typename?: 'MessageType';
  content: Scalars['String']['output'];
  document?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isAllViewed?: Maybe<Scalars['Boolean']['output']>;
  room: ChatRoomType;
  sender: ChatUserType;
  timestamp: Scalars['DateTime']['output'];
  viewedBy: MessageViewedByTypeConnection;
};


export type MessageTypeViewedByArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  viewer?: InputMaybe<Scalars['ID']['input']>;
};

export type MessageTypeConnection = {
  __typename?: 'MessageTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MessageTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `MessageType` and its cursor. */
export type MessageTypeEdge = {
  __typename?: 'MessageTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<MessageType>;
};

export type MessageViewedByType = Node & {
  __typename?: 'MessageViewedByType';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  messageSet: MessageTypeConnection;
  updatedAt: Scalars['DateTime']['output'];
  viewer: ChatUserType;
};


export type MessageViewedByTypeMessageSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  room?: InputMaybe<Scalars['ID']['input']>;
  sender?: InputMaybe<Scalars['ID']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  viewedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type MessageViewedByTypeConnection = {
  __typename?: 'MessageViewedByTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MessageViewedByTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `MessageViewedByType` and its cursor. */
export type MessageViewedByTypeEdge = {
  __typename?: 'MessageViewedByTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<MessageViewedByType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _debug?: Maybe<DjangoDebug>;
  accountDeleteRequest?: Maybe<DeleteAccountMutationPayload>;
  accountVerificationWithOtp?: Maybe<VerifyOtpMutationPayload>;
  activeInactiveClinic?: Maybe<ActiveInactiveClinicMutationPayload>;
  activeInactiveZoomLink?: Maybe<ActiveInactiveZoomMeetingMutationPayload>;
  addAttendeInZoomMeet?: Maybe<AddAttendeInZoomMeetingPayload>;
  addCommentOnVideo?: Maybe<CommentOnVideosMutationPayload>;
  addMessageViewedBy?: Maybe<AddMessageViewedByMutationPayload>;
  addReplyOnComment?: Maybe<AddCommentReplyOnVideosMutationPayload>;
  addUpdateOptions?: Maybe<AddOptionForAssessmentQuestionMutationPayload>;
  addUpdateVideoRating?: Maybe<VideosRatingMutationPayload>;
  addVideoToAssignAccResp?: Maybe<AddVideoToAssignAccordingToResponsesPayload>;
  addVideoView?: Maybe<AddVideoViewsMutationPayload>;
  addZoomMeetManually?: Maybe<AddZoomMeetingManuallyMutationPayload>;
  assignVideosToClinic?: Maybe<AssignVideosToClinicMutationPayload>;
  assignVideosToLearner?: Maybe<AssignVideosToLearnerMutationPayload>;
  /** change user forgot password */
  changeUserPassword?: Maybe<ChangeUserForgotPasswordPayload>;
  /** mutation to check if the username is exist or not */
  checkUsernameIsAvailable?: Maybe<CheckIsUsernameExistMutationPayload>;
  /** clinic signup */
  clinicSignup?: Maybe<ClinicSignUpMutationPayload>;
  createAssessmentQuestion?: Maybe<CreateAssessmentQuestionMutationPayload>;
  /** clinic signup */
  createChatRoom?: Maybe<CreateChatRoomMutationPayload>;
  createHost?: Maybe<CreateHostMutationPayload>;
  createInstantMeet?: Maybe<CreateInstantZoomMeetingMutationPayload>;
  createInstantMeetManually?: Maybe<CreateInstantZoomMeetManuallyMutationPayload>;
  createMeetRequestComment?: Maybe<CreateMeetRequestCommentMutationPayload>;
  createRequestMeet?: Maybe<CreateMeetRequestMutationPayload>;
  createStaff?: Maybe<CreateStaffMutationPayload>;
  createStudent?: Maybe<CreateStudentMutationPayload>;
  createTutorialVideo?: Maybe<CreateTutorialVideosMutationPayload>;
  createUpdateStaffSlots?: Maybe<CreateUpdateStaffSlotsMutationPayload>;
  createVideo?: Maybe<CreateVideosMutationPayload>;
  createVideoModule?: Maybe<CreateTutorialVideosModuleMutationPayload>;
  createVideoSubModule?: Maybe<CreateTutorialVideosSubModuleMutationPayload>;
  createZoomMeeting?: Maybe<CreateZoomMeetingMutationPayload>;
  deleteMeetRequest?: Maybe<DeleteMeetRequestMutationPayload>;
  deleteMeetRequestComment?: Maybe<DeleteRequestMeetCommentMutationPayload>;
  forgotPassword?: Maybe<ForgotPasswordRequestMutationPayload>;
  generateLessonPlan?: Maybe<GenerateLearneLessonPlanPayload>;
  generateSignatureForMeet?: Maybe<GenerateMeetingSignatureMutationPayload>;
  /** clinic signup */
  joinRemoveGroupChatRoom?: Maybe<JoinRemoveGroupUsersMutationPayload>;
  /** clinic signup */
  leaveGroup?: Maybe<LeaveGroupMutationPayload>;
  likeDislikeVideo?: Maybe<LikeDislikeVideosMutationPayload>;
  markAllNotifcationAsRead?: Maybe<MarkAllNotificationAsReadPayload>;
  markNotifcationRead?: Maybe<MarkNotificationAsReadPayload>;
  recordQuestionAnswer?: Maybe<CreateAssessmentQuestionResponseMutationPayload>;
  refreshToken?: Maybe<RefreshPayload>;
  registerUserOnFirebase?: Maybe<RegisterUserOnFirebaseMutationPayload>;
  removeCommentOrReply?: Maybe<RemoveCommentOrReplyMutationPayload>;
  removeFirebaseToken?: Maybe<RemoveFirebaseTokenOnLogoutPayload>;
  sendChatMessage?: Maybe<AddMessageInChatRoomMutationPayload>;
  sendEmailToBcba?: Maybe<SendEmailToBcbaMutationPayload>;
  sendOtpForAccountVerfication?: Maybe<SendOtpMutationPayload>;
  sendOtpForDeactivation?: Maybe<SendOtpForAccountDeactivationMutationPayload>;
  startLearnerAssessment?: Maybe<StartLearnerAssessmentMutationPayload>;
  studentSignup?: Maybe<StudentSignupMutationPayload>;
  syncVideoCurriculumByClinic?: Maybe<SyncVideoCurriculumMutationPayload>;
  tokenAuth?: Maybe<ObtainJsonWebTokenPayload>;
  trackLearnerVideo?: Maybe<TrackLearnerVideoMutationPayload>;
  updateAssessmentQuestion?: Maybe<UpdateAssessmentQuestionMutationPayload>;
  updateClinic?: Maybe<UpdateClinicMutationPayload>;
  updateCommentOnVideo?: Maybe<UpdateCommentOnVideosMutationPayload>;
  updateHost?: Maybe<UpdateHostMutationPayload>;
  updateInstantManualMeetByAttende?: Maybe<UpdateInstantManualMeetByAttendeMutationPayload>;
  updateInstantMeetByAttende?: Maybe<UpdateInstantMeetByAttendeMutationPayload>;
  updateInstantMeetManually?: Maybe<UpdateInstantZoomMeetManuallyMutationPayload>;
  updateInstantZoomMeet?: Maybe<UpdateInstantZoomMeetingMutationPayload>;
  updateLearnerAssessment?: Maybe<UpdateLearnerAssessmentMutationPayload>;
  updateLearnersStaff?: Maybe<UpdateLearnersStaffMutationPayload>;
  updateManualZoomMeet?: Maybe<UpdateZoomMeetingManuallyMutationPayload>;
  updateMeetRequestByBcba?: Maybe<UpdateMeetRequestByBcbaMutationPayload>;
  updateMeetRequestComment?: Maybe<UpdateMeetRequestCommentMutationPayload>;
  updateQuestionAnswer?: Maybe<UpdateAssessmentQuestionResponseMutationPayload>;
  updateReplyOnComment?: Maybe<UpdateCommentReplyOnVideosMutationPayload>;
  updateRequestMeet?: Maybe<UpdateMeetRequestMutationPayload>;
  updateStaff?: Maybe<UpdateStaffMutationPayload>;
  updateStudent?: Maybe<UpdateStudentMutationPayload>;
  updateTutorialVideo?: Maybe<UpdateTutorialVideosMutationPayload>;
  updateVideo?: Maybe<UpdateVideosMutationPayload>;
  updateVideoModule?: Maybe<UpdateTutorialVideosModuleMutationPayload>;
  updateVideoSubModule?: Maybe<UpdateTutorialVideosSubModuleMutationPayload>;
  updateVideoToAssignAccResp?: Maybe<UpdateVideoToAssignAccordingToResponsesPayload>;
  verifyChangePassword?: Maybe<VerifyOtpAndChangePasswordPayload>;
  verifyOtpForDeactivation?: Maybe<VerifyAccountDeactivationOtpMutationPayload>;
  verifyToken?: Maybe<VerifyPayload>;
};


export type MutationAccountDeleteRequestArgs = {
  input: DeleteAccountMutationInput;
};


export type MutationAccountVerificationWithOtpArgs = {
  input: VerifyOtpMutationInput;
};


export type MutationActiveInactiveClinicArgs = {
  input: ActiveInactiveClinicMutationInput;
};


export type MutationActiveInactiveZoomLinkArgs = {
  input: ActiveInactiveZoomMeetingMutationInput;
};


export type MutationAddAttendeInZoomMeetArgs = {
  input: AddAttendeInZoomMeetingInput;
};


export type MutationAddCommentOnVideoArgs = {
  input: CommentOnVideosMutationInput;
};


export type MutationAddMessageViewedByArgs = {
  input: AddMessageViewedByMutationInput;
};


export type MutationAddReplyOnCommentArgs = {
  input: AddCommentReplyOnVideosMutationInput;
};


export type MutationAddUpdateOptionsArgs = {
  input: AddOptionForAssessmentQuestionMutationInput;
};


export type MutationAddUpdateVideoRatingArgs = {
  input: VideosRatingMutationInput;
};


export type MutationAddVideoToAssignAccRespArgs = {
  input: AddVideoToAssignAccordingToResponsesInput;
};


export type MutationAddVideoViewArgs = {
  input: AddVideoViewsMutationInput;
};


export type MutationAddZoomMeetManuallyArgs = {
  input: AddZoomMeetingManuallyMutationInput;
};


export type MutationAssignVideosToClinicArgs = {
  input: AssignVideosToClinicMutationInput;
};


export type MutationAssignVideosToLearnerArgs = {
  input: AssignVideosToLearnerMutationInput;
};


export type MutationChangeUserPasswordArgs = {
  input: ChangeUserForgotPasswordInput;
};


export type MutationCheckUsernameIsAvailableArgs = {
  input: CheckIsUsernameExistMutationInput;
};


export type MutationClinicSignupArgs = {
  input: ClinicSignUpMutationInput;
};


export type MutationCreateAssessmentQuestionArgs = {
  input: CreateAssessmentQuestionMutationInput;
};


export type MutationCreateChatRoomArgs = {
  input: CreateChatRoomMutationInput;
};


export type MutationCreateHostArgs = {
  input: CreateHostMutationInput;
};


export type MutationCreateInstantMeetArgs = {
  input: CreateInstantZoomMeetingMutationInput;
};


export type MutationCreateInstantMeetManuallyArgs = {
  input: CreateInstantZoomMeetManuallyMutationInput;
};


export type MutationCreateMeetRequestCommentArgs = {
  input: CreateMeetRequestCommentMutationInput;
};


export type MutationCreateRequestMeetArgs = {
  input: CreateMeetRequestMutationInput;
};


export type MutationCreateStaffArgs = {
  input: CreateStaffMutationInput;
};


export type MutationCreateStudentArgs = {
  input: CreateStudentMutationInput;
};


export type MutationCreateTutorialVideoArgs = {
  input: CreateTutorialVideosMutationInput;
};


export type MutationCreateUpdateStaffSlotsArgs = {
  input: CreateUpdateStaffSlotsMutationInput;
};


export type MutationCreateVideoArgs = {
  input: CreateVideosMutationInput;
};


export type MutationCreateVideoModuleArgs = {
  input: CreateTutorialVideosModuleMutationInput;
};


export type MutationCreateVideoSubModuleArgs = {
  input: CreateTutorialVideosSubModuleMutationInput;
};


export type MutationCreateZoomMeetingArgs = {
  input: CreateZoomMeetingMutationInput;
};


export type MutationDeleteMeetRequestArgs = {
  input: DeleteMeetRequestMutationInput;
};


export type MutationDeleteMeetRequestCommentArgs = {
  input: DeleteRequestMeetCommentMutationInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordRequestMutationInput;
};


export type MutationGenerateLessonPlanArgs = {
  input: GenerateLearneLessonPlanInput;
};


export type MutationGenerateSignatureForMeetArgs = {
  input: GenerateMeetingSignatureMutationInput;
};


export type MutationJoinRemoveGroupChatRoomArgs = {
  input: JoinRemoveGroupUsersMutationInput;
};


export type MutationLeaveGroupArgs = {
  input: LeaveGroupMutationInput;
};


export type MutationLikeDislikeVideoArgs = {
  input: LikeDislikeVideosMutationInput;
};


export type MutationMarkAllNotifcationAsReadArgs = {
  input: MarkAllNotificationAsReadInput;
};


export type MutationMarkNotifcationReadArgs = {
  input: MarkNotificationAsReadInput;
};


export type MutationRecordQuestionAnswerArgs = {
  input: CreateAssessmentQuestionResponseMutationInput;
};


export type MutationRefreshTokenArgs = {
  input: RefreshInput;
};


export type MutationRegisterUserOnFirebaseArgs = {
  input: RegisterUserOnFirebaseMutationInput;
};


export type MutationRemoveCommentOrReplyArgs = {
  input: RemoveCommentOrReplyMutationInput;
};


export type MutationRemoveFirebaseTokenArgs = {
  input: RemoveFirebaseTokenOnLogoutInput;
};


export type MutationSendChatMessageArgs = {
  input: AddMessageInChatRoomMutationInput;
};


export type MutationSendEmailToBcbaArgs = {
  input: SendEmailToBcbaMutationInput;
};


export type MutationSendOtpForAccountVerficationArgs = {
  input: SendOtpMutationInput;
};


export type MutationSendOtpForDeactivationArgs = {
  input: SendOtpForAccountDeactivationMutationInput;
};


export type MutationStartLearnerAssessmentArgs = {
  input: StartLearnerAssessmentMutationInput;
};


export type MutationStudentSignupArgs = {
  input: StudentSignupMutationInput;
};


export type MutationSyncVideoCurriculumByClinicArgs = {
  input: SyncVideoCurriculumMutationInput;
};


export type MutationTokenAuthArgs = {
  input: ObtainJsonWebTokenInput;
};


export type MutationTrackLearnerVideoArgs = {
  input: TrackLearnerVideoMutationInput;
};


export type MutationUpdateAssessmentQuestionArgs = {
  input: UpdateAssessmentQuestionMutationInput;
};


export type MutationUpdateClinicArgs = {
  input: UpdateClinicMutationInput;
};


export type MutationUpdateCommentOnVideoArgs = {
  input: UpdateCommentOnVideosMutationInput;
};


export type MutationUpdateHostArgs = {
  input: UpdateHostMutationInput;
};


export type MutationUpdateInstantManualMeetByAttendeArgs = {
  input: UpdateInstantManualMeetByAttendeMutationInput;
};


export type MutationUpdateInstantMeetByAttendeArgs = {
  input: UpdateInstantMeetByAttendeMutationInput;
};


export type MutationUpdateInstantMeetManuallyArgs = {
  input: UpdateInstantZoomMeetManuallyMutationInput;
};


export type MutationUpdateInstantZoomMeetArgs = {
  input: UpdateInstantZoomMeetingMutationInput;
};


export type MutationUpdateLearnerAssessmentArgs = {
  input: UpdateLearnerAssessmentMutationInput;
};


export type MutationUpdateLearnersStaffArgs = {
  input: UpdateLearnersStaffMutationInput;
};


export type MutationUpdateManualZoomMeetArgs = {
  input: UpdateZoomMeetingManuallyMutationInput;
};


export type MutationUpdateMeetRequestByBcbaArgs = {
  input: UpdateMeetRequestByBcbaMutationInput;
};


export type MutationUpdateMeetRequestCommentArgs = {
  input: UpdateMeetRequestCommentMutationInput;
};


export type MutationUpdateQuestionAnswerArgs = {
  input: UpdateAssessmentQuestionResponseMutationInput;
};


export type MutationUpdateReplyOnCommentArgs = {
  input: UpdateCommentReplyOnVideosMutationInput;
};


export type MutationUpdateRequestMeetArgs = {
  input: UpdateMeetRequestMutationInput;
};


export type MutationUpdateStaffArgs = {
  input: UpdateStaffMutationInput;
};


export type MutationUpdateStudentArgs = {
  input: UpdateStudentMutationInput;
};


export type MutationUpdateTutorialVideoArgs = {
  input: UpdateTutorialVideosMutationInput;
};


export type MutationUpdateVideoArgs = {
  input: UpdateVideosMutationInput;
};


export type MutationUpdateVideoModuleArgs = {
  input: UpdateTutorialVideosModuleMutationInput;
};


export type MutationUpdateVideoSubModuleArgs = {
  input: UpdateTutorialVideosSubModuleMutationInput;
};


export type MutationUpdateVideoToAssignAccRespArgs = {
  input: UpdateVideoToAssignAccordingToResponsesInput;
};


export type MutationVerifyChangePasswordArgs = {
  input: VerifyOtpAndChangePasswordInput;
};


export type MutationVerifyOtpForDeactivationArgs = {
  input: VerifyAccountDeactivationOtpMutationInput;
};


export type MutationVerifyTokenArgs = {
  input: VerifyInput;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID']['output'];
};

export type NotificationsType = Node & {
  __typename?: 'NotificationsType';
  actorObjectId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isReminder: Scalars['Boolean']['output'];
  notifyType?: Maybe<ChatNotificationsNotifyTypeChoices>;
  read: Scalars['Boolean']['output'];
  recipient: UserType;
  sender?: Maybe<UserType>;
  timestamp: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type NotificationsTypeConnection = {
  __typename?: 'NotificationsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<NotificationsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `NotificationsType` and its cursor. */
export type NotificationsTypeEdge = {
  __typename?: 'NotificationsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<NotificationsType>;
};

export type ObtainJsonWebTokenInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ObtainJsonWebTokenPayload = {
  __typename?: 'ObtainJSONWebTokenPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  countryName?: Maybe<Scalars['String']['output']>;
  firstLogin?: Maybe<Scalars['Boolean']['output']>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
  user?: Maybe<UserType>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PlaceOfServiceType = Node & {
  __typename?: 'PlaceOfServiceType';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  instantzoommeetSet: InstantZoomMeetTypeConnection;
  instantzoommeetmanualSet: InstantZoomMeetManualTypeConnection;
  meetrequestsSet: MeetRequestsTypeConnection;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type PlaceOfServiceTypeInstantzoommeetSetArgs = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  attende?: InputMaybe<Scalars['ID']['input']>;
  attendeJoined?: InputMaybe<Scalars['DateTime']['input']>;
  attendeLeave?: InputMaybe<Scalars['DateTime']['input']>;
  attendeStatus?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cptCode?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  host?: InputMaybe<Scalars['ID']['input']>;
  hostJoined?: InputMaybe<Scalars['DateTime']['input']>;
  hostLeave?: InputMaybe<Scalars['DateTime']['input']>;
  hostStatus?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  meetEnded?: InputMaybe<Scalars['DateTime']['input']>;
  meetJoined?: InputMaybe<Scalars['DateTime']['input']>;
  meetingDetails?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingStatus?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  placeOfService?: InputMaybe<Scalars['ID']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type PlaceOfServiceTypeInstantzoommeetmanualSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  attende_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  host_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type PlaceOfServiceTypeMeetrequestsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  calenderEventId?: InputMaybe<Scalars['String']['input']>;
  cptCode?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  localEndTime?: InputMaybe<Scalars['DateTime']['input']>;
  localStartTime?: InputMaybe<Scalars['DateTime']['input']>;
  meetLink?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  placeOfService?: InputMaybe<Scalars['ID']['input']>;
  staff?: InputMaybe<Scalars['ID']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  zoomResponse?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  _debug?: Maybe<DjangoDebug>;
  country?: Maybe<CountryTypeConnection>;
  getAllClinicsVideosByAdmin?: Maybe<ClinicTutorialVideosTypeConnection>;
  getAllHost?: Maybe<HostInfoTypeConnection>;
  getAllStaff?: Maybe<StaffTypeConnection>;
  getAllStaffAvailabilityByDate?: Maybe<Array<Maybe<StaffAvailabiltyWithMeetRequestsType>>>;
  getAllStaffInSuperadmin?: Maybe<StaffTypeConnection>;
  getAllStudentsVideosByClinic?: Maybe<StudentsTutorialVideosTypeConnection>;
  getAllZoomMeetings?: Maybe<ZoomLinkDetailsTypeConnection>;
  getAvailableBcbaAccordingToSlots?: Maybe<Array<Maybe<AvailableStaffWeekdaysTimeSlotType>>>;
  getAvailableStaffTimeSlots?: Maybe<StaffAvailableSlotsWithDateType>;
  getChatRoomMessages?: Maybe<MessageTypeConnection>;
  getChatRoomUsers?: Maybe<ChatRoomUsersTypeConnection>;
  getChatRooms?: Maybe<ChatRoomTypeConnection>;
  getClinicDashboardData?: Maybe<ClinicDashboardType>;
  getClinicLearnerCount?: Maybe<LearnerClinicStatsType>;
  getClinicTutorialVideos?: Maybe<ClinicTutorialVideosTypeConnection>;
  getClinicVideoByTutorialId?: Maybe<ClinicTutorialVideosType>;
  getClinicVideosHistory?: Maybe<ClinicTutorialVidesHistoryTypeConnection>;
  getClinicVideosInHierarchy?: Maybe<Array<Maybe<ClinicVideosInHierarchyModuleType>>>;
  getGeoGraphDataByClinic?: Maybe<VideoDataForGeoGraphType>;
  getInstantMeetByClinic?: Maybe<InstantZoomMeetTypeConnection>;
  getInstantZoomCallById?: Maybe<InstantZoomMeetType>;
  getInstantZoomCalls?: Maybe<InstantZoomMeetTypeConnection>;
  getLanguages?: Maybe<LanguagesTypeConnection>;
  getLearnerAssessmentResponses?: Maybe<Array<Maybe<LearnerStrugglingQuestionResponsesType>>>;
  getLearnerAssessments?: Maybe<Array<Maybe<LearnerAssessmentsType>>>;
  getLearnerAssessmentsByClinic?: Maybe<LearnerAssessmentsTypeConnection>;
  getLearnerVideoDashboard?: Maybe<StudentVideoDashboardType>;
  getLearnerVideosHistory?: Maybe<LearnerTutorialVidesHistoryTypeConnection>;
  getLearnerVideosInHierarchy?: Maybe<Array<Maybe<LearnerVideosInHierarchyModuleType>>>;
  getLearnerVideosPlayedOrCompleted?: Maybe<StudentVideoPlayedOrCompletedType>;
  getLearnerWatchTime?: Maybe<LearnerWatchTimeTypeConnection>;
  getLearnersVideosReport?: Maybe<LearnersVideosProgressReportType>;
  getManualInstantMeet?: Maybe<InstantZoomMeetManualTypeConnection>;
  getManualInstantMeetByClinic?: Maybe<InstantZoomMeetManualTypeConnection>;
  getNotifications?: Maybe<NotificationsTypeConnection>;
  getOptions?: Maybe<StrugglingIssuesOptionsTypeConnection>;
  getPersonalizedQuestions?: Maybe<StrugglingIssuesQuestionsWithOptionsTypeConnection>;
  getRequestMeetById?: Maybe<MeetRequestsType>;
  getRequestMeetComments?: Maybe<MeetRequestsCommentsTypeConnection>;
  getRequestMeets?: Maybe<MeetRequestsTypeConnection>;
  getRequestMeetsByClinic?: Maybe<MeetRequestsTypeConnection>;
  getRequestMeetsBySuperadmin?: Maybe<MeetRequestsTypeConnection>;
  getRoomById?: Maybe<ChatRoomType>;
  getRoomWithUnreadMsgCount?: Maybe<Array<Maybe<ChatRoomWithUnreadCountType>>>;
  getStaffById?: Maybe<StaffType>;
  getStaffLearners?: Maybe<Array<Maybe<StudentsType>>>;
  getStrugglingIssueQuestions?: Maybe<StrugglingIssuesQuestionsWithOptionsTypeConnection>;
  getStudentVideoByTutorialId?: Maybe<StudentsTutorialVideosType>;
  getStudentsTutorialVideos?: Maybe<StudentsTutorialVideosTypeConnection>;
  getSuperadminDashboardData?: Maybe<SuperadminDashboardType>;
  getTutorialVideos?: Maybe<TutorialVideosTypeConnection>;
  getVideoCommentReply?: Maybe<CommentsReplyTypeConnection>;
  getVideoCommentReplyBySuperuser?: Maybe<CommentsReplyTypeConnection>;
  getVideoComments?: Maybe<VideoCommentsTypeConnection>;
  getVideoCommentsBySuperuser?: Maybe<VideoCommentsTypeConnection>;
  getVideoDataForGeoGraph?: Maybe<VideoDataForGeoGraphType>;
  getVideoLikeDislike?: Maybe<VideosLikeDislikeTypeConnection>;
  getVideoLikeDislikeBySuperuser?: Maybe<VideosLikeDislikeTypeConnection>;
  getVideoRatings?: Maybe<VideosRatingTypeConnection>;
  getVideoRatingsBySuperuser?: Maybe<VideosRatingTypeConnection>;
  getVideoToAssignAccordingToResponse?: Maybe<VideoAssignDataAccoringToResponsesTypeConnection>;
  getVideoWatchTimeFetchBySuperadmin?: Maybe<Scalars['JSONString']['output']>;
  getVideoWatchTimeInClinic?: Maybe<Scalars['JSONString']['output']>;
  getVideoWatchTimeOfLearner?: Maybe<Scalars['JSONString']['output']>;
  getVideos?: Maybe<VideosTypeConnection>;
  getVideosModules?: Maybe<TutorialVideosModuleTypeConnection>;
  getVideosSubModules?: Maybe<TutorialVideosSubModuleTypeConnection>;
  getZoomMeetingById?: Maybe<ZoomLinkDetailsType>;
  getZoomMeetings?: Maybe<Scalars['JSONString']['output']>;
  schoolDetails?: Maybe<SchoolType>;
  schools?: Maybe<SchoolTypeConnection>;
  student?: Maybe<StudentsType>;
  students?: Maybe<StudentsTypeConnection>;
  therapistGraphOfUnits?: Maybe<Scalars['JSONString']['output']>;
  userChats?: Maybe<ChatRoomTypeConnection>;
  userDetails?: Maybe<UserType>;
};


export type QueryCountryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllClinicsVideosByAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  clinicId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tutorialVideos?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetAllHostArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetAllStaffArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstname_Icontains?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastname_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllStaffAvailabilityByDateArgs = {
  staffId?: InputMaybe<Scalars['ID']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryGetAllStaffInSuperadminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstname_Icontains?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastname_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllStudentsVideosByClinicArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  availableAllTime?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  learnerId?: InputMaybe<Scalars['ID']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TutorialVideosStudentsTutorialVideosStatusChoices>;
  tutorialVideos?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userWatchTime?: InputMaybe<Scalars['BigInt']['input']>;
  videoCompletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videoCompletedCount?: InputMaybe<Scalars['Int']['input']>;
  videoOrder?: InputMaybe<Scalars['Int']['input']>;
  videoPlayCount?: InputMaybe<Scalars['Int']['input']>;
  videoPlayedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videoWatchedTime?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetAllZoomMeetingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  bcbaHost?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fromDate?: InputMaybe<Scalars['Date']['input']>;
  hostId?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  joinUrl?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  linkDetails?: InputMaybe<Scalars['String']['input']>;
  manualHost?: InputMaybe<Scalars['ID']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  recordingUrl?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<CommunityZoomLinkDetailsStatusChoices>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  toDate?: InputMaybe<Scalars['Date']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  zoomMeetType?: InputMaybe<CommunityZoomLinkDetailsZoomMeetTypeChoices>;
};


export type QueryGetAvailableStaffTimeSlotsArgs = {
  learnerId: Scalars['ID']['input'];
  slotDate: Scalars['Date']['input'];
  staffId: Scalars['ID']['input'];
};


export type QueryGetChatRoomMessagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  room?: InputMaybe<Scalars['ID']['input']>;
  roomId: Scalars['ID']['input'];
  sender?: InputMaybe<Scalars['ID']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  viewedBy?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetChatRoomUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  chatRoom?: InputMaybe<Scalars['ID']['input']>;
  chatUser?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetChatRoomsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  roomType?: InputMaybe<ChatChatRoomRoomTypeChoices>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetClinicLearnerCountArgs = {
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  firstname_Icontains?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  schoolName_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetClinicTutorialVideosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tutorialVideos?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetClinicVideoByTutorialIdArgs = {
  tutorialVideoId: Scalars['ID']['input'];
};


export type QueryGetClinicVideosHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  tutorialVideo?: InputMaybe<Scalars['ID']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetGeoGraphDataByClinicArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  tutorialVideo: Scalars['ID']['input'];
};


export type QueryGetInstantMeetByClinicArgs = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  attende?: InputMaybe<Scalars['ID']['input']>;
  attendeJoined?: InputMaybe<Scalars['DateTime']['input']>;
  attendeLeave?: InputMaybe<Scalars['DateTime']['input']>;
  attendeStatus?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cptCode?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  host?: InputMaybe<Scalars['ID']['input']>;
  hostJoined?: InputMaybe<Scalars['DateTime']['input']>;
  hostLeave?: InputMaybe<Scalars['DateTime']['input']>;
  hostStatus?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  meetEnded?: InputMaybe<Scalars['DateTime']['input']>;
  meetJoined?: InputMaybe<Scalars['DateTime']['input']>;
  meetingDetails?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingStatus?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  placeOfService?: InputMaybe<Scalars['ID']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetInstantZoomCallByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetInstantZoomCallsArgs = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  attende?: InputMaybe<Scalars['ID']['input']>;
  attendeJoined?: InputMaybe<Scalars['DateTime']['input']>;
  attendeLeave?: InputMaybe<Scalars['DateTime']['input']>;
  attendeStatus?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cptCode?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  host?: InputMaybe<Scalars['ID']['input']>;
  hostJoined?: InputMaybe<Scalars['DateTime']['input']>;
  hostLeave?: InputMaybe<Scalars['DateTime']['input']>;
  hostStatus?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  meetEnded?: InputMaybe<Scalars['DateTime']['input']>;
  meetJoined?: InputMaybe<Scalars['DateTime']['input']>;
  meetingDetails?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingStatus?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  placeOfService?: InputMaybe<Scalars['ID']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetLanguagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetLearnerAssessmentResponsesArgs = {
  assessmentId: Scalars['ID']['input'];
};


export type QueryGetLearnerAssessmentsArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastAssessments?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryGetLearnerAssessmentsByClinicArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<AssessmentsLearnerAssessmentsStatusChoices>;
};


export type QueryGetLearnerVideosHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  tutorialVideo?: InputMaybe<Scalars['ID']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetLearnerVideosInHierarchyArgs = {
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetLearnerVideosPlayedOrCompletedArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryGetLearnerWatchTimeArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TutorialVideosLearnerWatchTimeStatusChoices>;
  tutorialVideo?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userEndWatching?: InputMaybe<Scalars['DateTime']['input']>;
  userStartWatching?: InputMaybe<Scalars['DateTime']['input']>;
  videoEndPoint?: InputMaybe<Scalars['String']['input']>;
  videoStartPoint?: InputMaybe<Scalars['String']['input']>;
  watchBy?: InputMaybe<Scalars['ID']['input']>;
  watchTime?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetLearnersVideosReportArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryGetManualInstantMeetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  attende_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  host_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetManualInstantMeetByClinicArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  attende_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  host_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetNotificationsArgs = {
  actorContentType?: InputMaybe<Scalars['ID']['input']>;
  actorObjectId?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isReminder?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  notifyType?: InputMaybe<ChatNotificationsNotifyTypeChoices>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  recipient?: InputMaybe<Scalars['ID']['input']>;
  sender?: InputMaybe<Scalars['ID']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetOptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  emailBcba?: InputMaybe<Scalars['Boolean']['input']>;
  emailContent?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  option?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetPersonalizedQuestionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  allowFreeText?: InputMaybe<Scalars['Boolean']['input']>;
  assessmentId: Scalars['ID']['input'];
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forResponse?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  multiSelectOptions?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Scalars['ID']['input']>;
  parentQuestion?: InputMaybe<Scalars['ID']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  questionOrder?: InputMaybe<Scalars['Int']['input']>;
  questionType?: InputMaybe<AssessmentsStrugglingIssuesQuestionsWithOptionsQuestionTypeChoices>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetRequestMeetByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetRequestMeetCommentsArgs = {
  addedBy?: InputMaybe<Scalars['ID']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  meetRequest?: InputMaybe<Scalars['ID']['input']>;
  meetRequestId: Scalars['ID']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetRequestMeetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  calenderEventId?: InputMaybe<Scalars['String']['input']>;
  cptCode?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  localEndTime?: InputMaybe<Scalars['DateTime']['input']>;
  localStartTime?: InputMaybe<Scalars['DateTime']['input']>;
  meetLink?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  placeOfService?: InputMaybe<Scalars['ID']['input']>;
  staff?: InputMaybe<Scalars['ID']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  zoomResponse?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRequestMeetsByClinicArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  calenderEventId?: InputMaybe<Scalars['String']['input']>;
  cptCode?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  localEndTime?: InputMaybe<Scalars['DateTime']['input']>;
  localStartTime?: InputMaybe<Scalars['DateTime']['input']>;
  meetLink?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  placeOfService?: InputMaybe<Scalars['ID']['input']>;
  staff?: InputMaybe<Scalars['ID']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  zoomResponse?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRequestMeetsBySuperadminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  calenderEventId?: InputMaybe<Scalars['String']['input']>;
  cptCode?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  localEndTime?: InputMaybe<Scalars['DateTime']['input']>;
  localStartTime?: InputMaybe<Scalars['DateTime']['input']>;
  meetLink?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  placeOfService?: InputMaybe<Scalars['ID']['input']>;
  staff?: InputMaybe<Scalars['ID']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  zoomResponse?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRoomByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetStaffByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetStaffLearnersArgs = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  staffId: Scalars['ID']['input'];
};


export type QueryGetStrugglingIssueQuestionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  allowFreeText?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forResponse?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  multiSelectOptions?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Scalars['ID']['input']>;
  parentQuestion?: InputMaybe<Scalars['ID']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  questionOrder?: InputMaybe<Scalars['Int']['input']>;
  questionType?: InputMaybe<AssessmentsStrugglingIssuesQuestionsWithOptionsQuestionTypeChoices>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetStudentVideoByTutorialIdArgs = {
  tutorialVideoId: Scalars['ID']['input'];
};


export type QueryGetStudentsTutorialVideosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  availableAllTime?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TutorialVideosStudentsTutorialVideosStatusChoices>;
  tutorialVideos?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userWatchTime?: InputMaybe<Scalars['BigInt']['input']>;
  videoCompletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videoCompletedCount?: InputMaybe<Scalars['Int']['input']>;
  videoOrder?: InputMaybe<Scalars['Int']['input']>;
  videoPlayCount?: InputMaybe<Scalars['Int']['input']>;
  videoPlayedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videoWatchedTime?: InputMaybe<Scalars['BigInt']['input']>;
};


export type QueryGetTutorialVideosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  module?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  subModule?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetVideoCommentReplyArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  commentId: Scalars['ID']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  parentCommentReply?: InputMaybe<Scalars['ID']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetVideoCommentReplyBySuperuserArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  commentId: Scalars['ID']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  parentCommentReply?: InputMaybe<Scalars['ID']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetVideoCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  reply?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
  videoId: Scalars['ID']['input'];
};


export type QueryGetVideoCommentsBySuperuserArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  reply?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
  videoId: Scalars['ID']['input'];
};


export type QueryGetVideoDataForGeoGraphArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  tutorialVideo: Scalars['ID']['input'];
};


export type QueryGetVideoLikeDislikeArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dislike?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  like?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
  videoId: Scalars['ID']['input'];
};


export type QueryGetVideoLikeDislikeBySuperuserArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dislike?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  like?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
  videoId: Scalars['ID']['input'];
};


export type QueryGetVideoRatingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
  videoId: Scalars['ID']['input'];
};


export type QueryGetVideoRatingsBySuperuserArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
  videoId: Scalars['ID']['input'];
};


export type QueryGetVideoToAssignAccordingToResponseArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  option?: InputMaybe<Scalars['ID']['input']>;
  question?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videosToAssign?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QueryGetVideoWatchTimeFetchBySuperadminArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryGetVideoWatchTimeInClinicArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryGetVideoWatchTimeOfLearnerArgs = {
  endDate: Scalars['Date']['input'];
  learnerId: Scalars['ID']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryGetVideosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videoDocFile?: InputMaybe<Scalars['String']['input']>;
  videoName?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetVideosModulesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  moduleOrder?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetVideosSubModulesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  module?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryGetZoomMeetingByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetZoomMeetingsArgs = {
  fromDate?: InputMaybe<Scalars['Date']['input']>;
  meetingType?: InputMaybe<Scalars['String']['input']>;
  pageNumber?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  toDate?: InputMaybe<Scalars['Date']['input']>;
};


export type QuerySchoolsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  schoolName_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStudentArgs = {
  studentId: Scalars['ID']['input'];
};


export type QueryStudentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['Date']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['Date']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstname_Icontains?: InputMaybe<Scalars['String']['input']>;
  firstname_Istartswith?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastname_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  parent?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTherapistGraphOfUnitsArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
  therapistId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUserChatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  roomType?: InputMaybe<ChatChatRoomRoomTypeChoices>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RefreshInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type RefreshPayload = {
  __typename?: 'RefreshPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type RegisterUserOnFirebaseMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  deviceId: Scalars['String']['input'];
  deviceType: Scalars['String']['input'];
  registrationToken: Scalars['String']['input'];
};

export type RegisterUserOnFirebaseMutationPayload = {
  __typename?: 'RegisterUserOnFirebaseMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type RemoveCommentOrReplyMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commentId?: InputMaybe<Scalars['ID']['input']>;
  replyCommentId?: InputMaybe<Scalars['ID']['input']>;
};

export type RemoveCommentOrReplyMutationPayload = {
  __typename?: 'RemoveCommentOrReplyMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type RemoveFirebaseTokenOnLogoutInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  deviceId: Scalars['String']['input'];
  deviceType: Scalars['String']['input'];
};

export type RemoveFirebaseTokenOnLogoutPayload = {
  __typename?: 'RemoveFirebaseTokenOnLogoutPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type SchoolDetailsType = Node & {
  __typename?: 'SchoolDetailsType';
  clinic: SchoolType;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  isParent: Scalars['Boolean']['output'];
  isStaff: Scalars['Boolean']['output'];
  user: UserType;
};

export type SchoolDetailsTypeConnection = {
  __typename?: 'SchoolDetailsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SchoolDetailsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SchoolDetailsType` and its cursor. */
export type SchoolDetailsTypeEdge = {
  __typename?: 'SchoolDetailsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SchoolDetailsType>;
};

/** An enumeration. */
export enum SchoolStaffGenderChoices {
  /** female */
  Female = 'FEMALE',
  /** male */
  Male = 'MALE'
}

/** An enumeration. */
export enum SchoolStaffUserRoleChoices {
  /** bcba */
  Bcba = 'BCBA'
}

/** An enumeration. */
export enum SchoolStaffWeekdaysWeekdayChoices {
  /** friday */
  Friday = 'FRIDAY',
  /** monday */
  Monday = 'MONDAY',
  /** saturday */
  Saturday = 'SATURDAY',
  /** sunday */
  Sunday = 'SUNDAY',
  /** thursday */
  Thursday = 'THURSDAY',
  /** tuesday */
  Tuesday = 'TUESDAY',
  /** wednesday */
  Wednesday = 'WEDNESDAY'
}

export type SchoolType = Node & {
  __typename?: 'SchoolType';
  activeLearnerCount?: Maybe<Scalars['Int']['output']>;
  activeStaffCount?: Maybe<Scalars['Int']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  clinictutorialvideosSet: ClinicTutorialVideosTypeConnection;
  clinictutorialvideshistorySet: ClinicTutorialVidesHistoryTypeConnection;
  contactNo?: Maybe<Scalars['String']['output']>;
  country: CountryType;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  hostinfoSet: HostInfoTypeConnection;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  inactiveLearnerCount?: Maybe<Scalars['Int']['output']>;
  inactiveStaffCount?: Maybe<Scalars['Int']['output']>;
  isActive: Scalars['Boolean']['output'];
  isDefault: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  learnerwatchtimeSet: LearnerWatchTimeTypeConnection;
  logo?: Maybe<Scalars['String']['output']>;
  noLearner: Scalars['Int']['output'];
  schoolName: Scalars['String']['output'];
  schooldetailsSet: SchoolDetailsTypeConnection;
  staffSet: StaffTypeConnection;
  studentsSet: StudentsTypeConnection;
  tutorialvideoviewsSet: TutorialVideoViewsTypeConnection;
  updatedAt: Scalars['DateTime']['output'];
  user: UserType;
  videocommentsSet: VideoCommentsTypeConnection;
  videoslikedislikeSet: VideosLikeDislikeTypeConnection;
  videosratingSet: VideosRatingTypeConnection;
  zoomlinkdetailsSet: ZoomLinkDetailsTypeConnection;
};


export type SchoolTypeClinictutorialvideosSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tutorialVideos?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type SchoolTypeClinictutorialvideshistorySetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tutorialVideo?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};


export type SchoolTypeHostinfoSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type SchoolTypeLearnerwatchtimeSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TutorialVideosLearnerWatchTimeStatusChoices>;
  tutorialVideo?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userEndWatching?: InputMaybe<Scalars['DateTime']['input']>;
  userStartWatching?: InputMaybe<Scalars['DateTime']['input']>;
  videoEndPoint?: InputMaybe<Scalars['String']['input']>;
  videoStartPoint?: InputMaybe<Scalars['String']['input']>;
  watchBy?: InputMaybe<Scalars['ID']['input']>;
  watchTime?: InputMaybe<Scalars['BigInt']['input']>;
};


export type SchoolTypeSchooldetailsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  isParent?: InputMaybe<Scalars['Boolean']['input']>;
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};


export type SchoolTypeStaffSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstname_Icontains?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastname_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type SchoolTypeStudentsSetArgs = {
  admissionDate?: InputMaybe<Scalars['Date']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  authStaff?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  caseManager?: InputMaybe<Scalars['ID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  country?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentAddress?: InputMaybe<Scalars['String']['input']>;
  dateOfDiagnosis?: InputMaybe<Scalars['Date']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fatherName?: InputMaybe<Scalars['String']['input']>;
  fatherPhone?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  guardionMobile?: InputMaybe<Scalars['String']['input']>;
  guardionName?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  internalNo?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  mobileno?: InputMaybe<Scalars['String']['input']>;
  motherName?: InputMaybe<Scalars['String']['input']>;
  motherPhone?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentFirstname?: InputMaybe<Scalars['String']['input']>;
  parentLastname?: InputMaybe<Scalars['String']['input']>;
  parentMobile?: InputMaybe<Scalars['String']['input']>;
  parentNickname?: InputMaybe<Scalars['String']['input']>;
  pronounceChild?: InputMaybe<Scalars['String']['input']>;
  ssnAadhar?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};


export type SchoolTypeTutorialvideoviewsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};


export type SchoolTypeVideocommentsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  reply?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};


export type SchoolTypeVideoslikedislikeSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dislike?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  like?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};


export type SchoolTypeVideosratingSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};


export type SchoolTypeZoomlinkdetailsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  bcbaHost?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hostId?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  joinUrl?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  linkDetails?: InputMaybe<Scalars['String']['input']>;
  manualHost?: InputMaybe<Scalars['ID']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  recordingUrl?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<CommunityZoomLinkDetailsStatusChoices>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  zoomMeetType?: InputMaybe<CommunityZoomLinkDetailsZoomMeetTypeChoices>;
};

export type SchoolTypeConnection = {
  __typename?: 'SchoolTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SchoolTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `SchoolType` and its cursor. */
export type SchoolTypeEdge = {
  __typename?: 'SchoolTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SchoolType>;
};

export type SendEmailToBcbaMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  emailContext: Scalars['String']['input'];
  staffId: Scalars['ID']['input'];
  subject: Scalars['String']['input'];
};

export type SendEmailToBcbaMutationPayload = {
  __typename?: 'SendEmailToBCBAMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type SendOtpForAccountDeactivationMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userUid: Scalars['String']['input'];
};

export type SendOtpForAccountDeactivationMutationPayload = {
  __typename?: 'SendOtpForAccountDeactivationMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type SendOtpMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  user: Scalars['ID']['input'];
};

export type SendOtpMutationPayload = {
  __typename?: 'SendOtpMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type SignUpInput = {
  country: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  noLearner: Scalars['Int']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type StaffAvailabiltyWithMeetRequestsType = {
  __typename?: 'StaffAvailabiltyWithMeetRequestsType';
  meetRequests?: Maybe<Array<Maybe<MeetRequestsType>>>;
  staff?: Maybe<StaffType>;
  staffWeekday?: Maybe<StaffWeekdaysType>;
};

export type StaffAvailableSlotsWithDateType = {
  __typename?: 'StaffAvailableSlotsWithDateType';
  data?: Maybe<Array<Maybe<StaffAvailableTimeSlotsType>>>;
  message?: Maybe<Scalars['String']['output']>;
  staff?: Maybe<StaffType>;
  startDate?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type StaffAvailableTimeSlotsType = {
  __typename?: 'StaffAvailableTimeSlotsType';
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  timeSlot?: Maybe<Scalars['String']['output']>;
};

export type StaffShiftsInput = {
  isAvailable: Scalars['Boolean']['input'];
  timeSlots: Array<InputMaybe<TimeslotsInput>>;
  weekday: Scalars['String']['input'];
};

export type StaffTimeSlotsType = Node & {
  __typename?: 'StaffTimeSlotsType';
  endTime: Scalars['Time']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  staffweekdaysSet: StaffWeekdaysTypeConnection;
  startTime: Scalars['Time']['output'];
};


export type StaffTimeSlotsTypeStaffweekdaysSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  staff?: InputMaybe<Scalars['ID']['input']>;
  timeSlots?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  weekday?: InputMaybe<SchoolStaffWeekdaysWeekdayChoices>;
};

export type StaffTimeSlotsTypeConnection = {
  __typename?: 'StaffTimeSlotsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StaffTimeSlotsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `StaffTimeSlotsType` and its cursor. */
export type StaffTimeSlotsTypeEdge = {
  __typename?: 'StaffTimeSlotsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StaffTimeSlotsType>;
};

export type StaffType = Node & {
  __typename?: 'StaffType';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  clinic: SchoolType;
  contactNo?: Maybe<Scalars['String']['output']>;
  country?: Maybe<CountryType>;
  createdAt: Scalars['DateTime']['output'];
  designation?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['Date']['output']>;
  education?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  experience?: Maybe<Scalars['String']['output']>;
  firstname: Scalars['String']['output'];
  gender?: Maybe<SchoolStaffGenderChoices>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  isDefaultBcba: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  languages: LanguagesTypeConnection;
  lastname?: Maybe<Scalars['String']['output']>;
  meetLink?: Maybe<Scalars['String']['output']>;
  meetrequestsSet: MeetRequestsTypeConnection;
  secondaryBcba: StudentsTypeConnection;
  staffweekdaysSet: StaffWeekdaysTypeConnection;
  state?: Maybe<Scalars['String']['output']>;
  studentsSet: StudentsTypeConnection;
  updatedAt: Scalars['DateTime']['output'];
  user: UserType;
  userRole: SchoolStaffUserRoleChoices;
  zoomlinkdetailsSet: ZoomLinkDetailsTypeConnection;
};


export type StaffTypeLanguagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type StaffTypeMeetrequestsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  calenderEventId?: InputMaybe<Scalars['String']['input']>;
  cptCode?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  localEndTime?: InputMaybe<Scalars['DateTime']['input']>;
  localStartTime?: InputMaybe<Scalars['DateTime']['input']>;
  meetLink?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  placeOfService?: InputMaybe<Scalars['ID']['input']>;
  staff?: InputMaybe<Scalars['ID']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  zoomResponse?: InputMaybe<Scalars['String']['input']>;
};


export type StaffTypeSecondaryBcbaArgs = {
  admissionDate?: InputMaybe<Scalars['Date']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  authStaff?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  caseManager?: InputMaybe<Scalars['ID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  country?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentAddress?: InputMaybe<Scalars['String']['input']>;
  dateOfDiagnosis?: InputMaybe<Scalars['Date']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fatherName?: InputMaybe<Scalars['String']['input']>;
  fatherPhone?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  guardionMobile?: InputMaybe<Scalars['String']['input']>;
  guardionName?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  internalNo?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  mobileno?: InputMaybe<Scalars['String']['input']>;
  motherName?: InputMaybe<Scalars['String']['input']>;
  motherPhone?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentFirstname?: InputMaybe<Scalars['String']['input']>;
  parentLastname?: InputMaybe<Scalars['String']['input']>;
  parentMobile?: InputMaybe<Scalars['String']['input']>;
  parentNickname?: InputMaybe<Scalars['String']['input']>;
  pronounceChild?: InputMaybe<Scalars['String']['input']>;
  ssnAadhar?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};


export type StaffTypeStaffweekdaysSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  staff?: InputMaybe<Scalars['ID']['input']>;
  timeSlots?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  weekday?: InputMaybe<SchoolStaffWeekdaysWeekdayChoices>;
};


export type StaffTypeStudentsSetArgs = {
  admissionDate?: InputMaybe<Scalars['Date']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  authStaff?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  caseManager?: InputMaybe<Scalars['ID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  country?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  currentAddress?: InputMaybe<Scalars['String']['input']>;
  dateOfDiagnosis?: InputMaybe<Scalars['Date']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fatherName?: InputMaybe<Scalars['String']['input']>;
  fatherPhone?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  guardionMobile?: InputMaybe<Scalars['String']['input']>;
  guardionName?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  internalNo?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  mobileno?: InputMaybe<Scalars['String']['input']>;
  motherName?: InputMaybe<Scalars['String']['input']>;
  motherPhone?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  parentFirstname?: InputMaybe<Scalars['String']['input']>;
  parentLastname?: InputMaybe<Scalars['String']['input']>;
  parentMobile?: InputMaybe<Scalars['String']['input']>;
  parentNickname?: InputMaybe<Scalars['String']['input']>;
  pronounceChild?: InputMaybe<Scalars['String']['input']>;
  ssnAadhar?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};


export type StaffTypeZoomlinkdetailsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  bcbaHost?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hostId?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  joinUrl?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  linkDetails?: InputMaybe<Scalars['String']['input']>;
  manualHost?: InputMaybe<Scalars['ID']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingType?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  recordingUrl?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<CommunityZoomLinkDetailsStatusChoices>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
  zoomMeetType?: InputMaybe<CommunityZoomLinkDetailsZoomMeetTypeChoices>;
};

export type StaffTypeConnection = {
  __typename?: 'StaffTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StaffTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `StaffType` and its cursor. */
export type StaffTypeEdge = {
  __typename?: 'StaffTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StaffType>;
};

export type StaffWeekdaysType = Node & {
  __typename?: 'StaffWeekdaysType';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isAvailable: Scalars['Boolean']['output'];
  staff: StaffType;
  timeSlots: StaffTimeSlotsTypeConnection;
  updatedAt: Scalars['DateTime']['output'];
  weekday: SchoolStaffWeekdaysWeekdayChoices;
};


export type StaffWeekdaysTypeTimeSlotsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['Time']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['Time']['input']>;
};

export type StaffWeekdaysTypeConnection = {
  __typename?: 'StaffWeekdaysTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StaffWeekdaysTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `StaffWeekdaysType` and its cursor. */
export type StaffWeekdaysTypeEdge = {
  __typename?: 'StaffWeekdaysTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StaffWeekdaysType>;
};

export type StartLearnerAssessmentMutationInput = {
  age: Scalars['Date']['input'];
  assessmentDate?: InputMaybe<Scalars['Date']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parentName?: InputMaybe<Scalars['String']['input']>;
  parentNickname?: InputMaybe<Scalars['String']['input']>;
  pronounceChild?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type StartLearnerAssessmentMutationPayload = {
  __typename?: 'StartLearnerAssessmentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  learnerAssessment?: Maybe<LearnerAssessmentsType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type StrugglingIssuesOptionsType = Node & {
  __typename?: 'StrugglingIssuesOptionsType';
  ForResponse: StrugglingIssuesQuestionsWithOptionsTypeConnection;
  createdAt: Scalars['DateTime']['output'];
  emailBcba: Scalars['Boolean']['output'];
  emailContent?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  learnerstrugglingquestionresponsesSet: LearnerStrugglingQuestionResponsesTypeConnection;
  mutipleSelectedOptions: LearnerStrugglingQuestionResponsesTypeConnection;
  option: Scalars['String']['output'];
  strugglingissuesquestionswithoptionsSet: StrugglingIssuesQuestionsWithOptionsTypeConnection;
  updatedAt: Scalars['DateTime']['output'];
  videoassigndataaccoringtoresponsesSet: VideoAssignDataAccoringToResponsesTypeConnection;
};


export type StrugglingIssuesOptionsTypeForResponseArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  allowFreeText?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forResponse?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  multiSelectOptions?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Scalars['ID']['input']>;
  parentQuestion?: InputMaybe<Scalars['ID']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  questionOrder?: InputMaybe<Scalars['Int']['input']>;
  questionType?: InputMaybe<AssessmentsStrugglingIssuesQuestionsWithOptionsQuestionTypeChoices>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type StrugglingIssuesOptionsTypeLearnerstrugglingquestionresponsesSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learnerAssessment?: InputMaybe<Scalars['ID']['input']>;
  multipleOptions?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  option?: InputMaybe<Scalars['ID']['input']>;
  otherIssue?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type StrugglingIssuesOptionsTypeMutipleSelectedOptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learnerAssessment?: InputMaybe<Scalars['ID']['input']>;
  multipleOptions?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  option?: InputMaybe<Scalars['ID']['input']>;
  otherIssue?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type StrugglingIssuesOptionsTypeStrugglingissuesquestionswithoptionsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  allowFreeText?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forResponse?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  multiSelectOptions?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Scalars['ID']['input']>;
  parentQuestion?: InputMaybe<Scalars['ID']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  questionOrder?: InputMaybe<Scalars['Int']['input']>;
  questionType?: InputMaybe<AssessmentsStrugglingIssuesQuestionsWithOptionsQuestionTypeChoices>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type StrugglingIssuesOptionsTypeVideoassigndataaccoringtoresponsesSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  option?: InputMaybe<Scalars['ID']['input']>;
  question?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videosToAssign?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type StrugglingIssuesOptionsTypeConnection = {
  __typename?: 'StrugglingIssuesOptionsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StrugglingIssuesOptionsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `StrugglingIssuesOptionsType` and its cursor. */
export type StrugglingIssuesOptionsTypeEdge = {
  __typename?: 'StrugglingIssuesOptionsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StrugglingIssuesOptionsType>;
};

export type StrugglingIssuesQuestionsWithOptionsType = Node & {
  __typename?: 'StrugglingIssuesQuestionsWithOptionsType';
  allowFreeText: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  forResponse?: Maybe<StrugglingIssuesOptionsType>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  learnerstrugglingquestionresponsesSet: LearnerStrugglingQuestionResponsesTypeConnection;
  multiSelectOptions: Scalars['Boolean']['output'];
  options: StrugglingIssuesOptionsTypeConnection;
  parentQuestion?: Maybe<StrugglingIssuesQuestionsWithOptionsType>;
  question: Scalars['String']['output'];
  questionOrder: Scalars['Int']['output'];
  questionType: AssessmentsStrugglingIssuesQuestionsWithOptionsQuestionTypeChoices;
  strugglingissuesquestionswithoptionsSet: StrugglingIssuesQuestionsWithOptionsTypeConnection;
  updatedAt: Scalars['DateTime']['output'];
  videoassigndataaccoringtoresponsesSet: VideoAssignDataAccoringToResponsesTypeConnection;
};


export type StrugglingIssuesQuestionsWithOptionsTypeLearnerstrugglingquestionresponsesSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learnerAssessment?: InputMaybe<Scalars['ID']['input']>;
  multipleOptions?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  option?: InputMaybe<Scalars['ID']['input']>;
  otherIssue?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type StrugglingIssuesQuestionsWithOptionsTypeOptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  emailBcba?: InputMaybe<Scalars['Boolean']['input']>;
  emailContent?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  option?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type StrugglingIssuesQuestionsWithOptionsTypeStrugglingissuesquestionswithoptionsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  allowFreeText?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forResponse?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  multiSelectOptions?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Scalars['ID']['input']>;
  parentQuestion?: InputMaybe<Scalars['ID']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  questionOrder?: InputMaybe<Scalars['Int']['input']>;
  questionType?: InputMaybe<AssessmentsStrugglingIssuesQuestionsWithOptionsQuestionTypeChoices>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type StrugglingIssuesQuestionsWithOptionsTypeVideoassigndataaccoringtoresponsesSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  option?: InputMaybe<Scalars['ID']['input']>;
  question?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videosToAssign?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type StrugglingIssuesQuestionsWithOptionsTypeConnection = {
  __typename?: 'StrugglingIssuesQuestionsWithOptionsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StrugglingIssuesQuestionsWithOptionsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `StrugglingIssuesQuestionsWithOptionsType` and its cursor. */
export type StrugglingIssuesQuestionsWithOptionsTypeEdge = {
  __typename?: 'StrugglingIssuesQuestionsWithOptionsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StrugglingIssuesQuestionsWithOptionsType>;
};

export type StudentInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  authStaff?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  caseManager?: InputMaybe<Scalars['ID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['ID']['input']>;
  dateOfDiagnosis?: InputMaybe<Scalars['Date']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fatherName?: InputMaybe<Scalars['String']['input']>;
  fatherPhone?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  guardionMobile?: InputMaybe<Scalars['String']['input']>;
  guardionName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  mobileno?: InputMaybe<Scalars['String']['input']>;
  motherName?: InputMaybe<Scalars['String']['input']>;
  motherPhone?: InputMaybe<Scalars['String']['input']>;
  parentFirstname?: InputMaybe<Scalars['String']['input']>;
  parentLastname?: InputMaybe<Scalars['String']['input']>;
  parentMobile?: InputMaybe<Scalars['String']['input']>;
  parentNickname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pronounceChild?: InputMaybe<Scalars['String']['input']>;
  ssnAadhar?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type StudentSignupInput = {
  country: Scalars['ID']['input'];
  dob: Scalars['Date']['input'];
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  gender?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  parentFirstname?: InputMaybe<Scalars['String']['input']>;
  parentLastname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pronounceChild?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type StudentSignupMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  studentData: StudentSignupInput;
};

export type StudentSignupMutationPayload = {
  __typename?: 'StudentSignupMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  student?: Maybe<StudentsType>;
};

export type StudentVideoDashboardType = {
  __typename?: 'StudentVideoDashboardType';
  completedVideos?: Maybe<Scalars['Int']['output']>;
  inprogressVideos?: Maybe<Scalars['Int']['output']>;
  pendingVideos?: Maybe<Scalars['Int']['output']>;
  totalAssignVideos?: Maybe<Scalars['Int']['output']>;
};

export type StudentVideoPlayedOrCompletedType = {
  __typename?: 'StudentVideoPlayedOrCompletedType';
  completedVideos?: Maybe<Scalars['Int']['output']>;
  playedVideos?: Maybe<Scalars['Int']['output']>;
};

export type StudentVideoTrackingType = Node & {
  __typename?: 'StudentVideoTrackingType';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  learnerVideo: StudentsTutorialVideosType;
  updatedAt: Scalars['DateTime']['output'];
  videoTracking?: Maybe<Scalars['String']['output']>;
};

export type StudentsTutorialVideosType = Node & {
  __typename?: 'StudentsTutorialVideosType';
  availableAllTime: Scalars['Boolean']['output'];
  averageRatingInClinic?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['String']['output']>;
  learner: StudentsType;
  learnerLikeDislike?: Maybe<VideosLikeDislikeType>;
  learnerRating?: Maybe<VideosRatingType>;
  longitude?: Maybe<Scalars['String']['output']>;
  status: TutorialVideosStudentsTutorialVideosStatusChoices;
  studentvideotracking?: Maybe<StudentVideoTrackingType>;
  totalDislikesInClinic?: Maybe<Scalars['Int']['output']>;
  totalLikesInClinic?: Maybe<Scalars['Int']['output']>;
  tutorialVideos: TutorialVideosType;
  updatedAt: Scalars['DateTime']['output'];
  /** Please Enter data in Seconds */
  userWatchTime?: Maybe<Scalars['BigInt']['output']>;
  videoCompletedAt?: Maybe<Scalars['DateTime']['output']>;
  videoCompletedCount: Scalars['Int']['output'];
  videoOrder: Scalars['Int']['output'];
  videoPlayCount: Scalars['Int']['output'];
  videoPlayedAt?: Maybe<Scalars['DateTime']['output']>;
  videoViewsInClinic?: Maybe<Scalars['Int']['output']>;
  /** Please Enter data in Seconds */
  videoWatchedTime?: Maybe<Scalars['BigInt']['output']>;
};

export type StudentsTutorialVideosTypeConnection = {
  __typename?: 'StudentsTutorialVideosTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StudentsTutorialVideosTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `StudentsTutorialVideosType` and its cursor. */
export type StudentsTutorialVideosTypeEdge = {
  __typename?: 'StudentsTutorialVideosTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StudentsTutorialVideosType>;
};

export type StudentsType = Node & {
  __typename?: 'StudentsType';
  admissionDate?: Maybe<Scalars['Date']['output']>;
  authStaff: StaffTypeConnection;
  caseManager?: Maybe<StaffType>;
  city?: Maybe<Scalars['String']['output']>;
  clientId?: Maybe<Scalars['String']['output']>;
  clinic: SchoolType;
  completedVideosCount?: Maybe<Scalars['Int']['output']>;
  country?: Maybe<CountryType>;
  createdAt: Scalars['DateTime']['output'];
  currentAddress?: Maybe<Scalars['String']['output']>;
  dateOfDiagnosis?: Maybe<Scalars['Date']['output']>;
  dob?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fatherName?: Maybe<Scalars['String']['output']>;
  fatherPhone?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  guardionMobile?: Maybe<Scalars['String']['output']>;
  guardionName?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  inprogressVideosCount?: Maybe<Scalars['Int']['output']>;
  internalNo: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  lastname?: Maybe<Scalars['String']['output']>;
  learnerassessmentsSet: LearnerAssessmentsTypeConnection;
  learnertutorialvideshistorySet: LearnerTutorialVidesHistoryTypeConnection;
  meetrequestsSet: MeetRequestsTypeConnection;
  mobileno?: Maybe<Scalars['String']['output']>;
  motherName?: Maybe<Scalars['String']['output']>;
  motherPhone?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<UserType>;
  parentFirstname?: Maybe<Scalars['String']['output']>;
  parentLastname?: Maybe<Scalars['String']['output']>;
  parentMobile?: Maybe<Scalars['String']['output']>;
  parentNickname?: Maybe<Scalars['String']['output']>;
  pendingVideosCount?: Maybe<Scalars['Int']['output']>;
  pronounceChild?: Maybe<Scalars['String']['output']>;
  ssnAadhar?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  studentstutorialvideosSet: StudentsTutorialVideosTypeConnection;
  updatedAt: Scalars['DateTime']['output'];
  videosCompletedCount?: Maybe<Scalars['Int']['output']>;
  videosPlayCount?: Maybe<Scalars['Int']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};


export type StudentsTypeAuthStaffArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstname_Icontains?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastname_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type StudentsTypeLearnerassessmentsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<AssessmentsLearnerAssessmentsStatusChoices>;
};


export type StudentsTypeLearnertutorialvideshistorySetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tutorialVideo?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};


export type StudentsTypeMeetrequestsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  calenderEventId?: InputMaybe<Scalars['String']['input']>;
  cptCode?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  localEndTime?: InputMaybe<Scalars['DateTime']['input']>;
  localStartTime?: InputMaybe<Scalars['DateTime']['input']>;
  meetLink?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  placeOfService?: InputMaybe<Scalars['ID']['input']>;
  staff?: InputMaybe<Scalars['ID']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  zoomResponse?: InputMaybe<Scalars['String']['input']>;
};


export type StudentsTypeStudentstutorialvideosSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  availableAllTime?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TutorialVideosStudentsTutorialVideosStatusChoices>;
  tutorialVideos?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userWatchTime?: InputMaybe<Scalars['BigInt']['input']>;
  videoCompletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videoCompletedCount?: InputMaybe<Scalars['Int']['input']>;
  videoOrder?: InputMaybe<Scalars['Int']['input']>;
  videoPlayCount?: InputMaybe<Scalars['Int']['input']>;
  videoPlayedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videoWatchedTime?: InputMaybe<Scalars['BigInt']['input']>;
};

export type StudentsTypeConnection = {
  __typename?: 'StudentsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StudentsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `StudentsType` and its cursor. */
export type StudentsTypeEdge = {
  __typename?: 'StudentsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StudentsType>;
};

export type SuperadminDashboardType = {
  __typename?: 'SuperadminDashboardType';
  activeClinics?: Maybe<Scalars['Int']['output']>;
  activeLearners?: Maybe<Scalars['Int']['output']>;
  inactiveClinics?: Maybe<Scalars['Int']['output']>;
  inactiveLearners?: Maybe<Scalars['Int']['output']>;
  totalClinics?: Maybe<Scalars['Int']['output']>;
  totalLearners?: Maybe<Scalars['Int']['output']>;
  totalVideos?: Maybe<Scalars['Int']['output']>;
  videosAssignedToClinic?: Maybe<Scalars['Int']['output']>;
  videosAssignedToLearners?: Maybe<Scalars['Int']['output']>;
};

export type SyncVideoCurriculumMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type SyncVideoCurriculumMutationPayload = {
  __typename?: 'SyncVideoCurriculumMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type TimeslotsInput = {
  endTime: Scalars['Time']['input'];
  pk?: InputMaybe<Scalars['ID']['input']>;
  startTime: Scalars['Time']['input'];
};

export type TrackLearnerVideoMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  learnerVideo: Scalars['ID']['input'];
  longitude?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  userEndWatching?: InputMaybe<Scalars['DateTime']['input']>;
  userStartWatching?: InputMaybe<Scalars['DateTime']['input']>;
  userWatchTime?: InputMaybe<Scalars['BigInt']['input']>;
  videoCompletedCount?: InputMaybe<Scalars['Int']['input']>;
  videoEndPoint?: InputMaybe<Scalars['JSONString']['input']>;
  videoPlayCount?: InputMaybe<Scalars['Int']['input']>;
  videoStartPoint?: InputMaybe<Scalars['JSONString']['input']>;
  videoTrack?: InputMaybe<Scalars['JSONString']['input']>;
  videoWatchedTime?: InputMaybe<Scalars['BigInt']['input']>;
};

export type TrackLearnerVideoMutationPayload = {
  __typename?: 'TrackLearnerVideoMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  learnerVideo?: Maybe<StudentsTutorialVideosType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type TutorialVideoViewsType = Node & {
  __typename?: 'TutorialVideoViewsType';
  clinic: SchoolType;
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  reactBy: UserType;
  updatedAt: Scalars['DateTime']['output'];
  video?: Maybe<VideosType>;
};

export type TutorialVideoViewsTypeConnection = {
  __typename?: 'TutorialVideoViewsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TutorialVideoViewsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TutorialVideoViewsType` and its cursor. */
export type TutorialVideoViewsTypeEdge = {
  __typename?: 'TutorialVideoViewsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TutorialVideoViewsType>;
};

/** An enumeration. */
export enum TutorialVideosLearnerWatchTimeStatusChoices {
  /** completed */
  Completed = 'COMPLETED',
  /** inprogress */
  Inprogress = 'INPROGRESS',
  /** pending */
  Pending = 'PENDING'
}

export type TutorialVideosModuleType = Node & {
  __typename?: 'TutorialVideosModuleType';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  moduleOrder: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  tutorialvideosSet: TutorialVideosTypeConnection;
  tutorialvideossubmoduleSet: TutorialVideosSubModuleTypeConnection;
  updatedAt: Scalars['DateTime']['output'];
};


export type TutorialVideosModuleTypeTutorialvideosSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  module?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  subModule?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};


export type TutorialVideosModuleTypeTutorialvideossubmoduleSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  module?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TutorialVideosModuleTypeConnection = {
  __typename?: 'TutorialVideosModuleTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TutorialVideosModuleTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TutorialVideosModuleType` and its cursor. */
export type TutorialVideosModuleTypeEdge = {
  __typename?: 'TutorialVideosModuleTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TutorialVideosModuleType>;
};

/** An enumeration. */
export enum TutorialVideosStudentsTutorialVideosStatusChoices {
  /** completed */
  Completed = 'COMPLETED',
  /** inprogress */
  Inprogress = 'INPROGRESS',
  /** pending */
  Pending = 'PENDING'
}

export type TutorialVideosSubModuleType = Node & {
  __typename?: 'TutorialVideosSubModuleType';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  module: TutorialVideosModuleType;
  name: Scalars['String']['output'];
  tutorialvideosSet: TutorialVideosTypeConnection;
  updatedAt: Scalars['DateTime']['output'];
};


export type TutorialVideosSubModuleTypeTutorialvideosSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  module?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  subModule?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};

export type TutorialVideosSubModuleTypeConnection = {
  __typename?: 'TutorialVideosSubModuleTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TutorialVideosSubModuleTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TutorialVideosSubModuleType` and its cursor. */
export type TutorialVideosSubModuleTypeEdge = {
  __typename?: 'TutorialVideosSubModuleTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TutorialVideosSubModuleType>;
};

export type TutorialVideosType = Node & {
  __typename?: 'TutorialVideosType';
  averageRating?: Maybe<Scalars['Float']['output']>;
  clinictutorialvideosSet: ClinicTutorialVideosTypeConnection;
  clinictutorialvideshistorySet: ClinicTutorialVidesHistoryTypeConnection;
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  learnertutorialvideshistorySet: LearnerTutorialVidesHistoryTypeConnection;
  learnerwatchtimeSet: LearnerWatchTimeTypeConnection;
  module: TutorialVideosModuleType;
  studentstutorialvideosSet: StudentsTutorialVideosTypeConnection;
  subModule: TutorialVideosSubModuleType;
  totalComments?: Maybe<Scalars['Int']['output']>;
  totalDislikes?: Maybe<Scalars['Int']['output']>;
  totalLikes?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  video?: Maybe<VideosType>;
  videoViews?: Maybe<Scalars['Int']['output']>;
};


export type TutorialVideosTypeClinictutorialvideosSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tutorialVideos?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type TutorialVideosTypeClinictutorialvideshistorySetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tutorialVideo?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};


export type TutorialVideosTypeLearnertutorialvideshistorySetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tutorialVideo?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};


export type TutorialVideosTypeLearnerwatchtimeSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TutorialVideosLearnerWatchTimeStatusChoices>;
  tutorialVideo?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userEndWatching?: InputMaybe<Scalars['DateTime']['input']>;
  userStartWatching?: InputMaybe<Scalars['DateTime']['input']>;
  videoEndPoint?: InputMaybe<Scalars['String']['input']>;
  videoStartPoint?: InputMaybe<Scalars['String']['input']>;
  watchBy?: InputMaybe<Scalars['ID']['input']>;
  watchTime?: InputMaybe<Scalars['BigInt']['input']>;
};


export type TutorialVideosTypeStudentstutorialvideosSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  availableAllTime?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TutorialVideosStudentsTutorialVideosStatusChoices>;
  tutorialVideos?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userWatchTime?: InputMaybe<Scalars['BigInt']['input']>;
  videoCompletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videoCompletedCount?: InputMaybe<Scalars['Int']['input']>;
  videoOrder?: InputMaybe<Scalars['Int']['input']>;
  videoPlayCount?: InputMaybe<Scalars['Int']['input']>;
  videoPlayedAt?: InputMaybe<Scalars['DateTime']['input']>;
  videoWatchedTime?: InputMaybe<Scalars['BigInt']['input']>;
};

export type TutorialVideosTypeConnection = {
  __typename?: 'TutorialVideosTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TutorialVideosTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `TutorialVideosType` and its cursor. */
export type TutorialVideosTypeEdge = {
  __typename?: 'TutorialVideosTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TutorialVideosType>;
};

export type UpdateAssessmentQuestionMutationInput = {
  allowFreeText: Scalars['Boolean']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  forResponse?: InputMaybe<Scalars['ID']['input']>;
  options?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  parentQuestion?: InputMaybe<Scalars['ID']['input']>;
  question: Scalars['String']['input'];
  questionId: Scalars['ID']['input'];
  questionType: Scalars['String']['input'];
};

export type UpdateAssessmentQuestionMutationPayload = {
  __typename?: 'UpdateAssessmentQuestionMutationPayload';
  assessmentQuestion?: Maybe<StrugglingIssuesQuestionsWithOptionsType>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateAssessmentQuestionResponseMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  optionId?: InputMaybe<Scalars['ID']['input']>;
  otherOptionText?: InputMaybe<Scalars['String']['input']>;
  questionId: Scalars['ID']['input'];
  selectedOptions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UpdateAssessmentQuestionResponseMutationPayload = {
  __typename?: 'UpdateAssessmentQuestionResponseMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  questionResponse?: Maybe<LearnerStrugglingQuestionResponsesType>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateClinicMutationInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  clinicName?: InputMaybe<Scalars['String']['input']>;
  contactNo?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  noLearner?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateClinicMutationPayload = {
  __typename?: 'UpdateClinicMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  school?: Maybe<SchoolType>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateCommentOnVideosMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type UpdateCommentOnVideosMutationPayload = {
  __typename?: 'UpdateCommentOnVideosMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  videoComment?: Maybe<VideoCommentsType>;
};

export type UpdateCommentReplyOnVideosMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  replyComment: Scalars['String']['input'];
  replyCommentId: Scalars['ID']['input'];
};

export type UpdateCommentReplyOnVideosMutationPayload = {
  __typename?: 'UpdateCommentReplyOnVideosMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  commentReply?: Maybe<CommentsReplyType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateHostMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHostMutationPayload = {
  __typename?: 'UpdateHostMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  hostData?: Maybe<HostInfoType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateInstantManualMeetByAttendeMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  instantZoomId: Scalars['ID']['input'];
  status: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateInstantManualMeetByAttendeMutationPayload = {
  __typename?: 'UpdateInstantManualMeetByAttendeMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateInstantMeetByAttendeMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  instantZoomId: Scalars['ID']['input'];
  status: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  zoomMeetingId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInstantMeetByAttendeMutationPayload = {
  __typename?: 'UpdateInstantMeetByAttendeMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateInstantZoomMeetManuallyMutationInput = {
  audioRecordingUrl?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  instantZoomId: Scalars['ID']['input'];
  status: Scalars['String']['input'];
  videoRecordingUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInstantZoomMeetManuallyMutationPayload = {
  __typename?: 'UpdateInstantZoomMeetManuallyMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data?: Maybe<InstantZoomMeetManualType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateInstantZoomMeetingMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  instantZoomId: Scalars['ID']['input'];
  status: Scalars['String']['input'];
};

export type UpdateInstantZoomMeetingMutationPayload = {
  __typename?: 'UpdateInstantZoomMeetingMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data?: Maybe<InstantZoomMeetType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateLearnerAssessmentMutationInput = {
  behaviourStatus?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  personalizedStatus?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
};

export type UpdateLearnerAssessmentMutationPayload = {
  __typename?: 'UpdateLearnerAssessmentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  learnerAssessment?: Maybe<LearnerAssessmentsType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateLearnersStaffMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  learnerIds: Array<InputMaybe<Scalars['ID']['input']>>;
  therapistId: Scalars['ID']['input'];
};

export type UpdateLearnersStaffMutationPayload = {
  __typename?: 'UpdateLearnersStaffMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  studentsDetails?: Maybe<Array<Maybe<StudentsType>>>;
};

export type UpdateMeetRequestByBcbaMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  localEndTime?: InputMaybe<Scalars['DateTime']['input']>;
  localStartTime?: InputMaybe<Scalars['DateTime']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMeetRequestByBcbaMutationPayload = {
  __typename?: 'UpdateMeetRequestByBCBAMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data?: Maybe<MeetRequestsType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateMeetRequestCommentMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment: Scalars['String']['input'];
  meetCommentId: Scalars['ID']['input'];
};

export type UpdateMeetRequestCommentMutationPayload = {
  __typename?: 'UpdateMeetRequestCommentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  commentData?: Maybe<MeetRequestsCommentsType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateMeetRequestMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  localEndTime?: InputMaybe<Scalars['DateTime']['input']>;
  localStartTime?: InputMaybe<Scalars['DateTime']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMeetRequestMutationPayload = {
  __typename?: 'UpdateMeetRequestMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data?: Maybe<MeetRequestsType>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateStaffMutationInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  contactNo?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['ID']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  education?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  experience?: InputMaybe<Scalars['String']['input']>;
  firstname: Scalars['String']['input'];
  gender?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isDefaultBcba?: InputMaybe<Scalars['Boolean']['input']>;
  languages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  meetLink?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStaffMutationPayload = {
  __typename?: 'UpdateStaffMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  staff?: Maybe<StaffType>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateStudentMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  studentData?: InputMaybe<StudentInput>;
};

export type UpdateStudentMutationPayload = {
  __typename?: 'UpdateStudentMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  student?: Maybe<StudentsType>;
};

export type UpdateTutorialVideosModuleMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  moduleOrder?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTutorialVideosModuleMutationPayload = {
  __typename?: 'UpdateTutorialVideosModuleMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  videoModule?: Maybe<TutorialVideosModuleType>;
};

export type UpdateTutorialVideosMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  videoId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateTutorialVideosMutationPayload = {
  __typename?: 'UpdateTutorialVideosMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  tutorialVideo?: Maybe<TutorialVideosType>;
};

export type UpdateTutorialVideosSubModuleMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTutorialVideosSubModuleMutationPayload = {
  __typename?: 'UpdateTutorialVideosSubModuleMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  videoSubModule?: Maybe<TutorialVideosSubModuleType>;
};

export type UpdateVideoToAssignAccordingToResponsesInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  option: Scalars['ID']['input'];
  question: Scalars['ID']['input'];
  videosToAssignData: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type UpdateVideoToAssignAccordingToResponsesPayload = {
  __typename?: 'UpdateVideoToAssignAccordingToResponsesPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  videosToAssignAccResp?: Maybe<VideoAssignDataAccoringToResponsesType>;
};

export type UpdateVideosMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  pk?: InputMaybe<Scalars['ID']['input']>;
  videoDocFile?: InputMaybe<Scalars['String']['input']>;
  videoName?: InputMaybe<Scalars['String']['input']>;
  videoUrl: Scalars['String']['input'];
};

export type UpdateVideosMutationPayload = {
  __typename?: 'UpdateVideosMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  video?: Maybe<VideosType>;
};

export type UpdateZoomMeetingManuallyMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  durationMin?: InputMaybe<Scalars['Int']['input']>;
  hostId?: InputMaybe<Scalars['ID']['input']>;
  joinUrl?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pk: Scalars['ID']['input'];
  recordingUrl?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['ID']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateZoomMeetingManuallyMutationPayload = {
  __typename?: 'UpdateZoomMeetingManuallyMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  data?: Maybe<ZoomLinkDetailsType>;
  message?: Maybe<Scalars['String']['output']>;
  response?: Maybe<Scalars['JSONString']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UserFcmTokenType = Node & {
  __typename?: 'UserFCMTokenType';
  deviceId?: Maybe<Scalars['String']['output']>;
  deviceType: ChatUserFcmTokenDeviceTypeChoices;
  fcmToken: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  user: UserType;
};

export type UserFcmTokenTypeConnection = {
  __typename?: 'UserFCMTokenTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserFcmTokenTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserFCMTokenType` and its cursor. */
export type UserFcmTokenTypeEdge = {
  __typename?: 'UserFCMTokenTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<UserFcmTokenType>;
};

export type UserType = Node & {
  __typename?: 'UserType';
  attende: InstantZoomMeetTypeConnection;
  attendeaddedlogsSet: AttendeAddedLogsTypeConnection;
  chatuser?: Maybe<ChatUserType>;
  client: InstantZoomMeetManualTypeConnection;
  clinictutorialvideshistorySet: ClinicTutorialVidesHistoryTypeConnection;
  commentsreplySet: CommentsReplyTypeConnection;
  dateJoined: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  groups: GroupTypeConnection;
  host: InstantZoomMeetTypeConnection;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean']['output'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  learnertutorialvideshistorySet: LearnerTutorialVidesHistoryTypeConnection;
  learnerwatchtimeSet: LearnerWatchTimeTypeConnection;
  meetingAttende: InstantZoomMeetManualTypeConnection;
  meetingHost: InstantZoomMeetManualTypeConnection;
  meetrequestscommentsSet: MeetRequestsCommentsTypeConnection;
  notificationsSet: NotificationsTypeConnection;
  provider: InstantZoomMeetManualTypeConnection;
  school?: Maybe<SchoolType>;
  schooldetails?: Maybe<SchoolDetailsType>;
  sender: NotificationsTypeConnection;
  staff?: Maybe<StaffType>;
  students?: Maybe<StudentsType>;
  tutorialvideoviewsSet: TutorialVideoViewsTypeConnection;
  userfcmtokenSet: UserFcmTokenTypeConnection;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['output'];
  videocommentsSet: VideoCommentsTypeConnection;
  videoslikedislikeSet: VideosLikeDislikeTypeConnection;
  videosratingSet: VideosRatingTypeConnection;
};


export type UserTypeAttendeArgs = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  attende?: InputMaybe<Scalars['ID']['input']>;
  attendeJoined?: InputMaybe<Scalars['DateTime']['input']>;
  attendeLeave?: InputMaybe<Scalars['DateTime']['input']>;
  attendeStatus?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cptCode?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  host?: InputMaybe<Scalars['ID']['input']>;
  hostJoined?: InputMaybe<Scalars['DateTime']['input']>;
  hostLeave?: InputMaybe<Scalars['DateTime']['input']>;
  hostStatus?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  meetEnded?: InputMaybe<Scalars['DateTime']['input']>;
  meetJoined?: InputMaybe<Scalars['DateTime']['input']>;
  meetingDetails?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingStatus?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  placeOfService?: InputMaybe<Scalars['ID']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type UserTypeAttendeaddedlogsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  response?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};


export type UserTypeClientArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  attende_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  host_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeClinictutorialvideshistorySetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tutorialVideo?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};


export type UserTypeCommentsreplySetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  parentCommentReply?: InputMaybe<Scalars['ID']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type UserTypeGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type UserTypeHostArgs = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  attende?: InputMaybe<Scalars['ID']['input']>;
  attendeJoined?: InputMaybe<Scalars['DateTime']['input']>;
  attendeLeave?: InputMaybe<Scalars['DateTime']['input']>;
  attendeStatus?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cptCode?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  host?: InputMaybe<Scalars['ID']['input']>;
  hostJoined?: InputMaybe<Scalars['DateTime']['input']>;
  hostLeave?: InputMaybe<Scalars['DateTime']['input']>;
  hostStatus?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  meetEnded?: InputMaybe<Scalars['DateTime']['input']>;
  meetJoined?: InputMaybe<Scalars['DateTime']['input']>;
  meetingDetails?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingStatus?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  placeOfService?: InputMaybe<Scalars['ID']['input']>;
  topic?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type UserTypeLearnertutorialvideshistorySetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  learner?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tutorialVideo?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBy?: InputMaybe<Scalars['ID']['input']>;
};


export type UserTypeLearnerwatchtimeSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TutorialVideosLearnerWatchTimeStatusChoices>;
  tutorialVideo?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userEndWatching?: InputMaybe<Scalars['DateTime']['input']>;
  userStartWatching?: InputMaybe<Scalars['DateTime']['input']>;
  videoEndPoint?: InputMaybe<Scalars['String']['input']>;
  videoStartPoint?: InputMaybe<Scalars['String']['input']>;
  watchBy?: InputMaybe<Scalars['ID']['input']>;
  watchTime?: InputMaybe<Scalars['BigInt']['input']>;
};


export type UserTypeMeetingAttendeArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  attende_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  host_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeMeetingHostArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  attende_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  host_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeMeetrequestscommentsSetArgs = {
  addedBy?: InputMaybe<Scalars['ID']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  meetRequest?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type UserTypeNotificationsSetArgs = {
  actorContentType?: InputMaybe<Scalars['ID']['input']>;
  actorObjectId?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isReminder?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  notifyType?: InputMaybe<ChatNotificationsNotifyTypeChoices>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  recipient?: InputMaybe<Scalars['ID']['input']>;
  sender?: InputMaybe<Scalars['ID']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type UserTypeProviderArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  attende_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  host_Email_Icontains?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type UserTypeSenderArgs = {
  actorContentType?: InputMaybe<Scalars['ID']['input']>;
  actorObjectId?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isReminder?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  notifyType?: InputMaybe<ChatNotificationsNotifyTypeChoices>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  recipient?: InputMaybe<Scalars['ID']['input']>;
  sender?: InputMaybe<Scalars['ID']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};


export type UserTypeTutorialvideoviewsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};


export type UserTypeUserfcmtokenSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserTypeVideocommentsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  reply?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};


export type UserTypeVideoslikedislikeSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dislike?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  like?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};


export type UserTypeVideosratingSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};

export type UserTypeConnection = {
  __typename?: 'UserTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserType` and its cursor. */
export type UserTypeEdge = {
  __typename?: 'UserTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<UserType>;
};

export type VerifyAccountDeactivationOtpMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  otp: Scalars['String']['input'];
  userUid: Scalars['String']['input'];
};

export type VerifyAccountDeactivationOtpMutationPayload = {
  __typename?: 'VerifyAccountDeactivationOtpMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type VerifyInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type VerifyOtpAndChangePasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newPassword: Scalars['String']['input'];
  otp: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type VerifyOtpAndChangePasswordPayload = {
  __typename?: 'VerifyOtpAndChangePasswordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type VerifyOtpMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  otp: Scalars['String']['input'];
  user: Scalars['ID']['input'];
};

export type VerifyOtpMutationPayload = {
  __typename?: 'VerifyOtpMutationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type VerifyPayload = {
  __typename?: 'VerifyPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  payload: Scalars['GenericScalar']['output'];
};

export type VideoAssignDataAccoringToResponsesType = Node & {
  __typename?: 'VideoAssignDataAccoringToResponsesType';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  option: StrugglingIssuesOptionsType;
  question: StrugglingIssuesQuestionsWithOptionsType;
  updatedAt: Scalars['DateTime']['output'];
};

export type VideoAssignDataAccoringToResponsesTypeConnection = {
  __typename?: 'VideoAssignDataAccoringToResponsesTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VideoAssignDataAccoringToResponsesTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `VideoAssignDataAccoringToResponsesType` and its cursor. */
export type VideoAssignDataAccoringToResponsesTypeEdge = {
  __typename?: 'VideoAssignDataAccoringToResponsesTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<VideoAssignDataAccoringToResponsesType>;
};

export type VideoCommentsType = Node & {
  __typename?: 'VideoCommentsType';
  clinic: SchoolType;
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  reactBy: UserType;
  reply: CommentsReplyTypeConnection;
  updatedAt: Scalars['DateTime']['output'];
  video?: Maybe<VideosType>;
};


export type VideoCommentsTypeReplyArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  parentCommentReply?: InputMaybe<Scalars['ID']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VideoCommentsTypeConnection = {
  __typename?: 'VideoCommentsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VideoCommentsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `VideoCommentsType` and its cursor. */
export type VideoCommentsTypeEdge = {
  __typename?: 'VideoCommentsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<VideoCommentsType>;
};

export type VideoDataForGeoGraphType = {
  __typename?: 'VideoDataForGeoGraphType';
  completedData?: Maybe<Array<Maybe<GeoDataStructureType>>>;
  inprogressData?: Maybe<Array<Maybe<GeoDataStructureType>>>;
};

export type VideosLikeDislikeType = Node & {
  __typename?: 'VideosLikeDislikeType';
  clinic: SchoolType;
  createdAt: Scalars['DateTime']['output'];
  dislike: Scalars['Boolean']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  like: Scalars['Boolean']['output'];
  reactBy: UserType;
  updatedAt: Scalars['DateTime']['output'];
  video?: Maybe<VideosType>;
};

export type VideosLikeDislikeTypeConnection = {
  __typename?: 'VideosLikeDislikeTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VideosLikeDislikeTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `VideosLikeDislikeType` and its cursor. */
export type VideosLikeDislikeTypeEdge = {
  __typename?: 'VideosLikeDislikeTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<VideosLikeDislikeType>;
};

export type VideosRatingMutationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Int']['input'];
  tutorialVideo: Scalars['ID']['input'];
};

export type VideosRatingMutationPayload = {
  __typename?: 'VideosRatingMutationPayload';
  averageRatingInClinic?: Maybe<Scalars['Float']['output']>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  videoRating?: Maybe<VideosRatingType>;
};

export type VideosRatingType = Node & {
  __typename?: 'VideosRatingType';
  clinic: SchoolType;
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  reactBy: UserType;
  updatedAt: Scalars['DateTime']['output'];
  video?: Maybe<VideosType>;
};

export type VideosRatingTypeConnection = {
  __typename?: 'VideosRatingTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VideosRatingTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `VideosRatingType` and its cursor. */
export type VideosRatingTypeEdge = {
  __typename?: 'VideosRatingTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<VideosRatingType>;
};

export type VideosType = Node & {
  __typename?: 'VideosType';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  tutorialvideosSet: TutorialVideosTypeConnection;
  tutorialvideoviewsSet: TutorialVideoViewsTypeConnection;
  updatedAt: Scalars['DateTime']['output'];
  videoDocFile?: Maybe<Scalars['String']['output']>;
  videoName: Scalars['String']['output'];
  videoUrl: Scalars['String']['output'];
  videocommentsSet: VideoCommentsTypeConnection;
  videoslikedislikeSet: VideosLikeDislikeTypeConnection;
  videosratingSet: VideosRatingTypeConnection;
};


export type VideosTypeTutorialvideosSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  module?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  subModule?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};


export type VideosTypeTutorialvideoviewsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};


export type VideosTypeVideocommentsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  reply?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};


export type VideosTypeVideoslikedislikeSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dislike?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  like?: InputMaybe<Scalars['Boolean']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};


export type VideosTypeVideosratingSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  reactBy?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};

export type VideosTypeConnection = {
  __typename?: 'VideosTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VideosTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `VideosType` and its cursor. */
export type VideosTypeEdge = {
  __typename?: 'VideosTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<VideosType>;
};

export type ZoomLinkDetailsType = Node & {
  __typename?: 'ZoomLinkDetailsType';
  bcbaHost?: Maybe<StaffType>;
  clinic?: Maybe<SchoolType>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  duration: Scalars['Int']['output'];
  hostId?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  joinUrl: Scalars['String']['output'];
  linkDetails?: Maybe<Scalars['String']['output']>;
  manualHost?: Maybe<HostInfoType>;
  meetingId?: Maybe<Scalars['String']['output']>;
  meetingType: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  recordingUrl?: Maybe<Scalars['String']['output']>;
  startTime: Scalars['DateTime']['output'];
  status: CommunityZoomLinkDetailsStatusChoices;
  timezone?: Maybe<Scalars['String']['output']>;
  topic: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  uuid?: Maybe<Scalars['String']['output']>;
  zoomMeetType: CommunityZoomLinkDetailsZoomMeetTypeChoices;
};

export type ZoomLinkDetailsTypeConnection = {
  __typename?: 'ZoomLinkDetailsTypeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ZoomLinkDetailsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ZoomLinkDetailsType` and its cursor. */
export type ZoomLinkDetailsTypeEdge = {
  __typename?: 'ZoomLinkDetailsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ZoomLinkDetailsType>;
};

export type TokenAuthMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type TokenAuthMutation = { __typename?: 'Mutation', tokenAuth?: { __typename?: 'ObtainJSONWebTokenPayload', isVerified?: boolean | null, firstLogin?: boolean | null, token: string, user?: { __typename?: 'UserType', id: string, username: string, firstName: string, lastName: string, email: string, lastLogin?: any | null, groups: { __typename?: 'GroupTypeConnection', edges: Array<{ __typename?: 'GroupTypeEdge', node?: { __typename?: 'GroupType', id: string, name: string } | null } | null> }, staff?: { __typename?: 'StaffType', id: string, firstname: string, lastname?: string | null } | null, students?: { __typename?: 'StudentsType', id: string, firstname?: string | null, lastname?: string | null, parentFirstname?: string | null, parentLastname?: string | null } | null } | null } | null };

export type StudentSignupMutationVariables = Exact<{
  country: Scalars['ID']['input'];
  dob: Scalars['Date']['input'];
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  gender?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  parentFirstname?: InputMaybe<Scalars['String']['input']>;
  parentLastname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  pronounceChild?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
}>;


export type StudentSignupMutation = { __typename?: 'Mutation', studentSignup?: { __typename?: 'StudentSignupMutationPayload', message?: string | null, status?: boolean | null, student?: { __typename?: 'StudentsType', id: string, firstname?: string | null, lastname?: string | null, zipCode?: string | null, parentFirstname?: string | null, parentLastname?: string | null, email?: string | null, country?: { __typename?: 'CountryType', id: string, name?: string | null } | null, parent?: { __typename?: 'UserType', id: string, username: string } | null } | null } | null };

export type UserDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserDetailsQuery = { __typename?: 'Query', userDetails?: { __typename?: 'UserType', id: string, username: string, firstName: string, lastName: string, email: string, lastLogin?: any | null, groups: { __typename?: 'GroupTypeConnection', edges: Array<{ __typename?: 'GroupTypeEdge', node?: { __typename?: 'GroupType', id: string, name: string } | null } | null> }, staff?: { __typename?: 'StaffType', id: string, firstname: string, lastname?: string | null } | null, students?: { __typename?: 'StudentsType', id: string, firstname?: string | null, lastname?: string | null, parentFirstname?: string | null, parentLastname?: string | null, admissionDate?: any | null, dob?: any | null, gender?: string | null } | null } | null };


export const TokenAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TokenAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenAuth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"firstLogin"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"staff"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"students"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"parentFirstname"}},{"kind":"Field","name":{"kind":"Name","value":"parentLastname"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"firstLogin"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<TokenAuthMutation, TokenAuthMutationVariables>;
export const StudentSignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"studentSignup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"country"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dob"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gender"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentFirstname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentLastname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pronounceChild"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zipCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"studentSignup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"studentData"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"country"},"value":{"kind":"Variable","name":{"kind":"Name","value":"country"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"dob"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dob"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"gender"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gender"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"parentFirstname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentFirstname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"parentLastname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentLastname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pronounceChild"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pronounceChild"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"zipCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zipCode"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"zipCode"}},{"kind":"Field","name":{"kind":"Name","value":"parentFirstname"}},{"kind":"Field","name":{"kind":"Name","value":"parentLastname"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<StudentSignupMutation, StudentSignupMutationVariables>;
export const UserDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"staff"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}}]}},{"kind":"Field","name":{"kind":"Name","value":"students"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"parentFirstname"}},{"kind":"Field","name":{"kind":"Name","value":"parentLastname"}},{"kind":"Field","name":{"kind":"Name","value":"admissionDate"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}}]}}]}}]} as unknown as DocumentNode<UserDetailsQuery, UserDetailsQueryVariables>;