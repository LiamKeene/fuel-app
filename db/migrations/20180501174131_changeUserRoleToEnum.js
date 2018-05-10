exports.up = (knex, Promise) => (
  knex.schema.raw(`
    CREATE TYPE user_role AS ENUM (
      'admin',
      'user'
    );
    ALTER TABLE users
    ALTER role TYPE user_role USING role::user_role;
  `)
)

exports.down = (knex, Promise) => (
  knex.schema.raw(`
    ALTER TABLE users
    ALTER role TYPE VARCHAR;

    DROP TYPE user_role;
  `)
)
