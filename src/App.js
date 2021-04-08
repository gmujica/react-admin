import SideBar from './components/SideBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { Overview, Users, revenue } from './pages/Overview'
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports'
import { Messages, Message1, Message2 } from './pages/Messages'
import Team from './pages/Team'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={Login} />
        <SideBar />
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
          <Route path='/messages/message1' exact component={Message1} />
          <Route path='/messages/message2' exact component={Message2} />
      </Switch>
    </Router>
  );
}

export default App;
