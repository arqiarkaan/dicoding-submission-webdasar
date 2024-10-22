const express = require('express');
const path = require('path');
const app = express();

// Middleware untuk file statis dari direktori root
app.use(express.static(path.join(__dirname)));

// Rute default untuk file index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Janalin server pada port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
