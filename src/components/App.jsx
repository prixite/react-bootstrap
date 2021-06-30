import { Profile } from './Profile'
import { UserList } from './UserList'
import { CountryList } from './CountryList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

export default function App () {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/countries'>Countries</Link></li>
        </ul>
      </div>
      <Switch>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/users'>
          <UserList />
        </Route>
        <Route path='/countries'>
          <CountryList />
        </Route>
      </Switch>
    </Router>
  )
}
