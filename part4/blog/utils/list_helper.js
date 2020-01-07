const dummy = blogs => {
  return 1;
};

const totalLikes = blogs => {
  const like = blogs.map(blog => blog.likes);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return like.reduce(reducer);

};

module.exports = {
  dummy,
  totalLikes
};
