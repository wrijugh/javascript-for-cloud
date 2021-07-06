const express = require('express');
const app = express();
const port = 5001;
const path = require('path');

//app.use(express.static('./public'));
// app.get('/', (req, res) => {
//     res.send('Nodemon is an amazing way to develop');
// });

app.get('/html/html.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));

});

app.listen(port, ()=>{console.log(`running in ${port}`)});