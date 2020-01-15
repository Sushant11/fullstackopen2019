import React from 'react';
import '../index.css'
import {Alert} from 'react-bootstrap'

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <Alert className="error" variant='info'>
        {message}
      </Alert>
    )
  }

export default Notification;