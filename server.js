import express from "express";
import countries from "./data/countries.js";

const app = express();


app.get("/", (req, res) => {
    res.send("welcome to my Travel Wishlist");
});


app.get('/api/countries', (req, res) => {
    res.json(countries);
});


const PORT = 8000;
app.listen(PORT, () => console.log(`the server is running on port ${PORT}`));




