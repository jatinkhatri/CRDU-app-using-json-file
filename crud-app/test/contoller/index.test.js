const chai = require('chai');
const user = require('../../src/controller');

describe('user controller', () => {
    const userId = Math.floor(Math.random() * 500);
    const insData = {
        "id": userId,
        "name": "User",
        "age": "51",
        "gender": "male",
        "email": "akksdkajsdj" + userId + "@asd.com"
    }

    it('will add the user', async () => {
        const adduser = await user.addUser(insData);
        adduser.should.be.true;
    });

    it('will update the user', async () => {
        const insData = {
            "name": "User " + userId
        }
        const updateUser = await user.updateUserData(userId, insData);
        updateUser.should.be.true;
    });

    it('will get all the users', async () => {
        const allUser = await user.getUsersData();
        allUser.should.be.an.Array();
    });

    it('will get the single user', async () => {
        const userData = await user.getSingleUserData(userId);
        userData.should.be.an.Object();
    });
});