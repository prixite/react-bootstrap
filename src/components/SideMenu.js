import clsx from 'clsx'
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

export default function SideMenu (props) {
  const open = props.open
  const classes = props.classes
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
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <NavLink to='/today/'>
              <ListItemText primary='Today' />
            </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <NavLink to='/this-week/'>
              <ListItemText primary='This Week' />
            </NavLink>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <NavLink to='/this-month/'>
              <ListItemText primary='This Month' />
            </NavLink>
          </ListItem>
        </div>
      </List>
    </Drawer>
  )
}
