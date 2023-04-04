const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ElectronicallyYours"
})

db.connect(err => {
  if (err) {
      console.log(err.message)
      return;
  }
  console.log("Connected to MySQL database")
});

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

app.get("/products", (req, res) => {
    const q = "SELECT * FROM products";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });

app.post("/products", (req, res) => {
    const q = "INSERT INTO products (`name`, `description`, `price`, `image_url`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.price,
        req.body.description,
        req.body.image_url,
      ];
      db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
});

  

app.listen(8800, () => {
  console.log("Connected to backend!");
});
