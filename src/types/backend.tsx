import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  GenericScalar: any;
};


export type AlbumInputType = {
  name: Scalars['String'];
  year: Scalars['Int'];
  mbid: Scalars['String'];
};

export type AlbumNodeType = {
  __typename?: 'AlbumNodeType';
  name: Scalars['String'];
  artist: Scalars['String'];
  mbid: Scalars['String'];
  image?: Maybe<Array<ImageType>>;
};

export type AlbumType = Node & {
  __typename?: 'AlbumType';
  id: Scalars['ID'];
  created: Scalars['DateTime'];
  lastUpdated: Scalars['DateTime'];
  mbid: Scalars['String'];
  performer: PerformerType;
  name: Scalars['String'];
  year: Scalars['Int'];
  user?: Maybe<UserType>;
  reviewSet: ReviewTypeConnection;
  url: Scalars['String'];
  image: Array<ImageType>;
  wiki?: Maybe<WikiInfoType>;
};


export type AlbumTypeReviewSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type AlbumTypeConnection = {
  __typename?: 'AlbumTypeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<AlbumTypeEdge>>;
};

export type AlbumTypeEdge = {
  __typename?: 'AlbumTypeEdge';
  node?: Maybe<AlbumType>;
  cursor: Scalars['String'];
};

export type CreateAlbumInput = {
  performer: Scalars['ID'];
  mbid: Scalars['String'];
  name: Scalars['String'];
  year: Scalars['Int'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateAlbumPayload = {
  __typename?: 'CreateAlbumPayload';
  album?: Maybe<AlbumType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePerformerInput = {
  mbid: Scalars['String'];
  name: Scalars['String'];
  albums?: Maybe<Array<AlbumInputType>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePerformerPayload = {
  __typename?: 'CreatePerformerPayload';
  performer?: Maybe<PerformerType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateReviewInput = {
  album: Scalars['ID'];
  review: Scalars['String'];
  rating: Scalars['Float'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateReviewPayload = {
  __typename?: 'CreateReviewPayload';
  review?: Maybe<ReviewType>;
  clientMutationId?: Maybe<Scalars['String']>;
};


export type DeleteAlbumInput = {
  album: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteAlbumPayload = {
  __typename?: 'DeleteAlbumPayload';
  success?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeletePerformerInput = {
  performer: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeletePerformerPayload = {
  __typename?: 'DeletePerformerPayload';
  success?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteReviewInput = {
  review: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteReviewPayload = {
  __typename?: 'DeleteReviewPayload';
  success?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};


export type ImageType = {
  __typename?: 'ImageType';
  url: Scalars['String'];
  size: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  createReview?: Maybe<CreateReviewPayload>;
  updateReview?: Maybe<UpdateReviewPayload>;
  deleteReview?: Maybe<DeleteReviewPayload>;
  createPerformer?: Maybe<CreatePerformerPayload>;
  updatePerformer?: Maybe<UpdatePerformerPayload>;
  deletePerformer?: Maybe<DeletePerformerPayload>;
  createAlbum?: Maybe<CreateAlbumPayload>;
  updateAlbum?: Maybe<UpdateAlbumPayload>;
  deleteAlbum?: Maybe<DeleteAlbumPayload>;
};


export type MutationTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationRefreshTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};


export type MutationUpdateReviewArgs = {
  input: UpdateReviewInput;
};


export type MutationDeleteReviewArgs = {
  input: DeleteReviewInput;
};


export type MutationCreatePerformerArgs = {
  input: CreatePerformerInput;
};


export type MutationUpdatePerformerArgs = {
  input: UpdatePerformerInput;
};


export type MutationDeletePerformerArgs = {
  input: DeletePerformerInput;
};


export type MutationCreateAlbumArgs = {
  input: CreateAlbumInput;
};


export type MutationUpdateAlbumArgs = {
  input: UpdateAlbumInput;
};


export type MutationDeleteAlbumArgs = {
  input: DeleteAlbumInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type PerformerNodeType = {
  __typename?: 'PerformerNodeType';
  name: Scalars['String'];
  mbid: Scalars['String'];
  image?: Maybe<Array<ImageType>>;
};

export type PerformerType = Node & {
  __typename?: 'PerformerType';
  created: Scalars['DateTime'];
  lastUpdated: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  mbid: Scalars['String'];
  user?: Maybe<UserType>;
  albumSet: AlbumTypeConnection;
  url: Scalars['String'];
  image?: Maybe<Array<ImageType>>;
  bio?: Maybe<WikiInfoType>;
};


export type PerformerTypeAlbumSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PerformerTypeConnection = {
  __typename?: 'PerformerTypeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<PerformerTypeEdge>>;
};

export type PerformerTypeEdge = {
  __typename?: 'PerformerTypeEdge';
  node?: Maybe<PerformerType>;
  cursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  userSet?: Maybe<UserTypeConnection>;
  user?: Maybe<UserType>;
  reviewSet?: Maybe<ReviewTypeConnection>;
  review?: Maybe<ReviewType>;
  performerSet?: Maybe<PerformerTypeConnection>;
  performer?: Maybe<PerformerType>;
  albumSet?: Maybe<AlbumTypeConnection>;
  randomAlbumSet?: Maybe<AlbumTypeConnection>;
  album?: Maybe<AlbumType>;
  _empty: Scalars['String'];
  searchAlbums: SearchAlbumPage;
  performerCorrection: PerformerNodeType;
  searchPerformer: SearchPerformerPage;
};


export type QueryUserSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryReviewSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  album?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Float']>;
  user_Username?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
};


export type QueryPerformerSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryPerformerArgs = {
  id: Scalars['ID'];
};


export type QueryAlbumSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  performer?: Maybe<Scalars['ID']>;
  year?: Maybe<Scalars['Int']>;
  performer_Name?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  year_Gt?: Maybe<Scalars['Float']>;
  year_Lt?: Maybe<Scalars['Float']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryRandomAlbumSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
  year_Gt?: Maybe<Scalars['Float']>;
  year_Lt?: Maybe<Scalars['Float']>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID'];
};


export type QuerySearchAlbumsArgs = {
  album: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryPerformerCorrectionArgs = {
  performer: Scalars['String'];
};


export type QuerySearchPerformerArgs = {
  performer: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type ReviewType = Node & {
  __typename?: 'ReviewType';
  created: Scalars['DateTime'];
  lastUpdated: Scalars['DateTime'];
  id: Scalars['ID'];
  album: AlbumType;
  user: UserType;
  review: Scalars['String'];
  rating: Scalars['Float'];
};

export type ReviewTypeConnection = {
  __typename?: 'ReviewTypeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<ReviewTypeEdge>>;
};

export type ReviewTypeEdge = {
  __typename?: 'ReviewTypeEdge';
  node?: Maybe<ReviewType>;
  cursor: Scalars['String'];
};

export type SearchAlbumPage = {
  __typename?: 'SearchAlbumPage';
  total: Scalars['Int'];
  start: Scalars['Int'];
  items: Scalars['Int'];
  page: Array<AlbumNodeType>;
};

export type SearchPerformerPage = {
  __typename?: 'SearchPerformerPage';
  total: Scalars['Int'];
  start: Scalars['Int'];
  items: Scalars['Int'];
  page: Array<PerformerNodeType>;
};

export type UpdateAlbumInput = {
  album: Scalars['ID'];
  mbid?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateAlbumPayload = {
  __typename?: 'UpdateAlbumPayload';
  album?: Maybe<AlbumType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePerformerInput = {
  performer: Scalars['ID'];
  mbid?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePerformerPayload = {
  __typename?: 'UpdatePerformerPayload';
  performer?: Maybe<PerformerType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateReviewInput = {
  reviewId: Scalars['ID'];
  album?: Maybe<Scalars['ID']>;
  review?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateReviewPayload = {
  __typename?: 'UpdateReviewPayload';
  review?: Maybe<ReviewType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UserType = Node & {
  __typename?: 'UserType';
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  isSuperuser: Scalars['Boolean'];
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  isStaff: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  performerSet: PerformerTypeConnection;
  albumSet: AlbumTypeConnection;
  reviewSet: ReviewTypeConnection;
};


export type UserTypePerformerSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserTypeAlbumSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserTypeReviewSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserTypeConnection = {
  __typename?: 'UserTypeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<UserTypeEdge>>;
};

export type UserTypeEdge = {
  __typename?: 'UserTypeEdge';
  node?: Maybe<UserType>;
  cursor: Scalars['String'];
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type WikiInfoType = {
  __typename?: 'WikiInfoType';
  published: Scalars['String'];
  summary: Scalars['String'];
  content: Scalars['String'];
};

export type TokenAuthMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type TokenAuthMutation = (
  { __typename?: 'Mutation' }
  & { tokenAuth?: Maybe<(
    { __typename?: 'ObtainJSONWebToken' }
    & Pick<ObtainJsonWebToken, 'payload' | 'token'>
  )> }
);

export type CreateAlbumMutationVariables = Exact<{
  performer: Scalars['ID'];
  name: Scalars['String'];
  year: Scalars['Int'];
  mbid: Scalars['String'];
}>;


export type CreateAlbumMutation = (
  { __typename?: 'Mutation' }
  & { createAlbum?: Maybe<(
    { __typename?: 'CreateAlbumPayload' }
    & { album?: Maybe<(
      { __typename?: 'AlbumType' }
      & Pick<AlbumType, 'id'>
    )> }
  )> }
);

export type DeleteAlbumMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteAlbumMutation = (
  { __typename?: 'Mutation' }
  & { deleteAlbum?: Maybe<(
    { __typename?: 'DeleteAlbumPayload' }
    & Pick<DeleteAlbumPayload, 'success'>
  )> }
);

export type AlbumDetailsQueryVariables = Exact<{
  album: Scalars['ID'];
}>;


export type AlbumDetailsQuery = (
  { __typename?: 'Query' }
  & { album?: Maybe<(
    { __typename?: 'AlbumType' }
    & Pick<AlbumType, 'id' | 'name' | 'year' | 'url' | 'created'>
    & { performer: (
      { __typename?: 'PerformerType' }
      & Pick<PerformerType, 'id' | 'name' | 'created'>
    ), image: Array<(
      { __typename?: 'ImageType' }
      & Pick<ImageType, 'url'>
    )>, wiki?: Maybe<(
      { __typename?: 'WikiInfoType' }
      & Pick<WikiInfoType, 'published' | 'summary'>
    )>, reviewSet: (
      { __typename?: 'ReviewTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'ReviewTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'ReviewType' }
          & Pick<ReviewType, 'id' | 'review' | 'rating' | 'lastUpdated'>
          & { user: (
            { __typename?: 'UserType' }
            & Pick<UserType, 'id' | 'username'>
          ) }
        )> }
      )>> }
    ) }
  )> }
);

export type ReadAlbumMbidQueryVariables = Exact<{
  album: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
}>;


export type ReadAlbumMbidQuery = (
  { __typename?: 'Query' }
  & { searchAlbums: (
    { __typename?: 'SearchAlbumPage' }
    & { page: Array<(
      { __typename?: 'AlbumNodeType' }
      & Pick<AlbumNodeType, 'artist' | 'name' | 'mbid'>
    )> }
  ) }
);

export type ReadAlbumsQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  yearGt?: Maybe<Scalars['Float']>;
  yearLt?: Maybe<Scalars['Float']>;
}>;


export type ReadAlbumsQuery = (
  { __typename?: 'Query' }
  & { albumSet?: Maybe<(
    { __typename?: 'AlbumTypeConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'AlbumTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'AlbumType' }
        & Pick<AlbumType, 'id' | 'mbid' | 'name' | 'created' | 'year'>
        & { performer: (
          { __typename?: 'PerformerType' }
          & Pick<PerformerType, 'id' | 'name'>
        ), image: Array<(
          { __typename?: 'ImageType' }
          & Pick<ImageType, 'url'>
        )> }
      )> }
    )>> }
  )> }
);

export type ReadRandomAlbumsQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  yearGt?: Maybe<Scalars['Float']>;
  yearLt?: Maybe<Scalars['Float']>;
}>;


export type ReadRandomAlbumsQuery = (
  { __typename?: 'Query' }
  & { randomAlbumSet?: Maybe<(
    { __typename?: 'AlbumTypeConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'AlbumTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'AlbumType' }
        & Pick<AlbumType, 'id' | 'mbid' | 'name' | 'created' | 'year'>
        & { performer: (
          { __typename?: 'PerformerType' }
          & Pick<PerformerType, 'id' | 'name'>
        ), image: Array<(
          { __typename?: 'ImageType' }
          & Pick<ImageType, 'url'>
        )> }
      )> }
    )>> }
  )> }
);

export type UpdateAlbumMutationVariables = Exact<{
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  mbid?: Maybe<Scalars['String']>;
}>;


export type UpdateAlbumMutation = (
  { __typename?: 'Mutation' }
  & { updateAlbum?: Maybe<(
    { __typename?: 'UpdateAlbumPayload' }
    & { album?: Maybe<(
      { __typename?: 'AlbumType' }
      & Pick<AlbumType, 'id' | 'year' | 'mbid' | 'name' | 'lastUpdated'>
    )> }
  )> }
);

export type CreatePerformerMutationVariables = Exact<{
  name: Scalars['String'];
  albums?: Maybe<Array<AlbumInputType>>;
  mbid: Scalars['String'];
}>;


export type CreatePerformerMutation = (
  { __typename?: 'Mutation' }
  & { createPerformer?: Maybe<(
    { __typename?: 'CreatePerformerPayload' }
    & { performer?: Maybe<(
      { __typename?: 'PerformerType' }
      & Pick<PerformerType, 'id' | 'name' | 'created' | 'mbid'>
    )> }
  )> }
);

export type DeletePerformerMutationVariables = Exact<{
  performer: Scalars['ID'];
}>;


export type DeletePerformerMutation = (
  { __typename?: 'Mutation' }
  & { deletePerformer?: Maybe<(
    { __typename?: 'DeletePerformerPayload' }
    & Pick<DeletePerformerPayload, 'success'>
  )> }
);

export type ReadPerformerAlbumsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ReadPerformerAlbumsQuery = (
  { __typename?: 'Query' }
  & { performer?: Maybe<(
    { __typename?: 'PerformerType' }
    & Pick<PerformerType, 'id' | 'name'>
    & { bio?: Maybe<(
      { __typename?: 'WikiInfoType' }
      & Pick<WikiInfoType, 'summary' | 'content'>
    )>, albumSet: (
      { __typename?: 'AlbumTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'AlbumTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'AlbumType' }
          & Pick<AlbumType, 'id' | 'name' | 'year' | 'mbid'>
          & { image: Array<(
            { __typename?: 'ImageType' }
            & Pick<ImageType, 'url'>
          )>, performer: (
            { __typename?: 'PerformerType' }
            & Pick<PerformerType, 'id' | 'name'>
          ) }
        )> }
      )>> }
    ) }
  )> }
);

export type ReadPerformerMbidQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type ReadPerformerMbidQuery = (
  { __typename?: 'Query' }
  & { performerCorrection: (
    { __typename?: 'PerformerNodeType' }
    & Pick<PerformerNodeType, 'name' | 'mbid'>
  ) }
);

export type ReadPerformersQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}>;


