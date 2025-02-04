const jwt = require("jsonwebtoken");
const secrets = require("../config/secret");

 module.exports = {
  generateToken
};

 function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
} 