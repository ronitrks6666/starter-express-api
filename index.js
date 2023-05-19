const express = require('express')
const app = express()
const path = require('path')


app.use(express.json());

app.get('/', (req, res) => {
    res.send("App running")
})

app.post('/bfhl', (req, res) => {
    const data = req.body.data
    var alphabetsArray = [];
    var numbersArray = [];

    if (data) {
        data.forEach(item => {
            if (isNaN(item)) {
                alphabetsArray.push(item);
            } else {
                numbersArray.push(item);
            }
        })
    }

    res.send({ is_success: "true", user_id: "ronitkumar_07042001", email: "rk1097@srmist.edu.in", roll_number: "RA2011033010108", numbers: numbersArray, alphabets: alphabetsArray })
})


app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 })
})

var server_port = process.env.YOUR_PORT || process.env.PORT || 8000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.listen(server_port, server_host, (req, res) => {
    console.log("Server is running :]")
})
