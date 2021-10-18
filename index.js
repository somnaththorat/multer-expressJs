const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/file-upload-router');
const PORT = 8080;



const app = express();
require('./database')();

app.use(cors());
app.use(bodyParser.json());
app.use('/uplods', express.static(path.join(__dirname, 'uploads')));


app.use('/api', fileRoutes.routes);

app.listen(PORT, ()=>console.log(`server running on port ${PORT}`)); 