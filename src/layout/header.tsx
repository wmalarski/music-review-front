import { Link as GatsbyLink } from 'gatsby'
import React, { FC } from 'react'
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import NewPerformerForm from '../components/performers/new-performer-form'

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

const Header: FC<HeaderProps> = ({ siteTitle = '', onToggleTheme }) => {
  const classes = useStyles()

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
        <NewPerformerForm />
        <Button color="inherit" onClick={onToggleTheme}>
          Toggle Theme
        </Button>
        <Button color="inherit" component={GatsbyLink} to="/sign-in-page/">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
