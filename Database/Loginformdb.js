//import the mongoose library
const mongoose=require("mongoose");

//connect to the MongoDB named "LoginForm" to the local machine 
const connect=mongoose.connect("mongodb://localhost:27017/LoginForm");

//checking the database connection was successful or not
connect.then(()=>{
    console.log("Database connected successfully");
})
.catch(()=>{
    console.log("Database Cannot be connected");
});

// Define a schema for the Login data (structure of documents in the collection)
const userSchema=new mongoose.Schema({
        Username:{
            type:String,    //data type is string 
            required:true   //field is required
        },
        password:{
            type:String,    //data type is string 
            required:true   //field is required
        }

});


//create mongoose model called "uservalues" based on "userschema"
//this will map to the "uservalue" collection in mongoDB
const collection = mongoose.model('uservalues',userSchema);  
       
//Exports the collection so it can used in other files
module.exports=collection;