import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Image from './components/Image'
import Drag from './components/drag';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
function App() {
  return (
    <div>
    <Header/>
    <Sidebar/>
    
    </div>
  );
}

export default App;
