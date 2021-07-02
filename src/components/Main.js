import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {
  Switch,
  Route
} from 'react-router-dom'
import Copyright from './Copyright'
import Scoops from './Scoops'

export default function Main (props) {
  const classes = props.classes

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Switch>
                <Route path='/today/'>
                  <Scoops duration='today' />
                </Route>
                <Route path='/this-week/'>
                  <Scoops duration='week' />
                </Route>
                <Route path='/this-month/'>
                  <Scoops duration='month' />
                </Route>
              </Switch>
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </main>
  )
}
