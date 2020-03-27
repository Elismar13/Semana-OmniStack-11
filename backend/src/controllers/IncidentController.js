const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
                                .join('ongs', 'ong_id', '=', 'incidents.ong_id')
                                .limit(5)
                                .offset( (page -1 ) * 5)
                                .select(['incidents.*', 
                                        'ongs.name', 
                                        'ongs.email', 
                                        'ongs.whatsapp', 
                                        'ongs.city', 
                                        'ongs.uf']);
        
        response.header('X-Total-Counts', count['count(*)'])   //Retornando a quantidade de páginas pelo HEADER da RESPOSTA

        return response.json( incidents );
    },

    async create(request, response) {
        const { title, description, value } = request.body;

        const ong_id = request.headers.authorization;

        //console.log(request.body, "ID:" + ong_id)

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;


        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        
        console.log(incident.ong_id, ong_id)

        if(incident.ong_id != ong_id) {
            return response.status(401).json({ error:"Operation not permitted." });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
}