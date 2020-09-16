const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const app = express();
const Joi = require("joi");
const logger = require("./middlewares/logger");
// get the env and use it
env = app.get('env')
console.log(`env: ${ env }`)

if (env === 'development') {
  app.use(morgan('tiny'));
  console.log('morgan is here')
}
// middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
// third party middleware
app.use(helmet());

// custom middleware
app.use(logger);

// get (middleware)
app.get("/api/genres", (req, res) => {
  res.send("Holla bb");
});

// post
app.post("/api/genres", (req, res) => {});

// get one element by id
app.get("/api/genres/:id", (req, res) => {});

// Put
app.put("/api/genres/:id", (req, res) => {});

// delete
app.delete("/api/genres/:id", (req, res) => {});

// validation function
function validationP(params) {
  const schema = Joi.object({});
  return schema.validate(params);
}

// env variables
// terminal: $export PORT=5000
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Port is open ${port}`);
});