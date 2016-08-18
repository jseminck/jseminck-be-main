#!/bin/sh

mkdir jseminck-be-main
mv ./jseminck-be-main.tgz jseminck-be-main/jseminck-be-main.tgz
cd jseminck-be-main
tar -zxvf jseminck-be-main.tgz
docker build -t jseminck-be-main .
docker run -p 9200:8080 -d jseminck-be-main
rm jseminck-be-main.tgz
