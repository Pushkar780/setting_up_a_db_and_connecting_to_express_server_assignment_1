require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = 3000 || process.env.PORT;

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log('Error connecting to database:', error);
  });

app.get('/', (req, res) => {
  res.send('Customer Management System backend is running');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
