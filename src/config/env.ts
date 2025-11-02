import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

interface EnvConfig {
  NODE_ENV: string;
  PORT: number;
  API_PREFIX: string;
  RATE_LIMIT_WINDOW_MS: number;
  RATE_LIMIT_MAX_REQUESTS: number;
  LOG_LEVEL: string;
}

const getEnvVariable = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is required but not defined`);
  }
  return value;
};

const getEnvNumber = (key: string, defaultValue: number): number => {
  const value = process.env[key];
  return value ? parseInt(value, 10) : defaultValue;
};

export const env: EnvConfig = {
  NODE_ENV: getEnvVariable('NODE_ENV', 'development'),
  PORT: getEnvNumber('PORT', 3000),
  API_PREFIX: getEnvVariable('API_PREFIX', ''),
  RATE_LIMIT_WINDOW_MS: getEnvNumber('RATE_LIMIT_WINDOW_MS', 15 * 60 * 1000), // 15 minutes
  RATE_LIMIT_MAX_REQUESTS: getEnvNumber('RATE_LIMIT_MAX_REQUESTS', 100),
  LOG_LEVEL: getEnvVariable('LOG_LEVEL', 'info'),
};

export const isDevelopment = env.NODE_ENV === 'development';
export const isProduction = env.NODE_ENV === 'production';
export const isTest = env.NODE_ENV === 'test';
