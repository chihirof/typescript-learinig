#!/bin/bash
if [ $# -eq 1 ]; then 
  node dist/$1.js 
fi
