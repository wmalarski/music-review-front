import React, { FC } from 'react'
import { navigate } from 'gatsby'
import Layout from '../layout'
import SEO from '../components/seo'
import { makeStyles, Backdrop, CircularProgress } from '@material-ui/core'
import SignIn from '../components/account/sign-in'
import { useTokenAuthMutation } from '../types/backend'
import { setToken } from '../libs/auth'

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

const SignInPage: FC = () => {
  const classes = useStyles()
  const [tokenAuthMutation, { loading, error }] = useTokenAuthMutation()

  return (
    <Layout container>
      <SEO title="Login" />
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <SignIn
        onSignIn={credencials => {
          tokenAuthMutation({
            variables: {
              username: credencials.username,
              password: credencials.password,
            },
          }).then(result => {
            const token = result.data?.tokenAuth?.token
            if (token) {
              setToken(token)
              navigate('/')
            }
          })
        }}
        errorMessage={error?.message ?? null}
      />
    </Layout>
  )
}

export default SignInPage
