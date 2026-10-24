const { AppError } = require("../utils/error");
const logger = require("../config/logger");

const errorHandler = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  const statusCode = error instanceof AppError ? error.statusCode : 500;
  const code = error instanceof AppError ? error.code : "SERVER_ERROR";
  const message =
    error instanceof AppError ? error.message : "Internal Server Error";

  if (statusCode >= 500) {
    logger.error(error);
  }

  res.status(statusCode).json({ error: { code, message } });
};

module.exports = errorHandler;
