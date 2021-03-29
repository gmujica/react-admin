import SideBar from './components/SideBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { Overview, Users, revenue } from './pages/Overview'
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports'
import Home from './pages/Home';

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
      </Switch>
    </Router>
  );
}

export default App;
