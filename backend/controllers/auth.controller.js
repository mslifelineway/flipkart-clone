const User = require('../models/user.model')
const jwt = require("jsonwebtoken");

exports.signUp = (req, res) => {
  console.log("signing up...");
  if (!req.body) {
    return res.status(400).json({
      status: false,
      message: "User details must not be empty!",
    });
  }
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        status: false,
        message: "Something went wrong due to internal issue.",
      });
    }
    if (user) {
      return res.status(400).json({
        status: false,
        message: "User already registered!",
      });
    }

    const { firstName, lastName, email, password } = req.body;

    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      username: Math.random().toString(),
    });

    _user.save((err, data) => {
      console.log("error : " + err);
      if (data) {
        return res.status(200).json({
          status: true,
          message: "Account registered successfully!",
          result: data,
        });
      }
      if (err) {
        return res.status(400).json({
          status: false,
          message: "Something went wrong due to " + err,
        });
      }
    });
  });
};

exports.signIn = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) return res.status(400).json({ err });
    if (user) {
      if (user.authenticate(req.body.password)) {
        //authenticated successfully, so let's create a token that will manage the user session
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        const { firstName, lastName, email, role, fullName } = user;
        return res.status(200).json({
          token,
          user: { firstName, lastName, email, role, fullName },
        });
      }
      return res.status(400).json({ message: "Wrong credentials!" });
    } else {
      return res.status(400).json({ message: "Something went wrong!" });
    }
  });
};
