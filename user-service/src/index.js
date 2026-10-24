const express = require("express");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const { config } = require("./config");
const logger = require("./config/logger");

const { corsMiddleware } = require("./middlewares/cors.middleware");
const errorHandler = require("./middlewares/error.middleware");
const { reqLogger } = require("./middlewares/req.middleware");

const app = express();

app.use(helmet());
app.use(corsMiddleware);
app.use(express.json());
app.use(cookieParser());
app.use(reqLogger);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("User service is running");
});

const startServer = async () => {
  try {
    app.listen(config.port, () => {
      logger.info(`User service is running on port ${config.port}`);
    });
  } catch (error) {
    logger.error("Error starting server:", error);
  }
};

startServer();