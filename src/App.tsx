import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import {Home} from "./pages/Home/Home";
import {About} from "./pages/About/About";
import {MyNavbar} from "./components/MyNavbar";
import {MyFooter} from "./components/MyFooter";


function App() {
  return (
    <div className="App">
        <MyNavbar/>
        <div className="container">
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                </Switch>
            </Router>
        </div>
        <MyFooter/>
    </div>
  );
}

export default App;
