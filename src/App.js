import SideBar from './components/SideBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <SideBar />
    </Router>
  );
}

export default App;
