import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/link-context'
import fetch from 'isomorphic-fetch'
import { getToken } from './auth'

const httpLink = new HttpLink({
  uri: 'https://music-reviews-federation.herokuapp.com/graphql',
  fetch,
})
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getToken()
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : '',
    },
  }
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})
