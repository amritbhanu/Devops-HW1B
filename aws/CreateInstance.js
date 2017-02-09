var AWS = require('aws-sdk');
var fs = require("fs");

var aws_access_key = ""
var aws_secret_key = ""

AWS.config.region = 'us-west-2';
AWS.config.update({accessKeyId: aws_access_key, secretAccessKey: aws_secret_key});

var ec2 = new AWS.EC2();

var params = {
  ImageId: 'ami-d732f0b7', // Ubuntu Server 14 LTS
  InstanceType: 't2.micro',
  MinCount: 1, MaxCount: 1,
  KeyName: 'devop',
};

// Creating the instance
ec2.runInstances(params, function(err, data) {
  if (err) { console.log("Could not create instance", err); return; }

  var instanceId = data.Instances[0].InstanceId;
  getInstanceData(instanceId);
});

function getInstanceData(instanceID) {
  var interval = setInterval(function() {
    ec2.describeInstances({InstanceIds:[instanceID]}, function(err, data) {
      if(err) {
        console.log("ERROR - " + err);
      }
      else {
        
          if(data.Reservations && data.Reservations[0].Instances) {
            if(data.Reservations[0].Instances.length > 0 && data.Reservations[0].Instances[0].State.Name == "running") {
              var instance = data.Reservations[0].Instances[0];
              fs.writeFile(__dirname + "/../ansible/inventory", "aws ansible_ssh_host=" + instance.PublicIpAddress + " ansible_ssh_user=ubuntu ansible_ssh_private_key_file=~/.ssh/id_rsa" + "\n")
              console.log("AWS Instance Ip address: "+ instance.PublicIpAddress);
              clearInterval(interval);
            }
          }
        }
      });
  }, 5000);
};

