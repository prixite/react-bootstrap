import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {
  Switch,
  Route
} from 'react-router-dom'
import Copyright from './Copyright'

import { routes } from '../urls'

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
                {routes.map((route, key) => (
                  <Route key={key} exact path={route.path}>
                    <route.Content />
                  </Route>
                ))}
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
