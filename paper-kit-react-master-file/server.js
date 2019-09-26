const express = require('express');
const path = require('path');
const port = 3000; 
const app = express();

app.use(express.static(paper-kit-react-master-file));
app.listen(port);
console.log('Server Started!');