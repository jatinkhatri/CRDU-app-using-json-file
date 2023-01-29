/**
 * Import all dependecy
 */
const express = require('express');
const cmd = require('../controller');
var bodyParser = require('body-parser')
const path = require('path');

//Initialize the Router
const router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json()
/**
 * GET API to fetch the server
*/
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../html/index.html'));
});

router.get('/install-pkg', async (req, res) => {
    // Request timout 5 Seconds
    req.setTimeout(500000);
    const output = await cmd.installPackages();
    res.status(200).send({ status: "success", "output": output });
});


router.get('/run-app', async (req, res) => {
    // Request timout 5 Seconds
    req.setTimeout(500000);
    const output = await cmd.runApp();
    res.status(200).send({ status: "success", "output": output });
});

router.get('/stop-app', async (req, res) => {
    // Request timout 5 Seconds
    req.setTimeout(500000);
    const output = await cmd.stopApp();
    res.status(200).send({ status: "success", "output": output });
});

router.get('/run-test', async (req, res) => {
    // Request timout 5 Seconds
    req.setTimeout(500000);
    const output = await cmd.runTest();
    res.status(200).send({ status: "success", "output": output });
});

module.exports = router;