var express = require("express");
var app = express();
var mo = require("mongoose");
var b = mo.connect("mongodb://localhost:27017/example");
// console.log(b);

// console.log(a);

const schema = mo.Schema({
    id: Number,
    title: String,
    complaint: String,
    Description: String
});

const db = mo.model("students",schema);
//One way of creating a new document in collection 
// const temp = new db({
//     id: 1,
//     title: "Sai",
//     complaint: "Unhappy",
//     Description: "Sad"
// });

// temp.save(function (err, com) {
//     if (err) {
//         console.log("SOme wrong");
//     } else {
//         console.log(com);
//     }
    
// })

//another way is in one step using create method regering to model 

// db.create({
//     id: 9,
//     title: "SaiPrah",
//     complaint: "Unhappyssnd",
//     Description: "Sadandns"
// }, function (err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("succesfully addedd");
//     }
// });
// console.log(db);

//Retriving/ Reading the database is i.e collections is using find() method 

db.find({}, function (err, res) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("The Database is :");
        console.log(res);
    }
});

//Updating the database 
// db.updateOne({ id: 1 }, {
//     id: 8,
//     title: "SaiPrahlad",
//     complaint: "Unhappyssndsfd",
//     Description: "Sadanafdfdns"
// }, function (err, res) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Updated successfully");
//     }
    
// });

//Deleting the database 
// db.deleteOne({ id: 8 }, function (err, res) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Deleted successfully");
//     }
    
// });

    

app.listen(process.env.PORT || 8000,process.env.IP, function(){
    console.log("app is running");
});