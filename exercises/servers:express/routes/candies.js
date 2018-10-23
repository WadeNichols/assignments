const express = require("express")
const candyRouter = express.Router();

const candies = require("../candy.json");
// our routes will now be written here and exported


//example of get express ALL
app
  candyRouter.route("/")
  .get((req, res) => {
    res.status(200).send(candies);
  })
  .post((req, res) => {
    req.body.id = uuid();
    candies.push(req.body);
    res.status(201).send(req.body);
  });


  //example of get, delete, and put express ONE
app
  candyRouter.route("/:id")
  .get((req, res) => {
    const foundCandy = candies.find(candy => candy.id === req.params.id);
    res
      .status(200)
      .send(
        foundCandy || { message: `No candy with id ${req.params.id} was found` }
      );
  })
  .delete((req, res) => {
    const candyToDelete = candies.find(candy => candy.id === req.params.id);
    candies.splice(req.params.id, 1).length;
    res.status(204).send();
  })
  .put((req, res) => {
    const foundCandy = candies.find(candy => candy.id === req.params.id);
    const editedCandy = { ...foundCandy, ...req.body };
    candies.splice(candies.indexOf(foundCandy), 1, editedCandy);
    res.status(200).send(editedCandy);
  });

module.exports = candyRouter;