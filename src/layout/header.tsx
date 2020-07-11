import { Link as GatsbyLink, navigate } from 'gatsby'
import React, { FC } from 'react'
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import CreatePerformerForm from '../components/performers/forms/create-performer-form'
import useLocalStorage from '../hooks/use-local-storage'

const useStyles = makeStyles({
  toolbar: {},
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
  },
})

export interface HeaderProps {
  siteTitle?: string
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const Header: FC<HeaderProps> = ({ siteTitle = '' }) => {
  const classes = useStyles()
  const [token, setToken] = useLocalStorage('token', {})
  return (
    <AppBar component="header" position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          <Link
            to="/"
            component={GatsbyLink}
            color="inherit"
            className={classes.link}
          >
            {siteTitle}
          </Link>
        </Typography>
        <Button component={GatsbyLink} to="/performers/" color="inherit">
          Performers
        </Button>
        <Button component={GatsbyLink} to="/albums/" color="inherit">
          Albums
        </Button>
        <Button component={GatsbyLink} to="/reviews/" color="inherit">
          Reviews
        </Button>
        {!token?.token ? (
          <Button color="inherit" component={GatsbyLink} to="/sign-in-page/">
            Login
          </Button>
        ) : (
          <>
            <CreatePerformerForm />
            <Button
              color="inherit"
              onClick={() => {
                setToken({})
                navigate('/')
              }}
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
