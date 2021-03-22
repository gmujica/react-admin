import SideBar from './components/SideBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Overview from './pages/Overview'
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports'

function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
      </Switch>
    </Router>
  );
}

export default App;
