# nodejs-stidy

![Node.js CI](https://github.com/cganesan/nodejs-stidy/actions/workflows/nodejs.yml/badge.svg)

Simple Node.js study project demonstrating modular code and a MongoDB connection.

Quick start

1. Install dependencies:

```bash
npm install
```

2. Set MongoDB connection (recommended):

```bash
export MONGODB_URI="your-mongodb-connection-string"
export DB_NAME="ganesh-node"
```

3. Run the app:

```bash
node App.js
```

Notes
- The project uses `MONGODB_URI` and optional `DB_NAME` environment variables. Using env vars keeps credentials out of source control.
- `Calculate/` contains small example modules (`Sum`, `Multiply`).
