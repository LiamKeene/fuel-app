module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "fuel_app_development"
    }
  },

  staging: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "fuel_app_development"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "fuel_app_development"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
