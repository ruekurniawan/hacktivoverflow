const User = require("../models/user");
const { compare } = require("../helpers/bcrypt");
const { sign } = require("../helpers/jwt");

class UserController {
  static register(req, res) {
    User.create({
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password
    })
      .then(newUser => {
        res.status(201).json(newUser);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  static login(req, res) {
    // console.log(req.body.email)
    User
      .findOne({
        email: req.body.email
      })
      .then(user => {
        // console.log(user)
        if (user) {
          if (compare(req.body.password, user.password)) {
            let payload = {
              id: user._id
            };

            let token = sign(payload);
            // console.log(token)
            res.status(200).json({
              access_token: token,
              role: user.role
            });
          } else {
            res.status(400).json({
              msg: "Invalid  Password / Username"
            });
          }
        } else {
          res.status(400).json({
            msg: "Invalid Email / Password"
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          err: {
            msg: `Please insert email / password`
          }
        });
      });
  }
}

module.exports = UserController;
