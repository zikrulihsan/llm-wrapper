# Express TypeScript Starter

A production-ready Express.js API boilerplate with TypeScript, featuring security best practices, logging, error handling, and more.

## Features

- **TypeScript** - Type safety and modern JavaScript features
- **Express.js** - Fast, unopinionated web framework
- **Security** - Helmet, CORS, and rate limiting out of the box
- **Logging** - Winston logger with file and console transports
- **Error Handling** - Centralized async error handling
- **Environment Config** - Type-safe environment variable validation
- **Code Quality** - ESLint and Prettier configured
- **Hot Reload** - Fast development with nodemon and tsx
- **Compression** - Response compression for better performance

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (installed globally)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Copy the environment file:

```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration

### Development

Run the development server with hot reload:

```bash
pnpm dev
```

The server will start at `http://localhost:3000`

### Production

Build the project:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build TypeScript to JavaScript
- `pnpm start` - Start production server
- `pnpm start:dev` - Start development server without nodemon
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm type-check` - Check TypeScript types
- `pnpm clean` - Remove dist folder

## Project Structure

```
src/
├── config/          # Configuration files (env, logger)
├── middlewares/     # Express middleware (error handler, logger)
├── routes/          # API routes
├── controllers/     # Route controllers
├── services/        # Business logic
├── utils/           # Helper functions
├── types/           # TypeScript type definitions
├── app.ts           # Express app setup
└── server.ts        # Server entry point
```

## API Endpoints

### Health Check

- `GET /` - Root endpoint
- `GET /api/v1/health` - Health check endpoint

## Environment Variables

See `.env.example` for all available environment variables:

- `NODE_ENV` - Environment (development/production/test)
- `PORT` - Server port (default: 3000)
- `API_PREFIX` - API route prefix (default: /api/v1)
- `RATE_LIMIT_WINDOW_MS` - Rate limit window in milliseconds
- `RATE_LIMIT_MAX_REQUESTS` - Max requests per window
- `LOG_LEVEL` - Logging level (error/warn/info/http/debug)

## Security Features

- **Helmet** - Sets various HTTP headers for security
- **CORS** - Cross-Origin Resource Sharing enabled
- **Rate Limiting** - Prevents abuse with configurable limits
- **Input Validation** - Body size limits on JSON and URL-encoded data

## Error Handling

The application uses a centralized error handling system:

- All async errors are caught automatically with `express-async-errors`
- Custom `AppError` class for operational errors
- Graceful shutdown on SIGTERM/SIGINT
- Unhandled rejection and exception handlers

## Logging

Winston logger is configured with:

- Console output with colors in development
- File output (error.log and combined.log)
- HTTP request logging
- Error stack traces in development

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

ISC
