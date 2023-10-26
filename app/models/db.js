import mysql from 'mysql'
import dbConfig from '../config/db.config.js'

const connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
})

export default  connection 
