pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
            checkout([$class: 'GitSCM', branches: [[name: '*/live-code']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/prashantsuk/jenkins-terraform-ec2-pipeline.git']]])            

          }
        }
        
        stage ("Buiding Image") {
            steps {
                sh ('docker build -t .') 
            }
        }
         stage ("scanning docker image") {
            steps {
                sh ('packer validate') 
            }
        }
         stage ("packer build") {
            steps {
                sh ('') 
            }
        }
        
        /*stage ("terraform Action") {
            steps {
                echo "Terraform action is --> ${action}"
                sh ('terraform ${action} --auto-approve') 
           }
        }*/
    }
}
