//dev depenedencies
const express = require("express");
const app = express();
const { errorHandler } = require('./middleware/errorMiddleware');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const SERVERPORT = process.env.PORT || 7000;

// Connect DB
const pool = require("./config/db");

// Routes
const noteRoutes = require("./routes/note");
app.use('/api/note', noteRoutes);

// Error Middleware
app.use(errorHandler);

// App listening
app.listen(SERVERPORT, () => {
  console.log(`Server is running on port ${SERVERPORT}`);
});
