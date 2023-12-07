const ProfileModel = require("../models/ProfileModel");
const jwt = require('jsonwebtoken');


exports.CreateProfile = async (req, res) => {
  let reqBody = req.body;
  try {
    const data = await ProfileModel.create(reqBody);
    res.status(201).json({ status: "success", data: data });
  } catch (err) {
    res.status(400).json({status:"fail", data:err})
  }
};

exports.UserLogin = async (req, res) => {
    const UserName = req.body.UserName;
    const password = req.body.password;
  
    try {
      const data = await ProfileModel.findOne({ UserName, password });
      if (data) {
        let Token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data
          }, 'secretKey1234');
        res.status(200).json({ status: "success", Token, data: data });
      } else {
        res.status(401).json({ status: "unauthorized" });
      }
    } catch (err) {
      res.status(500).json({ status: "fail", message: "Internal server error" });
    }
};

exports.SelectProfile = async (req, res) => {
  const UserName = req.headers['UserName'];
  try {
    const data = await ProfileModel.find({ UserName });
    
    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(401).json({ status: "unauthorized" });
  }
};


  
  
  