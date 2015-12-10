'use strict';

var router = require('express').Router(),
    _ = require('lodash');

var HttpError = require('../../utils/HttpError');
var User = require('../users/user.model');

console.log("im in this file")
router.post('/', function (req, res, next) {
    console.log("at add route!")
    console.log("SESSION BEFORE:", req.session)
    User.findOne(req.body).exec()
        .then(function (user) {
            console.log("server found:", user)
            if (user){
                console.log("found email")
                req.session.userID = user._id
                console.log("i have a user!!", req.session)
                res.json(user);
            } else {
                console.log("didn't find email")
                res.status(401)
              }
        })
        .then(null, next);
    });

router.post('/new', function (req, res, next) {
    console.log("at new route!")
    User.create(req.body)
        .then(function (user) {
            console.log("server created:", user)
            if (user){
                console.log("found email")
                res.json(user);
            } else {
                console.log("WE COULDNT CREATE ONE")
                res.status(401)
              }
        })
        .then(null, next);
    });

router.delete('/logout', function (req, res, next) {
    console.log("at delete route!")
    req.session.destroy(function(){
        console.log(req.session)
        res.send(200)
    });
});


module.exports = router;