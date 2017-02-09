## Devops Homework-1B Configuring Servers

This readme will provide on howto provision server on using Amazon AWS. This is specific to mac for installing node and npm as brew package manager is used. And if ran on different OS, you will have to install its own packages and also have to modify https://github.com/amritbhanu/Devops-HW1B/blob/master/server_provision.sh#L4. But rest of the scripts will work as it is.

## Instructions on getting started
a. To get started, you will need to sign up with [Amazon AWS] (https://aws.amazon.com/premiumsupport/signup) .

b. You will need the Access and Secret token for AWS. The instructions to download these tokens can be found [here](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html).

c. You need to set these tokens in the code. The names of the these tokens are - 

```
AWS_ACCESS_KEY
AWS_SECRET_KEY
```
d. You need to generate ssh keys in your home directory of your machine. The instructions are available [here](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-keys-with-digitalocean-droplets).

e. Next for AWS you need to import your id_rsa.pub key which was generated in previous step into your key-pair category in ec2 dashboard. And name that imported key as, "devop". If you want to change the name of the key, make sure you change it in code as well at https://github.com/amritbhanu/Devops-HW1/blob/master/aws/CreateInstance.js#L16. Follow these instructions to find where the key-pair [are] (http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html).

## Requirements for the repository
This project need npm and nodejs. These dependencies will be installed automatically by running the server_provision.sh shell script. 

## Steps to follow in order to provision the VM's
a. Clone this repository into your local system.

b. Run the following script to provision server for AWS:

```
bash server_provision.sh
```

c. To configure jenkins and setup a job to build that repo automatically using Ansible. Use these commands
```
cd ansible
ansible-playbook playbook.yml -i inventory
```

## ScreenCast
[Server Provisioning] ()

## Concept Questions
1. What are some benefits of continuous integration?
   - Detecting defects and fixing them faster
   - Health of software is measurable
   - Reduce assumptions about environment
   - Reducing repetitive processes saves time, costs, 	and effort
   - CI can enable you to release deployable software at any point in time.
   - CI offers a global mechanism for feedback about failure

2. What are some risks of not using continuous integration?
   - Fear of making changes or refactoring the database or code
   - Difficulty in populating the database with diff. sets of data
   - Difficulty in maintaining development and testing environments
   - Late discovery of defects
   - Lack of project visibility (awareness of changes)
   - Low-quality software

3. What are some reasons why a company may use a dedicated build team?
   - when it becomes inefficient to have many developers learn and manage a complex build process.
   -  experienced builders understood
the build system better than others or newbies.
   - build was a complicated, evolving,
and time consuming process that required dedicated teams.
4. What are some barriers to applying continuous integration in priorierty contexts?
   - Developers who wish to adopt CI that will help them be more productive are often stymied by institutional hurdles.
   - Difficulty troubleshooting a CI build failure
   - Overly long build times
   - Lack of support for the desired workflow
   - Setting up a CI server or service
   - Lack of tool integration
   - Security and access controls
   - Easier configuration of CI servers or services
   - Better tool integration
   - User interfaces for modifying CI configurations
   - Better container/virtualization support 
   - Better notifications from CI servers or services
   - Better security and access controls

