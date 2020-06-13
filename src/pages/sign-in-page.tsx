import React, { FC } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Layout from '../layout'
import SEO from '../components/seo'
import { Typography, Link } from '@material-ui/core'
import SignIn from '../components/account/sign-in'

const SignInPage: FC = () => (
  <Layout container>
    <SEO title="Login" />

    <SignIn
      onSignIn={credencials => {
        console.log('credencials', credencials)
      }}
    />

    <Typography variant="body1">
      <Link component={GatsbyLink} to="/">
        Go back to the homepage
      </Link>
    </Typography>
  </Layout>
)

export default SignInPage
