const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

// Midle ware 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('From Car Service Server');
})

app.listen(port, () => {
    console.log('Listing From Port ', port);
})