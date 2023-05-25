const express = require('express') //Requerir el módulo de express
const app = express() //Creamos el objeto
const port = 3000 
const path = require("path")


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/index.html'))    
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/login.html'))    
})

app.listen(port, () => {
    console.log(`Puerto usado ${port}`)
})
