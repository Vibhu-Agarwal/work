#!/bin/bash

# yarn build

# copy build files
rm -rf deploy/
mkdir -p deploy
cp -f index.html deploy/
cp -f sw.js deploy/
cp -f manifest.json deploy/
cp -fR dist/ deploy/
cp -fR img/ deploy/

git checkout gh-pages
cp -fR deploy/* .

rm -rf deploy/
git add .
git status
git commit -m "deploy"
git push origin gh-pages

git checkout master
