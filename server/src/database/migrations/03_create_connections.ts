import knex from 'knex';

// quais alteracoes para realizar no bd
export async function up(knex: knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id') //foreing key
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE') //deleta as auals vincualdas a esse professor
            .onUpdate('CASCADE');

        table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();
    })
}

// desfazer alteracoes
export async function down(knex: knex) {
    return knex.schema.dropTable('connections');
}