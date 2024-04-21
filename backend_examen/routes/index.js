const router = require("express").Router();
const routerProduits = require("./produits.routes");
const routerAuth = require("./auth.routes");

router.get("/", (req, res) => {
  res.end("Coucou !");
});

router.use("/produits", routerProduits);
router.use("/auth", routerAuth);

module.exports = router;
