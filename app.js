const express = require("express");

const app = express();
const PORT = 3000; // You can change this to any available port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});