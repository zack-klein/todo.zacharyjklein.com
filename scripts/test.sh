#!/bin/bash

# TODO: Add tests!
cd ./terraform

wget https://releases.hashicorp.com/terraform/0.12.8/terraform_0.12.8_linux_amd64.zip
unzip terraform_0.12.8_linux_amd64.zip
sudo mv terraform /usr/local/bin/
rm terraform_0.12.8_linux_amd64.zip

terraform init
terraform plan

echo "Tests complete!"
