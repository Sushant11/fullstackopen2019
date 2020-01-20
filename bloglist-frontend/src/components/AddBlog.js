import React from 'react'

const AddBlog = ({ title, handleTitle,author, handleAuthor, url, handleUrl, handleNew }) => {
  return (
    <form onSubmit={handleNew}>
      <h3>New Blog</h3>
            Title:<input name="title" value={title} onChange={handleTitle}></input><br/>
            Author:<input name="author" value={author} onChange={handleAuthor}></input><br/>
            Url:<input name="url" value={url} onChange={handleUrl}></input><br/>
      <button type="Submit">Add</button>
    </form>
  )
}

export default AddBlog