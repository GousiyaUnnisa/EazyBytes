const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware to handle CORS and JSON data
app.use(cors());
app.use(express.json());

// API endpoint to return project data
app.get('/api/projects', (req, res) => {
  const projects = [
    { id: 1, name: 'Portfolio Website', description: 'My personal portfolio website.' },
    { id: 2, name: 'blog cms', description: 'A CMS based designedn.' },
  ];
  res.json(projects); // Send the projects as a JSON response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Project schema
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
});

// Create a Project model
const Project = mongoose.model('Project', projectSchema);

// API to fetch projects from MongoDB
app.get('/api/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});