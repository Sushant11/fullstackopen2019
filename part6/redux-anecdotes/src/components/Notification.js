import React from 'react'

const Notification = ({store}) => {
  const notify =store.getState().notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notify}
    </div>
  )
}

export default Notification