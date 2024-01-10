const knexfile = {
  development: {
    client: 'mysql',
    connection: {
      user: 'root',
      password: 'root',
      database: 'raizen',
      port: 33006,
    },
    migrations: {
      directory: './migrations'
    },
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './test.sqlite3'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}

export default knexfile;