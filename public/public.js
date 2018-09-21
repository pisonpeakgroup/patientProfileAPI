const express = require('express');
const path = require('path');

const app = express();
(app.router);
app.use(express.static(path.join(__dirname, 'public')));