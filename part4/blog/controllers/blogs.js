const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const getTokenFrom = request => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({}).populate("blog", { title: 1, author: 1, url: 1 });
  response.json(blogs.map(blog => blog.toJSON()));
  // Blog.find({}).then(blogs => {
  //   response.json(blogs);
  // });
});

blogsRouter.post("/", async (request, response, next) => {
  // const blog = new Blog(request.body);
  const body = request.body;

  const token = getTokenFrom(request);

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }

    const user = await User.findById(decodedToken.id);
    console.log('body :', body);
    console.log('User :', User);

    const blog = new Blog({
      user: user._id,
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      date: new Date(),
    });

    const savedBlog = await blog.save();
    user.blogs = user.blogs.concat(savedBlog._id);
    await user.save();
    response.json(savedBlog.toJSON());
  } catch (exception) {
    next(exception);
  }

  // const post = await blog.save()
  // response.status(201).json(post)
  // blog.save().then(result => {
  //   response.status(201).json(result);
  // });
});

blogsRouter.delete("/:id", async (request, response) => {
  const id = request.params.id;
  const blogs = await Blog.find({});
  blogs.find(blog => blog.id === id).remove();
  response.status(204).end();
});

blogsRouter.put("/:id", async (request, response) => {
  const body = request.body;
  const update = {
    likes: body.likes
  };
  const updated = await Blog.findByIdAndUpdate(request.params.id, update, {
    new: true
  });
  console.log("updated :", updated);
  response.status(201).json(updated);
});

module.exports = blogsRouter;
