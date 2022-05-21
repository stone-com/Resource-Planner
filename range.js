module.exports = (req, res, next) => {
  res.header('Content-Range', 'resources 0-20/20');
  next();
};
