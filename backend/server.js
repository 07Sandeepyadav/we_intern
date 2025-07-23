const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const Contact = require('./models/Contact'); // import model

const app = express();
const PORT = process.env.PORT || 5173;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB Error:", err));

// POST route to store contact form data
app.post('/contact', async (req, res) => {
  try {
    const contactData = new Contact(req.body);
    await contactData.save();
    res.status(200).json({ success: true, message: "Form submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to save data." });
  }
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${5173}`));
