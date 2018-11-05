const express = require("express");

const { Router } = express;

const Post = require("../models/posts");
const voteRouter = Router();

voteRouter
  .route("/")
  .get((req, res, next) => {
    Post.find({}, (err, posts) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(200).send(posts);
      }
    });
  })
  .post((req, res, next) => {
    const newPost = new Post(req.body);
    newPost.save((err, savedPost) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(201).send(savedPost);
      }
    });
  });

voteRouter
  .route("/:id")
  .get((req, res) => {
    Post.findById(req.params.id, (err, foundPost) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(200).send(foundPost);
      }
    });
  })
  .delete((req, res) => {
    Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(204).send();
      }
    });
  })
  .put((req, res, next) => {
    Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, editedPost) => {
        if (err) {
          res.status(400);
          next(err);
        } else {
          res.status(200).send(editedPost);
        }
      }
    );
  });

voteRouter.route("/:id/comments").post((req, res, next) => {
  //find the post with matching ID
  Post.findById(req.params.id)
    .then(foundPost => {
      // add comment to array
      foundPost.comments.push(req.body);
      // save parent to database again
      return foundPost.save();
    })
    // return the parent
    .then(savedPost => res.status(201).send(savedPost))
    .catch(err => next(err));
});

voteRouter
  .route("/:id/comments/:commentId")
  .get((req, res, next) => {
    Post.findById(req.params.id).then(foundPost => {
      const foundComment = foundPost.comments.id(req.params.commentId);
      res.status(200).send(foundComment);
    });
  })
  .put((req, res, next) => {
    Post.findById(req.params.id).then(foundPost => {
      const foundComment = foundPost.comments.id(req.params.commentId);
      foundComment.set(req.body);
      return foundPost.save(err => {
        if (err) {
          res.status(400);
          next(err);
        }
        res.status(200);
      });
    });
  })
  .delete((req, res, next) => {
    Post.findById(req.params.id).then(foundPost => {
      foundPost.comments.id(req.params.commentId).remove();
      foundPost.save(err => {
        if (err) {
          res.status(400);
          next(err);
        }
        res.status(204).send();
      });
    });
  });

module.exports = voteRouter;