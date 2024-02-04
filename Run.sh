#!/bin/bash

MODE=$1
FILE="dist/main.js"

if [[ $MODE == "0" ]]; then
    echo "Running with node:"
    node "$FILE"
elif [[ $MODE == "1" ]]; then
    echo "Running with nodemon:"
    npx nodemon --inspect "$FILE"
else
    echo "Invalid mode specified. Please use 0 for node or 1 for nodemon."
fi