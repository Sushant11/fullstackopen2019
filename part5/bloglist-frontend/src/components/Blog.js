import React from 'react'
const Blog = ({ blog, user, logout }) => {
  return (
    <div>
      <h3>Blogs</h3>
      {blog.map(item => (
        <div key={item.id}>{item.title}</div>
        ))}
        <p>{user.name} logged in <button onClick={logout}>Logout</button></p>
    </div>
  )
}

export default Blog
