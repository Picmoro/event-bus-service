const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

require('colors');

const app = express();
app.use(bodyParser.json());


app.post('/events', (req, res) => {
    const event = req.body;
    axios.post("http://localhost:4000/events", event);
    axios.post("http://localhost:4001/events", event);
    axios.post("http://localhost:4002/events", event);

    res.send({status: "OK"});
})

app.listen(4005, () => {
    console.info("\n" +
        "███████ ██    ██ ███████ ███    ██ ████████       ██   ██ ██    ██ ██████        ███████ ███████ ██████  ██    ██ ██  ██████ ███████ \n" +
        "██      ██    ██ ██      ████   ██    ██          ██   ██ ██    ██ ██   ██       ██      ██      ██   ██ ██    ██ ██ ██      ██      \n" +
        "█████   ██    ██ █████   ██ ██  ██    ██    █████ ███████ ██    ██ ██████  █████ ███████ █████   ██████  ██    ██ ██ ██      █████   \n" +
        "██       ██  ██  ██      ██  ██ ██    ██          ██   ██ ██    ██ ██   ██            ██ ██      ██   ██  ██  ██  ██ ██      ██      \n" +
        "███████   ████   ███████ ██   ████    ██          ██   ██  ██████  ██████        ███████ ███████ ██   ██   ████   ██  ██████ ███████ \n" +
        "                                                                                                                                     \n" +
        "                                                                                                                                     \n");
    console.info('Listening on 4005'.bgGreen.black);
})