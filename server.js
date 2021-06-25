const express = require('express');
const fs = require('fs')
const TimeVerify = require('./middleware');
const app = express();

app.get(('/'), TimeVerify, (req, res) => {
    fs.readFile('./home/index.html', 'utf-8', (err, data) =>
    {
        err? console.log(err):res.send(data)
    })
    app.use(express.static("Home"));
    
})
app.get(('/services'), TimeVerify, (req, res) => {
    fs.readFile('./services/index.html', 'utf-8', (err, data) =>
    {
        err? console.log(err):res.send(data)
    })
    app.use(express.static("services"));

})
app.get(('/Contact'), TimeVerify, (req, res) => {
    fs.readFile('./Contact/contact.html', 'utf-8', (err, data) =>
    {
        err? console.log(err):res.send(data)
    })
    app.use(express.static("Contact"));

})

const PORT = 5000;

app.listen(PORT, err => err ? console.log(err) : console.log(`server running en PORT ${PORT}`))
