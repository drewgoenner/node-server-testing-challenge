const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    remove,
    getAll,
    findById,
};

async function insert(comic) {
    const [id] = await db('comics').insert(comic, 'id');
    return db('comics').where({id}).first();
}

function remove(id){
    return db('comics')
      .where({ id })
      .del();
}

