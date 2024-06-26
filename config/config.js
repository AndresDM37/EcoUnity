require('dotenv').config();//cargar las variables que hay en .env

const config = {
  env: process.env.NODE_ENV || 'dev',//asi se leen variables de entorno
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  recoverySecret: process.env.JWT_RECOVERY,
  mailUser : process.env.MAIL_USER,
  mailPass: process.env.MAIL_PASS,
}

module.exports = {config};
