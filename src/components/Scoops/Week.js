import Base from './Base'
import { createData } from '../../utils'

export default function Week (props) {
  const rows = [
    createData(0, 1, 'Geralt of Rivia', 'http://example.com'),
    createData(1, 2, 'Hennefer of Vengerberg', 'http://example.com'),
    createData(2, 3, 'Calanthe of Cintra', 'http://example.com'),
    createData(3, 4, 'Ciria of Cintra', 'http://example.com'),
    createData(4, 5, 'Foltest of Vizma', 'http://example.com')
  ]

  return <Base rows={rows} duration='Week' />
}
