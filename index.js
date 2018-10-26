const express = require('express');
const app = express();
const port = 3000;

const quote = ['Ohhhhhhhh Geeeeeezzzzz', "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV", "Listen, Morty, I hate to break it to you but what people call 'love' is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science", "Weddings are basically funerals with cake.", "You're young, you have your whole life ahead of you, and your anal cavity is still taut yet malleable.", "Well then, get your shit together. Get it all together. And put it in a backpack. All your shit. So it’s together. And if you gotta take it somewhere, take it somewhere, you know, take it to the shit store and sell it… Or put it in a shit museum, I don’t care what you do, you just gotta get it together."];

//for (i=0; i < quote.length; i++) {
    
//}

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', (req, res) => {

    var rand = quote[Math.floor(Math.random() * quote.length)];
    console.log("Random Quote Generated");
    res.json({ rand });
});

app.post('/change_topic', (req, res) => {
    // change the endpoint so that it updates from the phone!
});

app.listen(port, () => console.log(`Listening on port ${port}`));