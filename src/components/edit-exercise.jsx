import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class EditExercise extends Component {
  constructor(props){
    super(props);

    this.state = {
        username: '',
        description: '',
        duration: '',
        weight: 0,
        date: new Date(),
        users: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5001/exercises/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        username: res.data.username,
        description: res.data.description,
        duration: res.data.duration,
        weight: res.data.weight,
        date: new Date(res.data.date),
      })
    })
    .catch ( err => console.log(err))


    axios.get('http://localhost:5001/users/')
      .then(res => {
        if(res.data.length > 0) {
          this.setState({
            users: res.data.map(user => user.username),
          })
        }
      })
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }
  onChangeDuration = (e) => {
    this.setState({
      duration: e.target.value
    })
  }
  onChangeWeight = (e) => {
    this.setState({
      weight: e.target.value
    })
  }
  onChangeDate = (date) => {
    this.setState({
      date: date
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {username, description, duration, weight, date} = this.state
    const exercise = {
      username,
      description,
      duration,
      weight,
      date,
    }
    console.log(exercise)

        axios.post(`http://localhost:5001/exercises/update/${this.props.match.params.id}`, exercise)
        .then(res => console.log(res.data));

        window.location ='/'
  }

  render() {
    const {username, description, duration, weight, date} = this.state
    return (
      <div>
        <h3>Edit Exercise log</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <select
              ref='userInput'
              required
              className='form-control'
              value={username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map((user) => {
                  return <option
                    key={user}
                    value={user}>
                    {user}
                  </option>
                })
              }
              </select>
          </div>
          <div className='form-group'>
            <label>Description: </label>
            <input
               type='text'
               required
               className='form-control'
               value={description}
               onChange={this.onChangeDescription}
               />
          </div>
          <div className='form-group'>
            <label>Sets(reps): </label>
            <input
               type='text'
               required
               className='form-control'
               value={duration}
               onChange={this.onChangeDuration}
               />
          </div>
          <div className='form-group'>
            <label>Weight(in lbs): </label>
            <input
               type='text'
               required
               className='form-control'
               value={weight}
               onChange={this.onChangeWeight}
               />
          </div>
          <div className='form-group'>
            <label> Date: </label>
            <div>
              <DatePicker
                selected={date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className='form-group'>
            <input type='submit' value='Edit Exercise Log' className='btn btn-outline-primary' />
          </div>

        </form>
      </div>
    )
  }
}
