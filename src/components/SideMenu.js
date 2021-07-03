import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import AssignmentIcon from '@material-ui/icons/Assignment'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { NavLink } from 'react-router-dom'

import { routes } from '../urls'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  sideMenuLink: {
    textDecoration: 'none',
    color: 'inherit'
  }
}))

export default function SideMenu (props) {
  const classes = useStyles()

  const open = props.open
  const handleDrawerClose = props.handleDrawerClose

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <div>
          {routes.map((route, key) => (
            <ListItem button key={key}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <NavLink to={route.path} className={classes.sideMenuLink}>
                <ListItemText primary={route.text} />
              </NavLink>
            </ListItem>
          ))}
        </div>
      </List>
    </Drawer>
  )
}
