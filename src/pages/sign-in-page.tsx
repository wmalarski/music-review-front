import React, { FC } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Layout from '../layout'
import SEO from '../components/seo'
import { Typography, Link } from '@material-ui/core'
import SignIn from '../components/account/sign-in'
import { useTokenAuthMutation } from '../types/backend'

const SignInPage: FC = () => {
  const [tokenAuthMutation, { data, loading, error }] = useTokenAuthMutation()

  if (loading) {
    ;<Layout container>
      <SEO title="Login" />
      <Typography variant="body1">Loading</Typography>
    </Layout>
  }

  return (
    <Layout container>
      <SEO title="Login" />
      <SignIn
        onSignIn={credencials => {
          tokenAuthMutation({
            variables: {
              username: credencials.username,
              password: credencials.password,
            },
          }).then(data => {
            console.log('then', data)
          })
        }}
      />
    </Layout>
  )
}

export default SignInPage
