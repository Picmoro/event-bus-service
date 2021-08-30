const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

require('colors');

const app = express();
app.use(bodyParser.json());

const events = [];

app.get('/events', (req, res) => {
    res.send(events);
})

app.post('/events', async (req, res) => {
    const event = req.body;
    events.push(event);
    try {
        await axios.post("http://localhost:4000/events", event);
    }catch (e) {
        console.error(`${e.message}`.bgRed.black);
    }
    try {
        await axios.post("http://localhost:4001/events", event);
    }catch (e) {
        console.error(`${e.message}`.bgRed.black);
    }
    try {
        await axios.post("http://localhost:4002/events", event);
    }catch (e) {
        console.error(`${e.message}`.bgRed.black);
    }
    try {
        await axios.post("http://localhost:4003/events", event);
    }catch (e) {
        console.error(`${e.message}`.bgRed.black);
    }
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