import React from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import AnimeDetail from './pages/AnimeDetail';
import AnimeData from './pages/AnimeData';
import Login from './pages/Login';
import Register from './pages/Register';
import ReadManga from './pages/ReadManga';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Category from './pages/Category';
import ViewManga from './pages/ViewManga';

export default class App extends React.Component {
  render(){
    return (
        <Router>
          <Header />
          <Switch>
            <Route path="/manga/:_id" component={ViewManga} />
            <Route path="/categories">
              <Category />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/readmanga">
              <ReadManga />
            </Route>
            <Route path="/animeData" >
              <AnimeData />
            </Route>
            <Route path="/animeDetail" >
              <AnimeDetail />
            </Route>
            <Route path="/" >
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
    );
  }
  
}

