const request = require('supertest');
const app = require('../app');
const { Profile, Intent } = require('../models');

describe('Create BOT Profile', () => {
    test('succes created', (done) => {
        request(app)
            .post('/createprofile')
            .send({
                name: "Alexa",
                photo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
                description: "customer service from Alexa",
            })
            .then((res) => {
                expect(res.status).toBe(201);
                expect(res.body).toEqual({"message": "your bot profile has already created"});
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test('Profile Invalid created cause description not given', (done) => {
        request(app)
            .post('/createprofile')
            .send({
                photo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
                name: "Alexa",
            })

        .then((res) => {
            expect(res.status).toBe(400)
            expect(res.body).toEqual({"message":["Description is required."]});
            done()
        })

        .catch((err) => {
            done(err)
        })
    })

    test('Profile Invalid created cause name not given', (done) => {
        request(app)
            .post('/createprofile')
            .send({
                photo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg",
                description: "customer service from Alexa",
            })

        .then((res) => {
            expect(res.status).toBe(400)
            expect(res.body).toEqual({"message": ["Bot name is required."]});
            done()
        })

        .catch((err) => {
            done(err)
        })
    })

    
})

describe('Edit Profile', () => {
    test('Edit name success', (done) => {
        request(app)
            .put('/editProfile/1')
            .send({
                name: "Andin Bot",
            })
            .then((res) => {
                expect(res.status).toBe(200);
                expect(res.body).toEqual({"message":"Profile with id 1 has been updated!"});
                done()
            })
            .catch((err) => {
                done(err)
            })
    })

    test('Edit failed because id not found', (done) => {
        request(app)
            .post('/editProfile/5')
            .send({
                name: "Customer Agent",
            })

        .then((res) => {
            expect(res.status).toBe(404);
            expect(res.body).toEqual({});
            done();
        })

        .catch((err) => {
            done(err)
        })
    })

})

// beforeAll( async () => {
//     await Profile.destroy({
//         where: {
//             name: 'Alexa'
//         }
//     })
// })

// afterAll( async ()=>{
//     await Profile.destroy({
//         truncate: true,
//         cascade: true,
//         restartIdentity: true
//     })
// })