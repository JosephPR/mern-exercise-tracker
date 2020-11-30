import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import ExerciseList from './components/exercise-list';
import EditExercise from './components/edit-exercise';
import CreateExercise from './components/create-exercise';
import CreateUser from './components/create-user';
import SignIn from './components/sign-in';

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {

  }

render() {
  return (
  <Router>
    <div className='container'>
    <Navbar/>
      <br/>
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/signin" component={SignIn} />
    </div>
  </Router>
  );
}
}
