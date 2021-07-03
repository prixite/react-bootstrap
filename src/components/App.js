import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Main from './Main'
import SideMenu from './SideMenu'
import TopBar from './TopBar'
import { BrowserRouter as Router } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  }
}))

export default function App () {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Router>
        <SideMenu open={open} handleDrawerClose={handleDrawerClose} />
        <Main />
      </Router>
    </div>
  )
}
