import knex from 'knex';

// quais alteracoes para realizar no bd
export async function up(knex: knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        
        table.integer('user_id') //foreing key
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE') //deleta as auals vincualdas a esse professor
            .onUpdate('CASCADE')
    })
}

// desfazer alteracoes
export async function down(knex: knex) {
    return knex.schema.dropTable('classes');
}