export type ReadPerformersQuery = (
  { __typename?: 'Query' }
  & { performerSet?: Maybe<(
    { __typename?: 'PerformerTypeConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
    ), edges: Array<Maybe<(
      { __typename?: 'PerformerTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'PerformerType' }
        & Pick<PerformerType, 'id' | 'name' | 'created'>
        & { image?: Maybe<Array<(
          { __typename?: 'ImageType' }
          & Pick<ImageType, 'url' | 'size'>
        )>>, albumSet: (
          { __typename?: 'AlbumTypeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'AlbumTypeEdge' }
            & { node?: Maybe<(
              { __typename?: 'AlbumType' }
              & Pick<AlbumType, 'id' | 'mbid' | 'name' | 'year' | 'created'>
              & { image: Array<(
                { __typename?: 'ImageType' }
                & Pick<ImageType, 'url'>
              )>, performer: (
                { __typename?: 'PerformerType' }
                & Pick<PerformerType, 'id' | 'name'>
              ) }
            )> }
          )>> }
        ) }
      )> }
    )>> }
  )> }
);

export type ReadPerformerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ReadPerformerQuery = (
  { __typename?: 'Query' }
  & { performer?: Maybe<(
    { __typename?: 'PerformerType' }
    & Pick<PerformerType, 'id' | 'name'>
    & { bio?: Maybe<(
      { __typename?: 'WikiInfoType' }
      & Pick<WikiInfoType, 'summary'>
    )>, albumSet: (
      { __typename?: 'AlbumTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'AlbumTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'AlbumType' }
          & Pick<AlbumType, 'id'>
          & { reviewSet: (
            { __typename?: 'ReviewTypeConnection' }
            & { edges: Array<Maybe<(
              { __typename?: 'ReviewTypeEdge' }
              & { node?: Maybe<(
                { __typename?: 'ReviewType' }
                & Pick<ReviewType, 'id' | 'review' | 'rating' | 'lastUpdated' | 'created'>
                & { user: (
                  { __typename?: 'UserType' }
                  & Pick<UserType, 'id' | 'username'>
                ), album: (
                  { __typename?: 'AlbumType' }
                  & Pick<AlbumType, 'id' | 'year' | 'name'>
                  & { image: Array<(
                    { __typename?: 'ImageType' }
                    & Pick<ImageType, 'url'>
                  )>, performer: (
                    { __typename?: 'PerformerType' }
                    & Pick<PerformerType, 'id' | 'name'>
                  ) }
                ) }
              )> }
            )>> }
          ) }
        )> }
      )>> }
    ) }
  )> }
);

