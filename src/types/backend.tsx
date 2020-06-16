import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type AlbumInputType = {
  title: Scalars['String'];
  year: Scalars['Int'];
  coverUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AlbumType = Node & {
  __typename?: 'AlbumType';
  /** The ID of the object. */
  id: Scalars['ID'];
  performer: PerformerType;
  title: Scalars['String'];
  year: Scalars['Int'];
  coverUrl?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  created: Scalars['DateTime'];
  lastUpdated: Scalars['DateTime'];
  user?: Maybe<UserType>;
  reviewSet: ReviewTypeConnection;
};


export type AlbumTypeReviewSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type AlbumTypeConnection = {
  __typename?: 'AlbumTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AlbumTypeEdge>>;
};

/** A Relay edge containing a `AlbumType` and its cursor. */
export type AlbumTypeEdge = {
  __typename?: 'AlbumTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AlbumType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CreateAlbumInput = {
  performer: Scalars['ID'];
  title: Scalars['String'];
  year: Scalars['Int'];
  coverUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateAlbumPayload = {
  __typename?: 'CreateAlbumPayload';
  album?: Maybe<AlbumType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePerformerInput = {
  name: Scalars['String'];
  logoUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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


export type Mutation = {
  __typename?: 'Mutation';
  /** Obtain JSON Web Token mutation */
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

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type PerformerType = Node & {
  __typename?: 'PerformerType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  logoUrl?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  created: Scalars['DateTime'];
  lastUpdated: Scalars['DateTime'];
  user?: Maybe<UserType>;
  albumSet: AlbumTypeConnection;
};


export type PerformerTypeAlbumSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PerformerTypeConnection = {
  __typename?: 'PerformerTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PerformerTypeEdge>>;
};

/** A Relay edge containing a `PerformerType` and its cursor. */
export type PerformerTypeEdge = {
  __typename?: 'PerformerTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PerformerType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  userSet?: Maybe<UserTypeConnection>;
  /** The ID of the object */
  user?: Maybe<UserType>;
  reviewSet?: Maybe<ReviewTypeConnection>;
  /** The ID of the object */
  review?: Maybe<ReviewType>;
  performerSet?: Maybe<PerformerTypeConnection>;
  /** The ID of the object */
  performer?: Maybe<PerformerType>;
  albumSet?: Maybe<AlbumTypeConnection>;
  randomAlbumSet?: Maybe<AlbumTypeConnection>;
  /** The ID of the object */
  album?: Maybe<AlbumType>;
  _service?: Maybe<_Service>;
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
  title?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryRandomAlbumSetArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID'];
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type ReviewType = Node & {
  __typename?: 'ReviewType';
  /** The ID of the object. */
  id: Scalars['ID'];
  album: AlbumType;
  user: UserType;
  review: Scalars['String'];
  rating: Scalars['Float'];
  created: Scalars['DateTime'];
  lastUpdated: Scalars['DateTime'];
};

export type ReviewTypeConnection = {
  __typename?: 'ReviewTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ReviewTypeEdge>>;
};

/** A Relay edge containing a `ReviewType` and its cursor. */
export type ReviewTypeEdge = {
  __typename?: 'ReviewTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ReviewType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type UpdateAlbumInput = {
  album: Scalars['ID'];
  performer?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  coverUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateAlbumPayload = {
  __typename?: 'UpdateAlbumPayload';
  album?: Maybe<AlbumType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePerformerInput = {
  performer: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
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
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserTypeEdge>>;
};

/** A Relay edge containing a `UserType` and its cursor. */
export type UserTypeEdge = {
  __typename?: 'UserTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
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

export type AlbumDetailsQueryVariables = Exact<{
  album: Scalars['ID'];
}>;


export type AlbumDetailsQuery = (
  { __typename?: 'Query' }
  & { album?: Maybe<(
    { __typename?: 'AlbumType' }
    & Pick<AlbumType, 'id' | 'title' | 'year' | 'coverUrl' | 'description' | 'created'>
    & { performer: (
      { __typename?: 'PerformerType' }
      & Pick<PerformerType, 'id' | 'name' | 'description' | 'created'>
    ), reviewSet: (
      { __typename?: 'ReviewTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'ReviewTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'ReviewType' }
          & Pick<ReviewType, 'id' | 'review' | 'rating' | 'created'>
          & { user: (
            { __typename?: 'UserType' }
            & Pick<UserType, 'id' | 'username'>
          ) }
        )> }
      )>> }
    ) }
  )> }
);

export type ReadRandomAlbumsQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
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
        & Pick<AlbumType, 'id' | 'title' | 'coverUrl' | 'description' | 'created' | 'year'>
        & { performer: (
          { __typename?: 'PerformerType' }
          & Pick<PerformerType, 'id' | 'name'>
        ) }
      )> }
    )>> }
  )> }
);

