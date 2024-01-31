const jwt = require("jsonwebtoken");
const tables = require("../tables");

function generateAccessToken(data) {
  return jwt.sign(data, process.env.APP_SECRET);
}

const getUsers = (_, res) => {
  tables.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const postUser = async (req, res) => {
  try {
    const rows = await tables.user.create(req.body);
    res.send({
      id: rows.insertId,
      email: req.body.email,
    });
  } catch (err) {
    console.error(err);
    res.status(422).send({ error: err.message });
  }
  // res.status(418).send(req.body)
};

const postLogin = async (req, res) => {
  try {
    const user = await tables.user.login(req.body);
    if (user) {
      const token = generateAccessToken({ id: user.id });
      res.send({ token });
    } else {
      res.status(401).send({ error: "Identifiant incorrect!!!" });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ error: "Erreur lors de la tentative de connexion." });
  }
};

module.exports = { postUser, postLogin, getUsers };
