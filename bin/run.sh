#!/bin/bash
npm run tsc

if [ $# -eq 1 ]; then 
  node dist/$1.js 
fi
