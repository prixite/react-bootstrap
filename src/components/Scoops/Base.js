import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from '../Title'

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
  const rows = props.rows

  return (
    <>
      <Title>{props.duration}</Title>
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
