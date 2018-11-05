const express = require("express");
const { Router } = express;

const Brand = require("../models/brands");

const brandRouter = Router();

brandRouter.route("/")
    .get()
    .post((req, res, next) => {
        const newBrand = new Brand(req.body)
        newBrand.save()
            .then(brand => res.status(200).send(brand))
            .catch(err => next(err))
    })

module.exports = brandRouter;