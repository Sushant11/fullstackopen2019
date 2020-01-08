const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

blogsRouter.get("/",async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs.map(blog => blog.toJSON()))
  // Blog.find({}).then(blogs => {
  //   response.json(blogs);
  // });
});

blogsRouter.post("/", async (request, response) => {
  const blog = new Blog(request.body);

  const post = await blog.save()
  response.status(201).json(post)
  // blog.save().then(result => {
  //   response.status(201).json(result);
  // });
});

blogsRouter.delete("/:id", async (request,response) => {
  const id = request.params.id
  const blogs = await Blog.find({})
  blogs.find(blog => blog.id === id).remove()
  response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
  const body = request.body
  const update = {
    likes: body.likes
  }
  const updated = await Blog.findByIdAndUpdate(request.params.id, update, {new: true})
  console.log('updated :', updated);
  response.status(201).json(updated);
})

module.exports = blogsRouter