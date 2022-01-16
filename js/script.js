const {Client} = require('pg');
const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  port: 5432,
  database: "cheque",
})

client.connect()
.then(() => console.log("connected successfully"))
.then(() => client.query("insert into data values ($3)", [234]))
.then(() => client.query("select * from data"))
.then(results => console.table(results.rows))
.catch(e => console.log)
.finally(() => client.end())

// function saveData(){
//   alert("SAVED TO DATABASE");
// }
