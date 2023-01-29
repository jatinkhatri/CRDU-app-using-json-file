

const supertest = require('supertest');
const should = require('should');
const app = require("../../src/server");

describe('Router', () => {
    let request = null;
    let server = null;
    const userId = Math.floor(Math.random() * 500)

    before(function (done) {
        server = app.listen(done)
        request = supertest.agent(server)
    })

    it('shuld test add data api', (done) => {
        const insData = {
            "id": userId,
            "name": "User",
            "age": "51",
            "gender": "male",
            "email": "akksdkajsdj" + userId + "@asd.com"
        }
        request.post('/add')
            .set('content-type', 'application/json')
            .send(insData)
            .end((err, res, body) => {
                res.status.should.equal(200);
                res.body.should.be.an.Object();
                done();
            });
    });

    it('shuld test update data api', (done) => {
        const updateData = {
            "name": "User updated " + userId,
        }
        request.patch('/edit/' + userId)
            .set('content-type', 'application/json')
            .send(updateData)
            .end((err, res, body) => {
                res.status.should.equal(200);
                res.body.should.be.an.Object();
                done();
            });
    });

    //Calling API
    it('shuld test view api', (done) => {
        request.get('/view').expect('Content-type', /json/).expect(401).end((err, res) => {
            res.status.should.equal(200);
            res.body.should.be.an.Array();
            done();
        });
    });

    it('shuld test view api with id', (done) => {
        request.get('/view?id='+userId).expect('Content-type', /json/).expect(401).end((err, res) => {
            res.status.should.equal(200);
            res.body.should.be.an.Object();
            done();
        });
    });

});