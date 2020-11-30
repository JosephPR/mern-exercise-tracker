import React, { Component } from 'react';
import axios from 'axios';

import Exercise from './exercise'


export default class ExerciseList extends Component {
  constructor (props) {
    super(props)

    this.state = {exercises: []};
  };

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
    .then(res => {
      this.setState({ exercises: res.data })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  deleteExercise(id) {
    axios.delete(`http://localhost:5000/exercises/${id}`)
    .then(res => console.log(res.data));

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Sets/Reps</th>
              <th>Weight</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }

          </tbody>
        </table>
      </div>
    )
  }
}
