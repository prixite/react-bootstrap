import Base from './Base'
import { createData } from '../../utils'

export default function Today (props) {
  const rows = [
    createData(0, 1, 'Elvis Presley', 'http://example.com'),
    createData(1, 2, 'Paul McCartney', 'http://example.com'),
    createData(2, 3, 'Tom Scholz', 'http://example.com'),
    createData(3, 4, 'Michael Jackson', 'http://example.com'),
    createData(4, 5, 'Bruce Springsteen', 'http://example.com')
  ]

  return <Base rows={rows} duration='Today' />
}
