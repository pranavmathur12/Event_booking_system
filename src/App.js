import React from "react";
//import ReactDOM from "react-dom";
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
// import SearchPage from './SearchPage'

//import {withRouter} from 'react-router';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchPage from "./SearchPage";
import Booking from "./Booking";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/book" component={SearchPage}>
            <SearchPage />
          </Route>
          <Route exact path="/final" component={Booking}>
            <Booking />
          </Route>
          <Route exact path="/login" component={Login}>
            <Login />
          </Route>
          <Route exact path="/signup" component={Signup}>
            <Signup />
          </Route>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
