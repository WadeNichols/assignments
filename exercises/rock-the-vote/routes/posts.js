const express = require("express");

const { Router } = express;

const Post = require("../models/posts");
const voteRouter = Router();

voteRouter.route("/")
    .get()
    .post((req, res, next) => {
        const newPost = new Post(req.body);
        newPost.save((err, savedPost) => {
            if (err) next(err);
            else res.status(201).send(savedPost);
        })
    })

voteRouter.route("/:id")
    .get()
    .delete()
    .put()

voteRouter.route("/:id/comments")
    .post((req, res, next) => {
        //find the post with matching ID
        Post.findById(req.params.id)
            .then(foundPost => {
                // add comment to array
                foundPost.comments.push(req.body);

                // save parent to database again
                return foundPost.save()
            })
            // return the parent
            .then(savedPost => res.status(201).send(savedPost))
            .catch(err => next(err))
    })

// voteRouter.route("/:id/comments/:commentId")
//     .get()
//     .put()
//     .delete()

module.exports = voteRouter