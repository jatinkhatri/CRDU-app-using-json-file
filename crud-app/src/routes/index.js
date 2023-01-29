/**
 * Import all dependecy
 */
const express = require('express');
const users = require('../controller');
var bodyParser = require('body-parser')

//Initialize the Router
const router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json()
/**
 * GET API to fetch the server
 */
router.get('/view', async (req, res) => {
    try {
        // Request timout 5 Seconds
        req.setTimeout(5000);
        if (req.query.id) {
            const userInfo = await users.getSingleUserData(req.query.id);
            if (!userInfo) {
                res.status(401).send({ status: "error", "message": "User not found" });
            } else {
                res.status(200).send(userInfo);
            }

        } else {
            const allUsers = await users.getUsersData();
            res.status(200).send(allUsers);
        }
    } catch (error) {
        res.status(500).send({ error: error });
    }
});

router.post('/add', jsonParser, async (req, res) => {
    const userData = req.body;
    if ((!userData.id) || (!userData.name) || (!userData.age) || (!userData.gender) || (!userData.email)) {
        res.status(400).send({ status: "error", "message": "invalid data" });
    }
    const addUser = await users.addUser(userData);
    if (!addUser) {
        res.status(400).send({ status: "error", "message": "User already exists" });
    }
    res.status(200).send({ status: "success", "message": "User added successfully" });
});

router.patch('/edit/:id', jsonParser, async (req, res) => {
    const userId = req.params.id;
    const userInfo = await users.getSingleUserData(userId);
    if (!userInfo) {
        res.status(401).send({ status: "error", "message": "User not found" });
    } else {
        const userData = req.body;
        const userUpdate = await users.updateUserData(userId, userData);
        res.status(200).send({ status: "success", "message": "User updated successfully" });
    }
});

router.get('/health', async (req, res) => {
    res.status(200).send({ status: "success", "message": "app is running.." });
});

module.exports = router;