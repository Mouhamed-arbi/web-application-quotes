const express = require('express');
const connection=require('./database')
const app = express()
const cors = require('cors');

const PORT = 5000;
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello from the server!');
})

app.get("/api/quote",(req,res)=>{
  connection.query(
    'SELECT * FROM `quote`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      res.send(results)
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
})

app.post("/api/quote",(req,res)=>{
  const post =req.body; 
  console.log(post)

 connection.query(`INSERT INTO quote (name,bodyquote,typequote) VALUES (?,?,?)`,[post.name,post.bodyquote,post.typequote],
  (error,  results) => {
    if (error) return res.json({ error: error });
     res.json("created")
    });
})

app.delete("/api/quote/:id",(req,res)=>{ 
 connection.query(`DELETE FROM quote WHERE idquote=${req.params.id}`,
  (error,  results) => {
    if (error) return res.json({ error: error });
     res.json('Deleted')
    });
   
})

app.put("/api/quote/:id",(req,res)=>{
 connection.query(`UPDATE quote SET name='${req.body.name}', bodyquote='${req.body.bodyquote}',typequote='${req.body.typequote}' WHERE idquote=${req.params.id}`,
 (error,  results) => {
    if (error) return res.json({ error: error });
     res.json('Updated')
    });
   
})

app.get("/api/quote/:typequote", (req, res) => {
  connection.query(
    "SELECT * FROM quote WHERE typequote = ?",
    [req.params.typequote],
    function(err, results, fields) {
      if (err) throw err;
      console.log(results); 
      res.send(results)
      console.log(fields); 
    }
  );
});



app.listen(PORT, () => {
  console.log(`Server listening at localhost:${5000}!`);
});