export type UpdatePerformerMutationVariables = Exact<{
  performer: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  mbid?: Maybe<Scalars['String']>;
}>;


export type UpdatePerformerMutation = (
  { __typename?: 'Mutation' }
  & { updatePerformer?: Maybe<(
    { __typename?: 'UpdatePerformerPayload' }
    & { performer?: Maybe<(
      { __typename?: 'PerformerType' }
      & Pick<PerformerType, 'id' | 'name' | 'mbid' | 'lastUpdated'>
    )> }
  )> }
);

export type ReviewAlbumMutationVariables = Exact<{
  album: Scalars['ID'];
  review: Scalars['String'];
  rating: Scalars['Float'];
}>;


export type ReviewAlbumMutation = (
  { __typename?: 'Mutation' }
  & { createReview?: Maybe<(
    { __typename?: 'CreateReviewPayload' }
    & { review?: Maybe<(
      { __typename?: 'ReviewType' }
      & Pick<ReviewType, 'id'>
    )> }
  )> }
);

export type ReadReviewsQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
}>;


export type ReadReviewsQuery = (
  { __typename?: 'Query' }
  & { reviewSet?: Maybe<(
    { __typename?: 'ReviewTypeConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'ReviewTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'ReviewType' }
        & Pick<ReviewType, 'id' | 'review' | 'rating' | 'created' | 'lastUpdated'>
        & { album: (
          { __typename?: 'AlbumType' }
          & Pick<AlbumType, 'id' | 'name' | 'year'>
          & { image: Array<(
            { __typename?: 'ImageType' }
            & Pick<ImageType, 'url' | 'size'>
          )>, performer: (
            { __typename?: 'PerformerType' }
            & Pick<PerformerType, 'id' | 'name' | 'created'>
          ) }
        ), user: (
          { __typename?: 'UserType' }
          & Pick<UserType, 'username'>
        ) }
      )> }
    )>> }
  )> }
);


