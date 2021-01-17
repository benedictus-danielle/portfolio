import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import {Home} from "./pages/Home/Home";
import {About} from "./pages/About/About";
import {MyNavbar} from "./components/MyNavbar/MyNavbar";
import {MyFooter} from "./components/MyFooter/MyFooter";
import {Skills} from "./pages/Skills/Skills";
import {Extras} from "./pages/Extras/Extras";
import Creations from "./pages/Creations/Creations";
import CreationDetail from "./pages/Creations/Detail/CreationDetail";

function App() {

    return (
        <div className="App bg-secondary">
            <Router>
                <MyNavbar/>
                <main id="content" className="container-fluid">
                    <Switch>

                        <Route strict={false} path="/" exact component={Home}/>
                        <Route strict={false} path="/about" exact component={About}/>
                        <Route strict={false} path="/skills" exact component={Skills}/>
                        <Route strict={false} path="/extras" exact component={Extras}/>
                        <Route strict={false} path="/creations/:id" exact component={CreationDetail}/>
                        <Route strict={false} path="/creations" exact component={Creations}/>
                    </Switch>
                </main>
                <MyFooter/>
            </Router>

        </div>

    );
}

export default App;
