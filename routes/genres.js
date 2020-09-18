const Joi = require("joi");
const express = require('express')
const router = express.Router()
// enpoints
// get (is a middleware)
router.get("/", (req, res) => {
    res.send("Holla bb");
});

// post
router.post("/", (req, res) => {});

// get one element by id
router.get("/:id", (req, res) => {});

// Put
router.put("/:id", (req, res) => {});

// delete
router.delete("/:id", (req, res) => {});

// validation function
function validationP(params) {
    const schema = Joi.object({});
    return schema.validate(params);
}

module.exports = router;