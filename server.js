const express = require("express");
const app = express();
const Joi = require("joi");
// middleware
app.use(express.json());

// get
app.get("/api/genres", (req, res) => {
  res.send(data.api);
});

// post
app.post("/api/genres", (req, res) => {});

// get one element by id
app.get("/api/genres/:id", (req, res) => {});

// Put
app.put("/api/genres/:id", (req, res) => {});

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
