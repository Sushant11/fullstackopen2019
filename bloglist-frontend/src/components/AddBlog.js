import React from 'react'

const AddBlog = ({ title, author, url, handleNew }) => {
  return (
    <form onSubmit={handleNew}>
      <h3>New Blog</h3>
      Title:<input {...title}></input>
      <br />
      Author:<input {...author}></input>
      <br />
      Url:<input {...url}></input>
      <br />
      <button type="Submit">Add</button>
    </form>
  )
}

export default AddBlog
