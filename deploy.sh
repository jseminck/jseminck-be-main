#!/bin/sh

tar -C /jseminck-be-main -zxvf jseminck-be-main.tar.gz
cd ./jseminck-be-main/
docker build -t jseminck-be-main .
docker run -p 9200:8080 -d jseminck-be-main
cd ..
rm jseminck-be-main.tar.gz
