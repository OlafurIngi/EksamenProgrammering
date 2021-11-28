// We require express
const express = require("express");
const app = express();



// Define ther server PORT and listen
const PORT = 4000;

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT );
})

