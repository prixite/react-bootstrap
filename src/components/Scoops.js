import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from './Title'

// Generate Order Data
function createData (id, rank, title, link) {
  return { id, rank, title, link }
}

const today = [
  createData(0, 1, 'Elvis Presley', 'http://example.com'),
  createData(1, 2, 'Paul McCartney', 'http://example.com'),
  createData(2, 3, 'Tom Scholz', 'http://example.com'),
  createData(3, 4, 'Michael Jackson', 'http://example.com'),
  createData(4, 5, 'Bruce Springsteen', 'http://example.com')
]

const week = [
  createData(0, 1, 'Geralt of Rivia', 'http://example.com'),
  createData(1, 2, 'Hennefer of Vengerberg', 'http://example.com'),
  createData(2, 3, 'Calanthe of Cintra', 'http://example.com'),
  createData(3, 4, 'Ciria of Cintra', 'http://example.com'),
  createData(4, 5, 'Foltest of Vizma', 'http://example.com')
]

const month = [
  createData(0, 1, 'Frodo Baggins', 'http://example.com'),
  createData(1, 2, 'Sam the Wise Gamgee', 'http://example.com'),
  createData(2, 3, 'Gandalf the Grey', 'http://example.com'),
  createData(3, 4, 'Soloman the White', 'http://example.com'),
  createData(4, 5, 'Aragorn son of Arathon', 'http://example.com')
]

function preventDefault (event) {
  event.preventDefault()
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}))

export default function Scoops (props) {
  const classes = useStyles()
  let rows

  if (props.duration === 'today') {
    rows = today
  } else if (props.duration === 'week') {
    rows = week
  } else {
    rows = month
  }

  return (
    <>
      <Title>Ranking</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.rank}</TableCell>
              <TableCell>{row.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color='primary' href='#' onClick={preventDefault}>
          See more scoops
        </Link>
      </div>
    </>
  )
}