export const TokenAuthDocument = gql`
    mutation TokenAuth($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    payload
    token
  }
}
    `;
export type TokenAuthMutationFn = Apollo.MutationFunction<TokenAuthMutation, TokenAuthMutationVariables>;

/**
 * __useTokenAuthMutation__
 *
 * To run a mutation, you first call `useTokenAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenAuthMutation, { data, loading, error }] = useTokenAuthMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useTokenAuthMutation(baseOptions?: Apollo.MutationHookOptions<TokenAuthMutation, TokenAuthMutationVariables>) {
        return Apollo.useMutation<TokenAuthMutation, TokenAuthMutationVariables>(TokenAuthDocument, baseOptions);
      }
export type TokenAuthMutationHookResult = ReturnType<typeof useTokenAuthMutation>;
export type TokenAuthMutationResult = Apollo.MutationResult<TokenAuthMutation>;
export type TokenAuthMutationOptions = Apollo.BaseMutationOptions<TokenAuthMutation, TokenAuthMutationVariables>;
export const CreateAlbumDocument = gql`
    mutation CreateAlbum($performer: ID!, $name: String!, $year: Int!, $mbid: String!) {
  createAlbum(input: {performer: $performer, name: $name, year: $year, mbid: $mbid}) {
    album {
      id
    }
  }
}
    `;
export type CreateAlbumMutationFn = Apollo.MutationFunction<CreateAlbumMutation, CreateAlbumMutationVariables>;

/**
 * __useCreateAlbumMutation__
 *
 * To run a mutation, you first call `useCreateAlbumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAlbumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAlbumMutation, { data, loading, error }] = useCreateAlbumMutation({
 *   variables: {
 *      performer: // value for 'performer'
 *      name: // value for 'name'
 *      year: // value for 'year'
 *      mbid: // value for 'mbid'
 *   },
 * });
 */
export function useCreateAlbumMutation(baseOptions?: Apollo.MutationHookOptions<CreateAlbumMutation, CreateAlbumMutationVariables>) {
        return Apollo.useMutation<CreateAlbumMutation, CreateAlbumMutationVariables>(CreateAlbumDocument, baseOptions);
      }
