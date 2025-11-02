import winston from 'winston';
import { env, isDevelopment } from './env';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
  winston.format.json()
);

const consoleFormat = winston.format.combine(
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} [${info.level}]: ${info.message}${info.stack ? '\n' + info.stack : ''}`
  )
);

const transports = [
  new winston.transports.Console({
    format: consoleFormat,
  }),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
    format,
  }),
  new winston.transports.File({
    filename: 'logs/combined.log',
    format,
  }),
];

export const logger = winston.createLogger({
  level: env.LOG_LEVEL,
  levels,
  format,
  transports,
  exitOnError: false,
});

// If we're in development, log to the console with more verbosity
if (isDevelopment) {
  logger.level = 'debug';
}
