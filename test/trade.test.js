const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const {expect} = chai;
chai.use(chaiHttp);

describe('test trades', () => {
    it('it is create trade', done => {
        chai    
            .request(server)
            .post('/trades')
            .send({
                "id":9,
                "type":"Buy",
                "userId":2,
                "symbol":"AC",
                "shares":10,
                "price":"132.22",
                "timestamp":"2014-06-10 13:13:13"
            })
            .end((err, res) => {
                expect(res.body.status).to.equal(201)
                done();
            });
    });

    it('it will get selected user trades' , done => {
        chai
            .request(server)
            .get('/trades/users/1')
            .end((err,res) => {
                expect(res.body.status).to.equal(200);
                done();
            });
    });
    it('it will get selected user trades' , done => {
        chai
            .request(server)
            .get('/trades')
            .end((err,res) => {
                expect(res.body.status).to.equal(200);
                done();
            });
    });
    it('it will get selected user trades' , done => {
        chai
            .request(server)
            .delete('/trades')
            .end((err,res) => {
                expect(res.body.status).to.equal(200);
                done();
            });
    });
})