# Travcoo

Travcoo is a service-based application. The first service in this repository is
the user service.

## Project structure

```text
Travcoo/
├── user-service/
│   ├── src/
│   │   └── index.js
│   ├── .env.example
│   ├── package.json
│   └── package-lock.json
└── .gitignore
```

## Running the user service

```bash
cd user-service
npm install
npm run dev
```

The service listens on port `3000` by default. Set `PORT` in a local `.env`
file to use a different port.

## Available scripts

- `npm start` - Start the service.
- `npm run dev` - Start the service with Nodemon.
