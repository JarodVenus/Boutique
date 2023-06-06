const { Schema , model } = require("mongoose");

const articleSchema = new Schema({
    nom : String,
    description : String,
    image : {type : String, default : "https://picsum.photos/200/300"},
    prix : Number,
    dt_creation : { type : Date , default : Date.now()},
} , {
    timestamps : true,
});

const Article = model ("articles", articleSchema)

module.exports.Article = Article;