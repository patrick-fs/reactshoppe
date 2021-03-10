#!/bin/bash
npm run predeploy
aws s3 sync build s3://reactshoppe/ --delete
echo "Site is up at http://reactshoppe.s3-website-us-east-1.amazonaws.com/"