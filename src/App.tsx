import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import {Home} from "./pages/Home/Home";
import {About} from "./pages/About/About";
import {MyNavbar} from "./components/MyNavbar/MyNavbar";
import {MyFooter} from "./components/MyFooter/MyFooter";
import {Skills} from "./pages/Skills/Skills";
import {Extras} from "./pages/Extras/Extras";

function App() {

    return (
        <div className="App">
            <Router>
                <MyNavbar/>
                <main id="content" className="container-fluid">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/skills" exact component={Skills}/>
                        <Route path="/extras" exact component={Extras}/>
                    </Switch>
                </main>
                <MyFooter/>
            </Router>
        </div>
    );
}

export default App;
