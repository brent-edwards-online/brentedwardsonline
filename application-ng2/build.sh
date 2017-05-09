#!/bin/bash

function mydelay()
{
	printf "  "
	for (( i = 1 ; i <= $1 ; i++ )); do
		printf "*"
		sleep 0.5
	done
	echo ""
}

ANGULAR_DIR="../../brentedwardsonline_angular2"
PHP_API="../../brentedwardsonline_phpapi"

clear
echo "Removing Old Application" 
rm -rf ../../brent-edwards-online.github.io/
mydelay 5
echo ""

echo "Building BrentEdwardsOnline Angular2" 
rm -rf dist/
mydelay 5
echo ""

echo "Compiling Angular2 Application" 
ng build --prod
echo ""

echo "Copying Files To Deployment Folder" 
mydelay 5
cp -r dist/ ../../brent-edwards-online.github.io/
echo ""

echo "  Finished Building BrentEdwardsOnline Angular2" 