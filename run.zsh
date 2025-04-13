#!/bin/zsh

# ESM loader magic (no shell-breaking quotes)
LOADER="--import=data:text/javascript,import { register } from 'node:module'; import { pathToFileURL } from 'node:url'; register('ts-node/esm', pathToFileURL('./'));"

echo "🌱 Seeding the database"
node "$LOADER" ./db/seeds/run-seed.ts

echo "🚀 Starting the server!"
npx nodemon --watch ./server \
  --ext ts \
  --exec bash -c "node \"$LOADER\" ./server/listen.ts"
