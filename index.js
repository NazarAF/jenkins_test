/** @format */

const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => res.send("Hello, Jenkins! This is a test deployment."));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