export type CreatePerformerMutationVariables = Exact<{
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  albums?: Maybe<Array<AlbumInputType>>;
}>;


export type CreatePerformerMutation = (
  { __typename?: 'Mutation' }
  & { createPerformer?: Maybe<(
    { __typename?: 'CreatePerformerPayload' }
    & { performer?: Maybe<(
      { __typename?: 'PerformerType' }
      & Pick<PerformerType, 'id' | 'name' | 'description' | 'created'>
    )> }
  )> }
);

export type ReadPerformersQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
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
        & Pick<PerformerType, 'id' | 'name' | 'logoUrl' | 'description' | 'created'>
        & { albumSet: (
          { __typename?: 'AlbumTypeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'AlbumTypeEdge' }
            & { node?: Maybe<(
              { __typename?: 'AlbumType' }
              & Pick<AlbumType, 'id' | 'title' | 'year' | 'coverUrl' | 'description' | 'created'>
              & { performer: (
                { __typename?: 'PerformerType' }
                & Pick<PerformerType, 'name'>
              ) }
            )> }
          )>> }
        ) }
      )> }
    )>> }
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


export const TokenAuthDocument = gql`
    mutation TokenAuth($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    payload
    token
  }
}
    `;
export type TokenAuthMutationFn = ApolloReactCommon.MutationFunction<TokenAuthMutation, TokenAuthMutationVariables>;

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
export function useTokenAuthMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TokenAuthMutation, TokenAuthMutationVariables>) {
        return ApolloReactHooks.useMutation<TokenAuthMutation, TokenAuthMutationVariables>(TokenAuthDocument, baseOptions);
      }
export type TokenAuthMutationHookResult = ReturnType<typeof useTokenAuthMutation>;
export type TokenAuthMutationResult = ApolloReactCommon.MutationResult<TokenAuthMutation>;
export type TokenAuthMutationOptions = ApolloReactCommon.BaseMutationOptions<TokenAuthMutation, TokenAuthMutationVariables>;
export const AlbumDetailsDocument = gql`
    query AlbumDetails($album: ID!) {
  album(id: $album) {
    id
    performer {
      id
      name
      description
      created
    }
    title
    year
    coverUrl
    description
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
          created
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
export function useAlbumDetailsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AlbumDetailsQuery, AlbumDetailsQueryVariables>) {
        return ApolloReactHooks.useQuery<AlbumDetailsQuery, AlbumDetailsQueryVariables>(AlbumDetailsDocument, baseOptions);
      }
export function useAlbumDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AlbumDetailsQuery, AlbumDetailsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AlbumDetailsQuery, AlbumDetailsQueryVariables>(AlbumDetailsDocument, baseOptions);
        }
export type AlbumDetailsQueryHookResult = ReturnType<typeof useAlbumDetailsQuery>;
export type AlbumDetailsLazyQueryHookResult = ReturnType<typeof useAlbumDetailsLazyQuery>;
export type AlbumDetailsQueryResult = ApolloReactCommon.QueryResult<AlbumDetailsQuery, AlbumDetailsQueryVariables>;
export const ReadRandomAlbumsDocument = gql`
    query ReadRandomAlbums($after: String, $first: Int) {
  randomAlbumSet(after: $after, first: $first) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        performer {
          id
          name
        }
        title
        coverUrl
        description
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
 *   },
 * });
 */
