const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(  async() => {
        await connection.migrate.rollback();  //Zera o banco de dados
        await connection.migrate.latest();    //Executa as migrations
    });

    afterAll(async() => {
        await connection.destroy();
    })

    it("Should create a new ONG", async () => {
        const response = await request(app)
            .post('/ongs')
            .send(
                {
                    "name":"APUD",
                    "email":"contato@test.com",
                    "whatsapp":"47456462154",
                    "city":"Campina Grande",
                    "uf":"PB"
                }
            );

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})