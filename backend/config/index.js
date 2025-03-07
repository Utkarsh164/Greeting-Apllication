require("dotenv").config();// Load environment variables from .env file

module.exports = {
    PORT: process.env.PORT || 9000, // Default to 9000 if PORT is not set
};

