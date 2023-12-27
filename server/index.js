const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const ObjectId = require('mongodb').ObjectId

const bodyParser = require("body-parser");

const app = express();



app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "YOUR_MONGO_DB_URI";
const client = new MongoClient(uri);

const dbName = "crud";
const collectionName = "users";

// Create references to the database and collection in order to run
// operations on them.
var dbs;
var cls;

async function run() {
    try {

        await client.connect();
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch {
        console.log("Something went wrong connecting to MongoDB.");

    }
}
run().catch(console.dir).then(() => {
    dbs = client.db(dbName);
    cls = dbs.collection(collectionName);
});




// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
app.post("/createUser", async (req, res) => {
    console.log(req.body);

    try {
        const insertManyResult = await cls.insertOne(req.body);
        console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
        res.json("success");
    } catch (err) {
        console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
        res.json("error");
    }


});

app.post("/updateUser", async (req, res) => {
    try {
        console.log(req.body.id);

        await cls.updateOne(
            { _id: new ObjectId(req.body.id) }, // Assuming ObjectId for _id
            {
                $set: {
                    fname: req.body.fname,
                    lname: req.body.lname,
                    eml: req.body.eml, // Assuming 'eml' is meant to be 'email'
                    ps: req.body.ps // Assuming 'ps' is meant to be 'password'
                }
            }
        );
        res.json("sc");

    }
    catch (err) {
        console.log(err);
        res.json("error");
    }

});
app.post("/updateUserWithId", async (req, res) => {
    try {
        console.log(req.body.id);

        const cr = await cls.find(
            { _id: new ObjectId(req.body.id) }, // Assuming ObjectId for _id
        );
        var arr = [];
        await cr.forEach(temp => {
            arr.push(temp);

        });
        console.log(arr);

        res.json(arr);

    }
    catch (err) {
        console.log(err);
        res.json("error");
    }

});
app.post("/deleteUser", async (req, res) => {
    try {
        console.log(req.body.id);
        await cls.deleteOne({ _id: new ObjectId(req.body.id) });
        res.json("sc");

    }
    catch (err) {
        console.log(err);
        res.json("error");
    }






});
app.post("/fetchUser", async (req, res) => {
    const cursor = await cls.find();
    var arr = [];
    await cursor.forEach(temp => {
        arr.push(temp);

    });
    // console.log(req.body);
    // const rep = await cls.find();
    // console.log(rep);
    res.json(arr);




});
app.get("/test", async (req, res) => {
    
    // console.log(req.body);
    // const rep = await cls.find();
    // console.log(rep);
    res.send("arr");

});
