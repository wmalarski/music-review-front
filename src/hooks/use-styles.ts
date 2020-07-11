import { makeStyles, Theme, createStyles } from '@material-ui/core'

export const useMainListStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      paddingBottom: theme.spacing(2),
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
  }),
)

export const useSearchBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      margin: theme.spacing(2),
      padding: theme.spacing(1),
      justifyContent: 'space-between',
    },
  }),
)
