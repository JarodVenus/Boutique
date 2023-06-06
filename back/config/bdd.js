const { connect } = require("mongoose");
const URI =process.env.BDD_PROD;

module.exports = function(){
    connect(URI)
    .then(() => console.log("connexion mongoDB réussie"))
    .catch((ex) => console.log(ex));
}