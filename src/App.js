import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Image from './components/Image'
import Drag from './components/drag';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <Header/>
   
    <Switch>
      <Route path="/" exact component={Home}></Route>
  
    </Switch>
    
    </Router>
  );
}

export default App;
