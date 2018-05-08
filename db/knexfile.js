module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "fuel_app_development"
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./seeds/development"
    }
  }
}
