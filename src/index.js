const app = require('./server');
const config = require('../config');
const connectToDb = require('./database/db');

const { PORT, database } = config;

// Connect to database
connectToDb(database.mongoUri);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
