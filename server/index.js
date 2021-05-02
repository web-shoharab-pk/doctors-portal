const express = require('express')
const app = express()
const cors = require('cors')
const fileUpload = require('express-fileupload');
const fs = require('fs')
const port = process.env.PORT || 5500;
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(express.static('doctors'))
app.use(fileUpload())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qkzne.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const appoinmentCollection = client.db(`${process.env.DB_NAME}`).collection("appoinment");
    const doctorCollection = client.db(`${process.env.DB_NAME}`).collection("doctors");


    app.post('/addAppoinment', (req, res) => {
        const appoinment = req.body; 
        appoinmentCollection.insertOne(appoinment)
            .then(result => {
                res.send(result.insertedCount > 0)
            })
    })
    app.post('/appoinmentByDate', (req, res) => {
        const date = req.body;
        const email = req.body.email;
        doctorCollection.find({ email: email })
            .toArray((error, document) => {
                const filter = { date: date.selectedDate }
                if (document.length === 0) {
                    filter.email = email;
                }
                appoinmentCollection.find(filter)
                    .toArray((error, documents) => {
                        res.send(documents)
                    })
            })

    })
    app.get('/allpatients', (req, res) => {
         
        appoinmentCollection.find({})
            .toArray((error, documents) => {
                res.send(documents)
            })
    })

    app.post('/addADoctor', (req, res) => {
        const file = req.files.file;
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const newImg = file.data;
        const encImg = newImg.toString('base64');

        var image = {
            contentType: file.mimetype,
            size: file.size,
            img: Buffer.from(encImg, 'base64')
        };

        doctorCollection.insertOne({ name, email, phone, image })
            .then(result => {
                res.send(result.insertedCount > 0);
            })
    })

    app.get('/allDoctor', (req, res) => {
        doctorCollection.find({})
            .toArray((error, documents) => {
                res.send(documents)
            })
    })
    app.post('/isDoctor', (req, res) => {
        const email = req.body.email;
        doctorCollection.find({ email: email })
            .toArray((error, doctors) => {
                res.send(doctors.length > 0)
            })
    })


    app.get('/', (req, res) => { 
        res.send('Hello World!')
        console.log("hello i am working");
    })
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})