const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/todos')
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

// Todo Model
const Todo = mongoose.model('Todo', {
  text: String,
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Get all todos
app.get('/api/todos', async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
});

// Create todo
app.post('/api/todos', async (req, res) => {
  const todo = new Todo({ text: req.body.text });
  await todo.save();
  res.json(todo);
});

// Update todo (complete/uncomplete)
app.put('/api/todos/:id', async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    { completed: req.body.completed },
    { new: true }
  );
  res.json(todo);
});

// Delete todo
app.delete('/api/todos/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
