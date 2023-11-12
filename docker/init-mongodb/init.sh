#!/bin/bash

echo "########### Loading data to Mongo DB ###########"
mongoimport --jsonArray --db TestBootcamp --collection miColeccion --file /tmp/data/miColeccion.json