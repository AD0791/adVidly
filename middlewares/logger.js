function logger(res, req, next) {
  console.log("logger middleware");
  next();
}

module.exports = logger;
