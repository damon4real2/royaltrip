const express = require('express')
const mysql = require('mysql');
// const { FaPhone } = require('react-icons/fa');

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "123456",
    database: "RoyalTrips"
});

// db.connect()
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
})



app.post('/register', (req, res) => {
    db.query("INSERT INTO users (phone, email, password) VALUES (?,?,?)")
    [phone, username, password],
    (err, result) => {
        console.log(err);
    }
})
app.listen(3001, () => {
    console.log("running server");
})


// const db = mysql.createConnection({
//     host : 'localhost',
//     user : 'royalcrystal',
//     password : 'royalboss',
//     database : 'RoyalTrip'
// })

// db.connect((err) => {
//     if(err){
//         throw err;
//     }
//     console.log('MySql Connected...');
// })


// const app = express()

// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE RoyalTrip';
//     db.query(sql, (err, result) =>{
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created.....')
//     })
// })

// app.listen('3306', () => {
//     console.log('Server is up on port 3306');
// })