export type CreateAlbumMutationHookResult = ReturnType<typeof useCreateAlbumMutation>;
export type CreateAlbumMutationResult = Apollo.MutationResult<CreateAlbumMutation>;
export type CreateAlbumMutationOptions = Apollo.BaseMutationOptions<CreateAlbumMutation, CreateAlbumMutationVariables>;
export const DeleteAlbumDocument = gql`
    mutation DeleteAlbum($id: ID!) {
  deleteAlbum(input: {album: $id}) {
    success
  }
}
    `;
export type DeleteAlbumMutationFn = Apollo.MutationFunction<DeleteAlbumMutation, DeleteAlbumMutationVariables>;

/**
 * __useDeleteAlbumMutation__
 *
 * To run a mutation, you first call `useDeleteAlbumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAlbumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAlbumMutation, { data, loading, error }] = useDeleteAlbumMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAlbumMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAlbumMutation, DeleteAlbumMutationVariables>) {
        return Apollo.useMutation<DeleteAlbumMutation, DeleteAlbumMutationVariables>(DeleteAlbumDocument, baseOptions);
      }
export type DeleteAlbumMutationHookResult = ReturnType<typeof useDeleteAlbumMutation>;
export type DeleteAlbumMutationResult = Apollo.MutationResult<DeleteAlbumMutation>;
export type DeleteAlbumMutationOptions = Apollo.BaseMutationOptions<DeleteAlbumMutation, DeleteAlbumMutationVariables>;
export const AlbumDetailsDocument = gql`
    query AlbumDetails($album: ID!) {
  album(id: $album) {
    id
    performer {
      id
      name
      created
    }
    name
    year
    image {
      url
    }
    wiki {
      published
      summary
    }
    url
    created
    reviewSet {
      edges {
        node {
          id
          user {
            id
            username
          }
          review
          rating
          lastUpdated
        }
      }
    }
  }
}
    `;

/**
 * __useAlbumDetailsQuery__
 *
 * To run a query within a React component, call `useAlbumDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumDetailsQuery({
 *   variables: {
 *      album: // value for 'album'
 *   },
 * });
 */
export function useAlbumDetailsQuery(baseOptions?: Apollo.QueryHookOptions<AlbumDetailsQuery, AlbumDetailsQueryVariables>) {
        return Apollo.useQuery<AlbumDetailsQuery, AlbumDetailsQueryVariables>(AlbumDetailsDocument, baseOptions);
      }
export function useAlbumDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlbumDetailsQuery, AlbumDetailsQueryVariables>) {
          return Apollo.useLazyQuery<AlbumDetailsQuery, AlbumDetailsQueryVariables>(AlbumDetailsDocument, baseOptions);
        }
export type AlbumDetailsQueryHookResult = ReturnType<typeof useAlbumDetailsQuery>;
export type AlbumDetailsLazyQueryHookResult = ReturnType<typeof useAlbumDetailsLazyQuery>;
export type AlbumDetailsQueryResult = Apollo.QueryResult<AlbumDetailsQuery, AlbumDetailsQueryVariables>;
export const ReadAlbumMbidDocument = gql`
    query ReadAlbumMbid($album: String!, $limit: Int) {
  searchAlbums(album: $album, limit: $limit) {
    page {
      artist
      name
      mbid
    }
  }
}
    `;

/**
 * __useReadAlbumMbidQuery__
 *
 * To run a query within a React component, call `useReadAlbumMbidQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadAlbumMbidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReadAlbumMbidQuery({
 *   variables: {
 *      album: // value for 'album'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useReadAlbumMbidQuery(baseOptions?: Apollo.QueryHookOptions<ReadAlbumMbidQuery, ReadAlbumMbidQueryVariables>) {
        return Apollo.useQuery<ReadAlbumMbidQuery, ReadAlbumMbidQueryVariables>(ReadAlbumMbidDocument, baseOptions);
      }
export function useReadAlbumMbidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReadAlbumMbidQuery, ReadAlbumMbidQueryVariables>) {
          return Apollo.useLazyQuery<ReadAlbumMbidQuery, ReadAlbumMbidQueryVariables>(ReadAlbumMbidDocument, baseOptions);
        }
export type ReadAlbumMbidQueryHookResult = ReturnType<typeof useReadAlbumMbidQuery>;
export type ReadAlbumMbidLazyQueryHookResult = ReturnType<typeof useReadAlbumMbidLazyQuery>;
export type ReadAlbumMbidQueryResult = Apollo.QueryResult<ReadAlbumMbidQuery, ReadAlbumMbidQueryVariables>;
export const ReadAlbumsDocument = gql`
    query ReadAlbums($after: String, $first: Int, $name: String, $yearGt: Float, $yearLt: Float) {
  albumSet(after: $after, first: $first, name: $name, year_Gt: $yearGt, year_Lt: $yearLt) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        mbid
        performer {
          id
          name
        }
        name
        image {
          url
        }
        created
        year
      }
    }
  }
}
    `;

/**
 * __useReadAlbumsQuery__
 *
 * To run a query within a React component, call `useReadAlbumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadAlbumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReadAlbumsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      name: // value for 'name'
 *      yearGt: // value for 'yearGt'
 *      yearLt: // value for 'yearLt'
 *   },
 * });
 */
export function useReadAlbumsQuery(baseOptions?: Apollo.QueryHookOptions<ReadAlbumsQuery, ReadAlbumsQueryVariables>) {
        return Apollo.useQuery<ReadAlbumsQuery, ReadAlbumsQueryVariables>(ReadAlbumsDocument, baseOptions);
      }
