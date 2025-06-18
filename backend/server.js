// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/message-post-db';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Message Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  post: String,
});

const Message = mongoose.model('Message', messageSchema);

// POST endpoint to save messages
app.post('/messages', async (req, res) => {
  try {
    const { name, email, post } = req.body;
    const newMessage = new Message({ name, email, post });
    await newMessage.save();
    res.status(201).json({ message: '✅ Message saved successfully' });
  } catch (error) {
    console.error('Save error:', error);
    res.status(500).json({ error: '❌ Error saving message' });
  }
});

// Health Check
app.get('/health', (req, res) => res.send('✅ Backend is up!'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
