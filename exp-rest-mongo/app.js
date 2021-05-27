var a = require("express");
var app = a();
var mo = require("mongoose");
var b = mo.connect("mongodb://localhost:27017/example");
// console.log(m);
var bodyparser = require("body-parser");
app.use(bodyparser.json());
const schema = mo.Schema({
    id: Number,
    title: String,
    complaint: String,
    Description: String
});

const db = mo.model("students", schema);
db.find({}, function (err, res) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(res);
    }
});

app.get('/all', function (req, res) {
    db.find({}, function (err, com) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(com);
        }
    });
});


app.post('/add', function (req, res) {
    try {
        db.create({
        id: req.body.id,
        title: req.body.title,
        complaint: req.body.complaint,
        Description: req.body.Description
    }, function (err, com) {
        if (err) {
            res.send("Please add the details again");
        }
        else {
            res.send("Succesfully added");
        }
    });
    }
    catch (err) {
        console.log(err);
    }
    
});

app.delete('/del/:id', function (req, res) {
    db.deleteOne({ id: req.params.id }, function (err, com) {
        if (err) {
            res.send("Not Deleted there is some problem");
        }
        else {
            res.send("Deleted successfully");
        }
    });
});

app.put('/update/:id', function (req, res) {
    db.updateOne({
       id:req.params.id 
    }, {
        id: req.body.id,
        title: req.body.title,
        complaint: req.body.complaint,
        Description: req.body.Description
    }, function (err, com) {
        if (err) {
            console.log(err);
            res.send("Not updates occured with some issue :( ")
        }
        else {
            res.send("Updated Successfully");
        }
    })
})

app.listen(process.env.PORT || 6000, function () {
    console.log("app is running");
});