import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Scoops from './Scoops'
import Typography from '@material-ui/core/Typography'

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://scrooprank.com/'>
        ScoopRank
      </Link>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  )
}

export default function Main (props) {
  let classes = props.classes

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Scoops />
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
