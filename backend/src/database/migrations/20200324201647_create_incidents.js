
exports.up = function(knex) {
    return knex.schema.createTable( 'incidents', function (table) {
      table.increments();   //Chave primária

      table.string('title').notNullable(); 
      table.string('description').notNullable();  
      table.decimal('value').notNullable();  

    //Coluna para saber quem criou a causa (relacionamento SQL)
      table.string('ong_id').notNullable();  
    
      //Chave estrangeira para o campo 'ong_id'
      table.foreign('ong_id').references('id').inTable('ongs');
    } )
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  };
  