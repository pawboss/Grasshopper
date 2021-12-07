#!/usr/bin/env bash

[ ! -d "/app/node_modules" ] && npm install
echo "
GrassChopper init

█▀▀▀ █▀▀█ █▀▀█ █▀▀ █▀▀ █▀▀ █░░█ █▀▀█ █▀▀█ █▀▀█ █▀▀ █▀▀█
█░▀█ █▄▄▀ █▄▄█ ▀▀█ ▀▀█ █░░ █▀▀█ █░░█ █░░█ █░░█ █▀▀ █▄▄▀
▀▀▀▀ ▀░▀▀ ▀░░▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀░░▀ ▀▀▀▀ █▀▀▀ █▀▀▀ ▀▀▀ ▀░▀▀
";
npm run build:watch


