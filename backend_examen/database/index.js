const mongoose = require("mongoose");
const localAddress = "mongodb://admin:password@127.0.0.1:27017/projet446";
const uri =
  "mongodb+srv://harrybhai:harrypass@cluster0.vpv6cct.mongodb.net/aminenas22";
mongoose
  .connect(uri)
  .then(() => console.log("Connexion DB établie !"))
  .catch((e) => console.log(e));
