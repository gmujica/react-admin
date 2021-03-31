import SideBar from './components/SideBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { Overview, Users, revenue } from './pages/Overview'
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports'
import { Messages, MessagesOne, MessagesTwo } from './pages/Messages'
import Team from './pages/Team'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/overview' exact component={Overview} />
        <Route path='/overview/users' exact component={Users} />
        <Route path='/overview/revenue' exact component={revenue} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/products' exact component={Products} />
        <Route path='/team' exact component={Team} />
        <Route path='/messages' exact component={Messages} />
      </Switch>
    </Router>
  );
}

export default App;
