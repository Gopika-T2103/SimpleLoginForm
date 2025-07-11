//import the required modules....

const express= require("express");  //import Express module
const mongoose=require("mongoose"); //import the mongoose library
const cors=require("cors");           
const collection=require("./models/Loginformdb"); //import the MongoDB collection from a separate file
const path=require("path");             // Module to handle and transform file paths
const bcrypt = require('bcrypt');        // Library for hashing passwords

const app=express();    //create an express application

app.use(cors());

//convert data into json format
app.use(express.json());

app.use(express.urlencoded({extended:false}));

// static file
app.use(express.static("public"));

// Connect to the local MongoDB database named "LoginForm"
mongoose.connect('mongodb://localhost:27017/LoginForm');

app.get("/",(req,res)=>{                // Define a route for the home page ("/") that renders the login.ejs page
    res.send("/login");                //show login page
});

app.get("/register",(req,res)=>{        // Define a route to render the register page when "/register" is visited
    res.render("register");            //show register page
});

// Register user
app.post("/register",async (req,res)=>{     //Handle registeration submission 

    // create a user object from the sbmitted form data
    const data={
        Username:req.body.username,
        password:req.body.password
    }

console.log(data,"inside register api");

// to check if the user is already exist in the DB
const existingUser=await collection.findOne({Username:data.Username});

if(existingUser){
    res.send("User already exists");   //if user exists,send a response saying so
}
else{
   
    //hashing password before it storing into the database

    const saltRounds=10;            //Number of salt round for bcrypt
    const hashedPassword=await bcrypt.hash(data.password,saltRounds);
    data.password = hashedPassword;    //replace plain password with hashed one

    // insert the new user data into the database
    const uservalues=await collection.insertMany(data);
    console.log(uservalues);      //log the saved user data                       
     
}
});

//login user

app.post("/login",async(req,res)=>{
    try{
        const check=await collection.findOne({Username: req.body.username});   //check if the username exists in the database
        if(!check){
            return res.status(404).json({ message: "Username not found" });
        }
    
    //checck if the username exists in the database

    console.log(req.body,"inside login api"); 
    const isPasswordMatch = await bcrypt.compare(req.body.password , check.password);
   
    if(isPasswordMatch) {
        res.status(200).json({ message: "Login successful" });  //if match,enter to home page by showing login successfull            

    }
    else{
      return res.status(401).json({ message: "Wrong password" });   //if password doesnt match          
    }
}catch(error){
    console.error(error);
    res.status(500).json({ message: "Server error" });           //if any error occur
    }

});

// Set up the server to listen on port 3000
const port=3001;
app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});