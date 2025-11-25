// Imports dotenv to read env file and the variables

require("dotenv").config();

const globals = {
    db: {
        connectionString: process.env.CONNECTION_STRING
    }
};

module.exports = globals;