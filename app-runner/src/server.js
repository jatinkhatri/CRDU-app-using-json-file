const express = require('express');
const routes = require('../src/routes');
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3030;

//Middleware
app.use(routes);


//Listen Server at port specified or by defaulr 3000
app.listen(PORT, () => {
    const info = `Server Running at ${PORT}`;
    console.log(info);
});