import React, { ReactNode } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { Theme, CssBaseline } from '@material-ui/core'
import themes from '../theme'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo'

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
