const express = require("express");
const { Router } = express;

//candy model
const Candy = require("../models/candies");

const candyRouter = Router();

candyRouter
  .route("/")
  .get((req, res, next) => {
    //ask the database for the right data and send it to the client
    Candy.find({}, (err, candies) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(200).send(candies);
      }
    });
  })
  .post((req, res, next) => {
    // convert request body into a document
    const newCandy = new Candy(req.body);
    //save the document to the collection (model)
    newCandy.save((err, savedCandy) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(201).send(savedCandy);
      }
    });
  });

candyRouter
  .route("/:id")
  .get((req, res) => {
    Candy.findById(req.params.id, (err, foundCandy) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(200).send(foundCandy);
      }
    });
  })
  .delete((req, res) => {
    Candy.findByIdAndDelete(req.params.id, (err, deletedCandy) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(204).send();
      }
    });
  })
  .put((req, res) => {
    Candy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, editedCandy) => {
        if (err) {
          res.status(400);
          next(err);
        } else {
          res.status(200).send(editedCandy);
        }
      }
    );
  });

module.exports = candyRouter;
