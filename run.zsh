#!/bin/zsh

echo "🌱 Seeding the database..."
NODE_OPTIONS="--loader ts-node/esm" node ./db/seeds/run-seed.ts

echo "🚀 Starting the server with nodemon (TS + ESM)..."
npx nodemon --watch ./server \
  --ext ts \
  --exec "node --loader ts-node/esm" ./server/listen.ts
