const express = require("express");
const {
  catchPokemon,
  releasePokemon,
  renamePokemon,
} = require("../controllers/pokemon");
const {
  getAll,
  createUser,
  getDetails,
  editUser,
  deleteUser,
} = require("../controllers/user");
const router = express.Router();

router.get("/user", getAll);
router.get("/user/:id", getDetails);
router.post("/user", createUser);
router.patch("/user/:id", editUser);
router.delete("/user/:id", deleteUser);

router.get("/pokemon/catch", catchPokemon);
router.get("/pokemon/release", releasePokemon);
router.get("/pokemon/rename/:num", renamePokemon);

module.exports = router;