export function useReadAlbumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReadAlbumsQuery, ReadAlbumsQueryVariables>) {
          return Apollo.useLazyQuery<ReadAlbumsQuery, ReadAlbumsQueryVariables>(ReadAlbumsDocument, baseOptions);
        }
export type ReadAlbumsQueryHookResult = ReturnType<typeof useReadAlbumsQuery>;
export type ReadAlbumsLazyQueryHookResult = ReturnType<typeof useReadAlbumsLazyQuery>;
export type ReadAlbumsQueryResult = Apollo.QueryResult<ReadAlbumsQuery, ReadAlbumsQueryVariables>;
export const ReadRandomAlbumsDocument = gql`
    query ReadRandomAlbums($after: String, $first: Int, $yearGt: Float, $yearLt: Float) {
  randomAlbumSet(after: $after, first: $first, year_Gt: $yearGt, year_Lt: $yearLt) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        mbid
        performer {
          id
          name
        }
        name
        image {
          url
        }
        created
        year
      }
    }
  }
}
    `;

/**
 * __useReadRandomAlbumsQuery__
 *
 * To run a query within a React component, call `useReadRandomAlbumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadRandomAlbumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReadRandomAlbumsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      yearGt: // value for 'yearGt'
 *      yearLt: // value for 'yearLt'
 *   },
 * });
 */
export function useReadRandomAlbumsQuery(baseOptions?: Apollo.QueryHookOptions<ReadRandomAlbumsQuery, ReadRandomAlbumsQueryVariables>) {
        return Apollo.useQuery<ReadRandomAlbumsQuery, ReadRandomAlbumsQueryVariables>(ReadRandomAlbumsDocument, baseOptions);
      }
export function useReadRandomAlbumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReadRandomAlbumsQuery, ReadRandomAlbumsQueryVariables>) {
          return Apollo.useLazyQuery<ReadRandomAlbumsQuery, ReadRandomAlbumsQueryVariables>(ReadRandomAlbumsDocument, baseOptions);
        }
export type ReadRandomAlbumsQueryHookResult = ReturnType<typeof useReadRandomAlbumsQuery>;
export type ReadRandomAlbumsLazyQueryHookResult = ReturnType<typeof useReadRandomAlbumsLazyQuery>;
export type ReadRandomAlbumsQueryResult = Apollo.QueryResult<ReadRandomAlbumsQuery, ReadRandomAlbumsQueryVariables>;
export const UpdateAlbumDocument = gql`
    mutation UpdateAlbum($id: ID!, $name: String, $year: Int, $mbid: String) {
  updateAlbum(input: {album: $id, name: $name, year: $year, mbid: $mbid}) {
    album {
      id
      year
      mbid
      name
      lastUpdated
    }
  }
}
    `;
export type UpdateAlbumMutationFn = Apollo.MutationFunction<UpdateAlbumMutation, UpdateAlbumMutationVariables>;

/**
 * __useUpdateAlbumMutation__
 *
 * To run a mutation, you first call `useUpdateAlbumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAlbumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAlbumMutation, { data, loading, error }] = useUpdateAlbumMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      year: // value for 'year'
 *      mbid: // value for 'mbid'
 *   },
 * });
 */
export function useUpdateAlbumMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAlbumMutation, UpdateAlbumMutationVariables>) {
        return Apollo.useMutation<UpdateAlbumMutation, UpdateAlbumMutationVariables>(UpdateAlbumDocument, baseOptions);
      }
export type UpdateAlbumMutationHookResult = ReturnType<typeof useUpdateAlbumMutation>;
export type UpdateAlbumMutationResult = Apollo.MutationResult<UpdateAlbumMutation>;
export type UpdateAlbumMutationOptions = Apollo.BaseMutationOptions<UpdateAlbumMutation, UpdateAlbumMutationVariables>;
export const CreatePerformerDocument = gql`
    mutation CreatePerformer($name: String!, $albums: [AlbumInputType!], $mbid: String!) {
  createPerformer(input: {name: $name, mbid: $mbid, albums: $albums}) {
    performer {
      id
      name
      created
      mbid
    }
  }
}
    `;
export type CreatePerformerMutationFn = Apollo.MutationFunction<CreatePerformerMutation, CreatePerformerMutationVariables>;

/**
 * __useCreatePerformerMutation__
 *
 * To run a mutation, you first call `useCreatePerformerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePerformerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPerformerMutation, { data, loading, error }] = useCreatePerformerMutation({
 *   variables: {
 *      name: // value for 'name'
 *      albums: // value for 'albums'
 *      mbid: // value for 'mbid'
 *   },
 * });
 */
export function useCreatePerformerMutation(baseOptions?: Apollo.MutationHookOptions<CreatePerformerMutation, CreatePerformerMutationVariables>) {
        return Apollo.useMutation<CreatePerformerMutation, CreatePerformerMutationVariables>(CreatePerformerDocument, baseOptions);
      }
export type CreatePerformerMutationHookResult = ReturnType<typeof useCreatePerformerMutation>;
export type CreatePerformerMutationResult = Apollo.MutationResult<CreatePerformerMutation>;
export type CreatePerformerMutationOptions = Apollo.BaseMutationOptions<CreatePerformerMutation, CreatePerformerMutationVariables>;
export const DeletePerformerDocument = gql`
    mutation DeletePerformer($performer: ID!) {
  deletePerformer(input: {performer: $performer}) {
    success
  }
}
    `;
export type DeletePerformerMutationFn = Apollo.MutationFunction<DeletePerformerMutation, DeletePerformerMutationVariables>;

