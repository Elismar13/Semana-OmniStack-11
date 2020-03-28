const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        

        console.log(request.body)
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    
        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.body;
        
        const ong = await connection('ongs').where('id', id).delete();

        return response.status(204).send();
    },

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
}