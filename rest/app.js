const express = require('express')
const app = express();



let PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(require('./routes/dishes'))
app.use(require('./routes/newdishes'))
app.listen(3000, ()=> {
    console.log(`listening on port ${PORT}`)
})