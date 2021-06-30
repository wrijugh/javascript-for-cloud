const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => {
    res.send('Nodemon is an amazing way to develop');
});

app.listen(port, ()=>{console.log(`running in ${port}`)});