/**
 * __useDeletePerformerMutation__
 *
 * To run a mutation, you first call `useDeletePerformerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePerformerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePerformerMutation, { data, loading, error }] = useDeletePerformerMutation({
 *   variables: {
 *      performer: // value for 'performer'
 *   },
 * });
 */
export function useDeletePerformerMutation(baseOptions?: Apollo.MutationHookOptions<DeletePerformerMutation, DeletePerformerMutationVariables>) {
        return Apollo.useMutation<DeletePerformerMutation, DeletePerformerMutationVariables>(DeletePerformerDocument, baseOptions);
      }
export type DeletePerformerMutationHookResult = ReturnType<typeof useDeletePerformerMutation>;
export type DeletePerformerMutationResult = Apollo.MutationResult<DeletePerformerMutation>;
export type DeletePerformerMutationOptions = Apollo.BaseMutationOptions<DeletePerformerMutation, DeletePerformerMutationVariables>;
export const ReadPerformerAlbumsDocument = gql`
    query ReadPerformerAlbums($id: ID!) {
  performer(id: $id) {
    id
    name
    bio {
      summary
      content
    }
    albumSet {
      edges {
        node {
          id
          name
          year
          mbid
          image {
            url
          }
          performer {
            id
            name
          }
        }
      }
    }
  }
}
    `;

/**
 * __useReadPerformerAlbumsQuery__
 *
 * To run a query within a React component, call `useReadPerformerAlbumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadPerformerAlbumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReadPerformerAlbumsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReadPerformerAlbumsQuery(baseOptions?: Apollo.QueryHookOptions<ReadPerformerAlbumsQuery, ReadPerformerAlbumsQueryVariables>) {
        return Apollo.useQuery<ReadPerformerAlbumsQuery, ReadPerformerAlbumsQueryVariables>(ReadPerformerAlbumsDocument, baseOptions);
      }
export function useReadPerformerAlbumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReadPerformerAlbumsQuery, ReadPerformerAlbumsQueryVariables>) {
          return Apollo.useLazyQuery<ReadPerformerAlbumsQuery, ReadPerformerAlbumsQueryVariables>(ReadPerformerAlbumsDocument, baseOptions);
        }
export type ReadPerformerAlbumsQueryHookResult = ReturnType<typeof useReadPerformerAlbumsQuery>;
export type ReadPerformerAlbumsLazyQueryHookResult = ReturnType<typeof useReadPerformerAlbumsLazyQuery>;
export type ReadPerformerAlbumsQueryResult = Apollo.QueryResult<ReadPerformerAlbumsQuery, ReadPerformerAlbumsQueryVariables>;
export const ReadPerformerMbidDocument = gql`
    query ReadPerformerMbid($name: String!) {
  performerCorrection(performer: $name) {
    name
    mbid
  }
}
    `;

/**
 * __useReadPerformerMbidQuery__
 *
 * To run a query within a React component, call `useReadPerformerMbidQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadPerformerMbidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReadPerformerMbidQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useReadPerformerMbidQuery(baseOptions?: Apollo.QueryHookOptions<ReadPerformerMbidQuery, ReadPerformerMbidQueryVariables>) {
        return Apollo.useQuery<ReadPerformerMbidQuery, ReadPerformerMbidQueryVariables>(ReadPerformerMbidDocument, baseOptions);
      }
export function useReadPerformerMbidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReadPerformerMbidQuery, ReadPerformerMbidQueryVariables>) {
          return Apollo.useLazyQuery<ReadPerformerMbidQuery, ReadPerformerMbidQueryVariables>(ReadPerformerMbidDocument, baseOptions);
        }
export type ReadPerformerMbidQueryHookResult = ReturnType<typeof useReadPerformerMbidQuery>;
export type ReadPerformerMbidLazyQueryHookResult = ReturnType<typeof useReadPerformerMbidLazyQuery>;
export type ReadPerformerMbidQueryResult = Apollo.QueryResult<ReadPerformerMbidQuery, ReadPerformerMbidQueryVariables>;
export const ReadPerformersDocument = gql`
    query ReadPerformers($after: String, $first: Int, $name: String) {
  performerSet(after: $after, first: $first, name: $name) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        id
        name
        image {
          url
          size
        }
        created
        albumSet {
          edges {
            node {
              id
              mbid
              name
              year
              image {
                url
              }
              created
              performer {
                id
                name
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useReadPerformersQuery__
 *
 * To run a query within a React component, call `useReadPerformersQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadPerformersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReadPerformersQuery({
 *   variables: {
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useReadPerformersQuery(baseOptions?: Apollo.QueryHookOptions<ReadPerformersQuery, ReadPerformersQueryVariables>) {
        return Apollo.useQuery<ReadPerformersQuery, ReadPerformersQueryVariables>(ReadPerformersDocument, baseOptions);
      }
export function useReadPerformersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReadPerformersQuery, ReadPerformersQueryVariables>) {
          return Apollo.useLazyQuery<ReadPerformersQuery, ReadPerformersQueryVariables>(ReadPerformersDocument, baseOptions);
        }
export type ReadPerformersQueryHookResult = ReturnType<typeof useReadPerformersQuery>;
export type ReadPerformersLazyQueryHookResult = ReturnType<typeof useReadPerformersLazyQuery>;
export type ReadPerformersQueryResult = Apollo.QueryResult<ReadPerformersQuery, ReadPerformersQueryVariables>;
export const ReadPerformerDocument = gql`
    query ReadPerformer($id: ID!) {
  performer(id: $id) {
    id
    name
    bio {
      summary
    }
    albumSet {
      edges {
        node {
          id
          reviewSet {
            edges {
              node {
                id
                user {
                  id
                  username
                }
                review
                rating
                lastUpdated
                created
                album {
                  id
                  image {
                    url
                  }
                  performer {
                    id
                    name
                  }
                  year
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useReadPerformerQuery__
 *
 * To run a query within a React component, call `useReadPerformerQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadPerformerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReadPerformerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReadPerformerQuery(baseOptions?: Apollo.QueryHookOptions<ReadPerformerQuery, ReadPerformerQueryVariables>) {
        return Apollo.useQuery<ReadPerformerQuery, ReadPerformerQueryVariables>(ReadPerformerDocument, baseOptions);
      }
export function useReadPerformerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReadPerformerQuery, ReadPerformerQueryVariables>) {
          return Apollo.useLazyQuery<ReadPerformerQuery, ReadPerformerQueryVariables>(ReadPerformerDocument, baseOptions);
        }
export type ReadPerformerQueryHookResult = ReturnType<typeof useReadPerformerQuery>;
export type ReadPerformerLazyQueryHookResult = ReturnType<typeof useReadPerformerLazyQuery>;
export type ReadPerformerQueryResult = Apollo.QueryResult<ReadPerformerQuery, ReadPerformerQueryVariables>;
export const UpdatePerformerDocument = gql`
    mutation UpdatePerformer($performer: ID!, $name: String, $mbid: String) {
  updatePerformer(input: {performer: $performer, name: $name, mbid: $mbid}) {
    performer {
      id
      name
      mbid
      lastUpdated
    }
  }
}
    `;
export type UpdatePerformerMutationFn = Apollo.MutationFunction<UpdatePerformerMutation, UpdatePerformerMutationVariables>;

/**
 * __useUpdatePerformerMutation__
 *
 * To run a mutation, you first call `useUpdatePerformerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePerformerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePerformerMutation, { data, loading, error }] = useUpdatePerformerMutation({
 *   variables: {
 *      performer: // value for 'performer'
 *      name: // value for 'name'
 *      mbid: // value for 'mbid'
 *   },
 * });
 */
