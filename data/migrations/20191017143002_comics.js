
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comics', tbl => {
        tbl.increments();
        tbl.string('title', 255)
          .notNullable();
        tbl.integer('issue')
          .notNullable();
    });
  
};;

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comics');
  
};
