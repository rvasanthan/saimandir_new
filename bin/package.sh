#!/bin/sh
echo "Packaging - Saimandir.org.."

echo "Cleaning up.. "
rm -rf ../release
mkdir ../release

cp -r ../css  ../release/
cp -r ../vendors ../release/
cp -r ../js ../release/
cp -r ../scss ../release/
cp -r ../fonts ../release/
cp -r ../image ../release/  
cp -r ../index.html ../release/

tar -cvf ../release/saimandir.tar ../release/*
gzip ../release/saimandir.tar

echo "Packaging Saimandir.org Completed successfully"
