import Knex from 'knex';
import knexfile from './knexfile';

const environment = 'development';
const config = knexfile[environment];

const knex = Knex(config);

export default knex;