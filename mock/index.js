const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());

const chatsJson = require("./top-music.json");

const PORT = 3000;

app.use(cors());

app.get('/charts', (req, res)=>{
    res.send(chatsJson);
});

app.listen(PORT, ()=>{
    console.log("Mock Rodando")
})