export function useUpdatePerformerMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePerformerMutation, UpdatePerformerMutationVariables>) {
        return Apollo.useMutation<UpdatePerformerMutation, UpdatePerformerMutationVariables>(UpdatePerformerDocument, baseOptions);
      }
export type UpdatePerformerMutationHookResult = ReturnType<typeof useUpdatePerformerMutation>;
export type UpdatePerformerMutationResult = Apollo.MutationResult<UpdatePerformerMutation>;
export type UpdatePerformerMutationOptions = Apollo.BaseMutationOptions<UpdatePerformerMutation, UpdatePerformerMutationVariables>;
export const ReviewAlbumDocument = gql`
    mutation ReviewAlbum($album: ID!, $review: String!, $rating: Float!) {
  createReview(input: {album: $album, review: $review, rating: $rating}) {
    review {
      id
    }
  }
}
    `;
export type ReviewAlbumMutationFn = Apollo.MutationFunction<ReviewAlbumMutation, ReviewAlbumMutationVariables>;

/**
 * __useReviewAlbumMutation__
 *
 * To run a mutation, you first call `useReviewAlbumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReviewAlbumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reviewAlbumMutation, { data, loading, error }] = useReviewAlbumMutation({
 *   variables: {
 *      album: // value for 'album'
 *      review: // value for 'review'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useReviewAlbumMutation(baseOptions?: Apollo.MutationHookOptions<ReviewAlbumMutation, ReviewAlbumMutationVariables>) {
        return Apollo.useMutation<ReviewAlbumMutation, ReviewAlbumMutationVariables>(ReviewAlbumDocument, baseOptions);
      }
export type ReviewAlbumMutationHookResult = ReturnType<typeof useReviewAlbumMutation>;
export type ReviewAlbumMutationResult = Apollo.MutationResult<ReviewAlbumMutation>;
export type ReviewAlbumMutationOptions = Apollo.BaseMutationOptions<ReviewAlbumMutation, ReviewAlbumMutationVariables>;
export const ReadReviewsDocument = gql`
    query ReadReviews($after: String, $first: Int, $orderBy: String) {
  reviewSet(after: $after, first: $first, orderBy: $orderBy) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        album {
          id
          name
          image {
            url
            size
          }
          year
          performer {
            id
            name
            created
          }
        }
        user {
          username
        }
        review
        rating
        created
        lastUpdated
      }
    }
  }
}
    `;

/**
 * __useReadReviewsQuery__
 *
 * To run a query within a React component, call `useReadReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReadReviewsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useReadReviewsQuery(baseOptions?: Apollo.QueryHookOptions<ReadReviewsQuery, ReadReviewsQueryVariables>) {
        return Apollo.useQuery<ReadReviewsQuery, ReadReviewsQueryVariables>(ReadReviewsDocument, baseOptions);
      }
export function useReadReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReadReviewsQuery, ReadReviewsQueryVariables>) {
          return Apollo.useLazyQuery<ReadReviewsQuery, ReadReviewsQueryVariables>(ReadReviewsDocument, baseOptions);
        }
export type ReadReviewsQueryHookResult = ReturnType<typeof useReadReviewsQuery>;
export type ReadReviewsLazyQueryHookResult = ReturnType<typeof useReadReviewsLazyQuery>;
export type ReadReviewsQueryResult = Apollo.QueryResult<ReadReviewsQuery, ReadReviewsQueryVariables>;