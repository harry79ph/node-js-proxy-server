const express = require("express");
const cors = require("cors");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get(":endpoint([\\/\\w\\.-]*)", async function (req, res) {
    let endpoint = "https://" + req.params.endpoint;
    const response = await fetch(endpoint);
    const data = await response.json();
    res.send(data);
});

app.listen(3000);

module.exports = app;
