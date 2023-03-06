const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const routes = require('./routes')
const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.set('port', process.env.PORT || 8000)

const dbOptions = {
    host: 'localhost',
    port: 3306,
    database: 'gcd',
    user: 'root',
    password:'061604'
}

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('welcome to my api')
})

app.use('/api', routes)


app.listen(app.get('port'), ()=>{
    console.log('Ejecutando en puerto', app.get('port'))
})