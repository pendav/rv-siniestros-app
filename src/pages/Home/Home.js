import React from 'react';
import './Home.scss';
import LogoHome from '../../components/LogoHome/LogoHome';
import Sidebar from '../../components/Sidebar/Sidebar';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Siniestros from '../Siniestros/Siniestros';
import Historial from '../Historial/Historial';
import Usuarios from '../Usuarios/Usuarios';
import Header from '../../components/Header/Header';
import Siniestro from '../Siniestro/Siniestro';

function Home() {
    return (
        <Router>
            <div className="home">
                <div className="aside">
                    <LogoHome className="logoHome"></LogoHome>
                    <Sidebar></Sidebar>
                </div>
                <div className="main">
                    <Header/>
                    <Switch>
                        <Route path="/home/siniestros">
                            <Siniestros />
                        </Route>
                        <Route path="/home/historial">
                            <Historial />
                        </Route>
                        <Route path="/home/usuarios">
                            <Usuarios />
                        </Route>
                        <Route path="/home/siniestro">
                            <Siniestro />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Home
