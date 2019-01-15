#!/bin/sh
echo "Packaging - Saimandir.org.."

echo "Cleaning up.. "
rm -rf ../release
mkdir release
chmod 755 release

cp ../* release/
rm -rf release/bin
rm -rf release/release

#tar -cvf saimandir.tar ../*


echo "Packaging Saimandir.org Completed successfully"
