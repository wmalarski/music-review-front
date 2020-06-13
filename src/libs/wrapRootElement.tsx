import React, { ReactNode } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { Theme, CssBaseline } from '@material-ui/core'
import fetch from 'isomorphic-fetch'
import themes from '../theme'
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://review-music.herokuapp.com/',
    fetch,
  }),
})

const wrapRootElement = ({ element }: { element: ReactNode }) => {
  function getTheme(): Theme {
    const isServer = typeof window === 'undefined'

    let theme: 'light' | 'dark' = 'light'

    if (!isServer) {
      try {
        const json = window.localStorage.getItem('theme')
        const item = json ? JSON.parse(json) : theme
        if (['light', 'dark'].includes(item)) {
          theme = item
        }
      } catch (error) {
        console.log(error)
      }
    }

    return themes[theme]
  }

  console.log('wrapRootElement', client)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={getTheme()}>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default wrapRootElement
