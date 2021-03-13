import './App.css';
import React from 'react'
import Dashboard from './views/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
      <div className="main-template">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
