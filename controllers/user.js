const {v4: uuidv4} = require("uuid")
const User = require("../models/user");
const {getUser, setUser} = require("../service/auth");

async function handleUserSignup(req,res){
    const {name, email, password} = req.body;

    await User.create({
        name,
        email,
        password,
    });
    return res.redirect("/");
}

async function handleUserLogin(req,res){
    const { email, password} = req.body;

 const user=   await User.findOne({ email, password });
    
     if(!user) res.render("login", {error: "Invalid User and Password"});

     const token = setUser( user);
     res.cookie("token", token);
    // res.cookie("token", token, { httpOnly: true });

    return res.redirect("/");
    
  //  return res.json({token});
}
module.exports = {
    handleUserSignup,
    handleUserLogin,

};