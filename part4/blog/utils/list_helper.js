const Blog = require('../models/blog')
const User = require('../models/user')

const dummy = blogs => {
  return 1;
};


const initialBlogs = [
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "async/await simplifies making async calls",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }  
]

const totalLikes = blogs => {
  const like = blogs.map(blog => blog.likes);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return like.reduce(reducer);

};

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  dummy,
  totalLikes,
  blogsInDb,
  initialBlogs,
  usersInDb
};
