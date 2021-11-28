// We require express
const express = require("express");
const app = express();




// Define ther server PORT and listen
const PORT = 4000;

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT );
})

// Controllers
const userControl = require("./src/controllers/user-controller");

// Routes for the userControl const
app.use("/users", userControl);

// Middleware
app.use(express.static("./src/views"));

// Middleware which decodes the body that is coming in
app.use(express.json());

// Routes
app.use("/users", userControl);

