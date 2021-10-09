import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './pages/Home/index';

export default function App() {

  return <>

    <BrowserRouter>

      <Header />

      <Switch>

        <Route path="/">

          <Home />

        </Route>

      </Switch>

      <Footer />

    </BrowserRouter>

  </>
}











