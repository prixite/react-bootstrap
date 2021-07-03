import Today from './components/Scoops/Today'
import Week from './components/Scoops/Week'
import Month from './components/Scoops/Month'

export const routes = [
  {
    path: '/',
    text: 'Today',
    Content: () => <Today />
  },
  {
    path: '/week/',
    text: 'This Week',
    Content: () => <Week />
  },
  {
    path: '/month/',
    text: 'This Month',
    Content: () => <Month />
  }
]
