import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './pages/Home/index';
import Favorites from './pages/Favorites/index';

export default function App() {

  return <>

    <BrowserRouter>

      <Header />

      <Switch> 

        <Route exact path="/">

          <Home />

        </Route>

        <Route path="/favorites">

          <Favorites />

        </Route>

      </Switch>

      <Footer />

    </BrowserRouter>

  </>
}











