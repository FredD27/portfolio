const jwt = require("jsonwebtoken");
const tables = require("../tables");

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "User not authorized" });
  }

  return jwt.verify(
    req.headers.authorization.split(" ")[1],
    process.env.APP_SECRET,
    (err, data) => {
      if (err) {
        return res.status(401).json({ error: err.message });
      } // Step 3: get user data from token payload
      tables.user.getProfile(data.id).then(([rows]) => {
        if (!rows.length) {
          return res.status(401).json({ error: "Utilisateur inexistant" });
        } // Step 4: share user data between different middlewares// eslint-disable-next-line prefer-destructuring
        // eslint-disable-next-line prefer-destructuring
        req.user = rows[0];
        return next();
      });
      return null;
    }
  );
};

module.exports = { authMiddleware };
