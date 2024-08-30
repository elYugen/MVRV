@echo off
cd /d frontend
start cmd /k "npm run dev"

cd /d ../backend
start cmd /k "npm run dev"