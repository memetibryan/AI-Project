const {Client} = require('pg');

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  port: 5432,
  database: "cheque",
})

// code to query database data
// client.query('select * from data', (err,res)=>{
//   if(!err){
//     console.log(res.rows);
//   }else {
//     console.log(err.message);
//   }
//   client.end;
// })

function saveData(){
  client.connect()

  .then(() => console.log("connected successfully"))
  // .then(() => client.query("insert into data values ($1,$2,$3,$4)", ['1990-09-23','boni',4325,6789867]))
  .then(() => client.query("select * from data"))
  .then(results => console.table(results.rows))
  .catch(e => console.log)
  .finally(() => client.end())
  
   alert("SAVED TO DATABASE"); 
}
