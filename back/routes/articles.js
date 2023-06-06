const { Router } = require("express");
const { Article } = require("../model/model");

const route = Router();

route.post("/", async (request,response) => {
    const { body } = request;

    const articleSearch = await Article.find({nom : body.nom});

    if (articleSearch > 0) return response.status(400).json({msg : "This article has already been published." , status : "Error"});

    const newArticle = new Article({...body});
    await newArticle.save();
});

route.get("/all", async (request,response) => {
    const allArticle = await Article.find();
    response.json({ msg : allArticle , status : "success"});
});

module.exports = route;