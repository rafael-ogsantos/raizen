import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('vehicles', table => {
        table.string('id').primary();
        table.enum('brand', ['XABLAU', 'VALIDVEHICLE']);
        table.string('plate').notNullable();
        table.enum('type', ['car', 'truck', 'motorcycle']).notNullable();
        table.dateTime('createdAt').notNullable();
        table.dateTime('updatedAt').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('vehicles');
}

