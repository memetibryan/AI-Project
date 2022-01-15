const {Client} = require('pg');
const client = new Client({
  user: "memetibryan",
  password: "postgres",
  host: "memetibryan",
  port: 5432,
  database: "cheque",
})

client.connect()
.then(() => console.log("connected successfully"))
.then(() => client.query("insert into information values ($3)", [234]))
.then(() => client.query("select * from information"))
.then(results => console.table(results.rows))
.catch(e => console.log)
.finally(() => client.end())
