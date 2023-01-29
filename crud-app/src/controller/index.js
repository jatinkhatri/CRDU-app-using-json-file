const fs = require('fs');

const getUserData = async () => {
    const jsonData = fs.readFileSync('users.json')
    return JSON.parse(jsonData)
}

const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('users.json', stringifyData)
}

const addUser = async (data) => {
    // get all users
    const allUsers = await getUserData();
    const exitingUser = allUsers.filter(u => u.id == data.id);
    if (!exitingUser.length) {
        allUsers.push(data);
        saveUserData(allUsers)
        return true;
    }
    return false;
}

const getSingleUserData = async (userId) => {
    const allUsers = await getUserData();
    return allUsers.find(u => u.id == userId);
}

const updateUserData = async (userId, data) => {
    const allUsers = await getUserData();
    const objIndex = allUsers.findIndex((u => u.id == userId));
    const updateKeys = Object.keys(data);
    for (key of updateKeys) {
        allUsers[objIndex][key] = data[key];
    }
    saveUserData(allUsers)
    return true;
}

exports.getUsersData = getUserData;
exports.addUser = addUser;
exports.getSingleUserData = getSingleUserData;
exports.updateUserData = updateUserData;