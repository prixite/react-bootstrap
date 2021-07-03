import Base from './Base'
import { createData } from '../../utils'

export default function Today (props) {
  const rows = [
    createData(0, 1, 'Frodo Baggins', 'http://example.com'),
    createData(1, 2, 'Sam the Wise Gamgee', 'http://example.com'),
    createData(2, 3, 'Gandalf the Grey', 'http://example.com'),
    createData(3, 4, 'Soloman the White', 'http://example.com'),
    createData(4, 5, 'Aragorn son of Arathon', 'http://example.com')
  ]

  return <Base rows={rows} duration='Month' />
}
