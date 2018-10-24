const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', (req, res) => {

    const quote = 'ooooohhhh geeezz'
    res.json({ quote })
});

app.listen(port, () => console.log(`Listening on port ${port}`));