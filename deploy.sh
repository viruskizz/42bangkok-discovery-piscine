#!/bin/bash
if [ -z $1];
then
    msg="release rush to docs"
else
    msg=$1
fi
echo "MESSAGE = $msg"
cp -RT rush docs
git status
git add rush docs
git commit -m "$msg"
git push