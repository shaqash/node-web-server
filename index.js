const express = require("express");
const path = require("path");

// Constants
const PORT = process.env.PORT || 8080;

// Init
const app = express();

// Use express static
app.use(express.static(path.join(__dirname, "public")));

// Listen for requests
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

