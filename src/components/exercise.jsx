import React from 'react';
import { Link } from  'react-router-dom';



 const Exercise = props =>  {
  const { username, description, duration, weight, date, _id } = props.exercise;
  return  (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{weight} lbs</td>
      <td>{date.substring(0,10)}</td>
      <td>
        <Link to={`/edit/${_id}`}>Edit</Link> | <a href="/" onClick={() => {props.deleteExercise(_id) }}>Delete</a>
      </td>
    </tr>
  )
}
export default Exercise;
