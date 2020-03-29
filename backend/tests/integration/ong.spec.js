const request = require('supertest');
const aṕp = require('../../src/app');

describe('ONG', () => {
    it("Should create a new ONG", async () => {
        const response = await request(app)
            .post('/ongs')
            .send(
                {
                    "name":"APUD",
                    "email":"contato",
                    "whatsapp":"47 456462154",
                    "city":"Campina Grande",
                    "uf":"PB"
                }
            );

        
    })
})