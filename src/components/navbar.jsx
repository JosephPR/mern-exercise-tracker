import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import'../App.css'

export default class Navbar extends Component {

  render() {
    return (
      <nav  id="nav" className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>Lift Tracker</Link>
        <div className='navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='navbar-item'>
              <Link to='/' className='nav-link'>Exercises</Link>
            </li>
            <li className='navbar-item'>
              <Link to='/create' className='nav-link'>Create Exercise Log</Link>
            </li>
            <li className='navbar-item'>
              <Link to='/user' className='nav-link'>Create User</Link>
            </li>
            <li className='navbar-item'>
              <Link to='/signin' className='nav-link'>Sign In</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
