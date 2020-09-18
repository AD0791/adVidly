const express = require("express");

const homeRoute = express.Router()



homeRoute.get("/", (req, res) => {
    res.render('index', {
        title: 'Built with pug',
        message: 'Hello puggy'
    });
});

module.exports = homeRoute;