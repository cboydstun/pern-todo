const express = require("express");
const app = express();
app.use(express.json());
const SERVERPORT = process.env.PORT || 7000;

// Connect DB
const pool = require("./config/db");

// Routes
const noteRoutes = require("./routes/note");
app.use('/api/note', noteRoutes);

app.listen(SERVERPORT, () => {
  console.log(`Server is running on port ${SERVERPORT}`);
});
