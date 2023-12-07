const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  let Token = req.headers["token-key"];

  jwt.verify(Token, "secretKey1234", function (err, decoded) {
    if (err) {
      res.status(401).json({ status: "fail", message: "Invalid token" });
    } else {
      let username = decoded.data.UserName;

      console.log(username);
      req.headers.UserName = username;
      next();
    }
  });
};