export function useReadRandomAlbumsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ReadRandomAlbumsQuery, ReadRandomAlbumsQueryVariables>) {
        return ApolloReactHooks.useQuery<ReadRandomAlbumsQuery, ReadRandomAlbumsQueryVariables>(ReadRandomAlbumsDocument, baseOptions);
      }
export function useReadRandomAlbumsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReadRandomAlbumsQuery, ReadRandomAlbumsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ReadRandomAlbumsQuery, ReadRandomAlbumsQueryVariables>(ReadRandomAlbumsDocument, baseOptions);
        }
export type ReadRandomAlbumsQueryHookResult = ReturnType<typeof useReadRandomAlbumsQuery>;
export type ReadRandomAlbumsLazyQueryHookResult = ReturnType<typeof useReadRandomAlbumsLazyQuery>;
export type ReadRandomAlbumsQueryResult = ApolloReactCommon.QueryResult<ReadRandomAlbumsQuery, ReadRandomAlbumsQueryVariables>;
export const CreatePerformerDocument = gql`
    mutation CreatePerformer($name: String!, $description: String, $albums: [AlbumInputType!]) {
  createPerformer(input: {name: $name, description: $description, albums: $albums}) {
    performer {
      id
      name
      description
      created
    }
  }
}
    `;
export type CreatePerformerMutationFn = ApolloReactCommon.MutationFunction<CreatePerformerMutation, CreatePerformerMutationVariables>;

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
 *      description: // value for 'description'
 *      albums: // value for 'albums'
 *   },
 * });
 */
export function useCreatePerformerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePerformerMutation, CreatePerformerMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePerformerMutation, CreatePerformerMutationVariables>(CreatePerformerDocument, baseOptions);
      }
export type CreatePerformerMutationHookResult = ReturnType<typeof useCreatePerformerMutation>;
export type CreatePerformerMutationResult = ApolloReactCommon.MutationResult<CreatePerformerMutation>;
export type CreatePerformerMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePerformerMutation, CreatePerformerMutationVariables>;
export const ReadPerformersDocument = gql`
    query ReadPerformers($after: String, $first: Int) {
  performerSet(after: $after, first: $first) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        id
        name
        logoUrl
        description
        created
        albumSet {
          edges {
            node {
              id
              title
              year
              coverUrl
              description
              created
              performer {
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
 *   },
 * });
 */
export function useReadPerformersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ReadPerformersQuery, ReadPerformersQueryVariables>) {
        return ApolloReactHooks.useQuery<ReadPerformersQuery, ReadPerformersQueryVariables>(ReadPerformersDocument, baseOptions);
      }
export function useReadPerformersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReadPerformersQuery, ReadPerformersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ReadPerformersQuery, ReadPerformersQueryVariables>(ReadPerformersDocument, baseOptions);
        }
export type ReadPerformersQueryHookResult = ReturnType<typeof useReadPerformersQuery>;
export type ReadPerformersLazyQueryHookResult = ReturnType<typeof useReadPerformersLazyQuery>;
export type ReadPerformersQueryResult = ApolloReactCommon.QueryResult<ReadPerformersQuery, ReadPerformersQueryVariables>;
export const ReviewAlbumDocument = gql`
    mutation ReviewAlbum($album: ID!, $review: String!, $rating: Float!) {
  createReview(input: {album: $album, review: $review, rating: $rating}) {
    review {
      id
    }
  }
}
    `;
export type ReviewAlbumMutationFn = ApolloReactCommon.MutationFunction<ReviewAlbumMutation, ReviewAlbumMutationVariables>;

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
export function useReviewAlbumMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReviewAlbumMutation, ReviewAlbumMutationVariables>) {
        return ApolloReactHooks.useMutation<ReviewAlbumMutation, ReviewAlbumMutationVariables>(ReviewAlbumDocument, baseOptions);
      }
export type ReviewAlbumMutationHookResult = ReturnType<typeof useReviewAlbumMutation>;
export type ReviewAlbumMutationResult = ApolloReactCommon.MutationResult<ReviewAlbumMutation>;
export type ReviewAlbumMutationOptions = ApolloReactCommon.BaseMutationOptions<ReviewAlbumMutation, ReviewAlbumMutationVariables>;