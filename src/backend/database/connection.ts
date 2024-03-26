const mysql = require('mysql2/promise.js')

const databaseName: string = process.env.NODE_ENV === 'test' ? 'wellify_test' : 'wellify_db'

const fn = async (): Promise<void> => {
  const connection = await mysql.createConnection ({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'robbob',
  password: process.env.DB_PASSWORD || 'robbob',
  database: databaseName,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
  })
  
  connection.query(`
    select * from example;
    `)
  .then((res) => {
    console.log(res);
  
  })
}

fn()