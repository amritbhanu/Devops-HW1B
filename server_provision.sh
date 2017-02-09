#! /bin/bash

echo "Installing node, npm, ansible on localmachine"
brew install node
brew install ansible

echo "Installing aws-sdk"

cd ./aws
npm install --save

cd ..

echo "Dependencies have been installed"

echo "Provisioning AWS Server"
node aws/CreateInstance.js

#cd ./ansible/
#ansible-playbook playbook.yml -i inventory
