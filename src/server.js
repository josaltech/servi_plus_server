const express = require('express');
const cors = require('cors');
const verifyJwt = require('./middlewares/verifyJwt');
const app = express();

const authRouter = require('./routes/auth.routes');
const ticketsRouter = require('./routes/tickets.routes');

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/tickets', verifyJwt, ticketsRouter);

module.exports = app;
