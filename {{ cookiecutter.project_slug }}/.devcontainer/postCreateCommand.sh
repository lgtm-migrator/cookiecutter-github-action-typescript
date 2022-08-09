#!/bin/bash
python3 -m pip install -r requirements-dev.txt

pre-commit install --install-hooks
#pre-commit install --hook-type commit-msg

npm install -D
npm run build