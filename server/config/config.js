require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: '',
    database: 'postgres',
    host: 'db.tvwekwohafzwojqwkuaw.supabase.co',
    logging: true,
    dialect: "postgres"
  },
  test: {
    username: 'postgres',
    password: '',
    database: 'postgres',
    host: 'db.tvwekwohafzwojqwkuaw.supabase.co',
    dialect: "postgres"
  },
  production: {
    username: 'postgres',
    password: '',
    database: 'postgres',
    host: 'db.tvwekwohafzwojqwkuaw.supabase.co',
    dialect: "postgres"
  }
}