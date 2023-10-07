pipeline {
    agent any

stages {
        stage('Scan git Repo') {
            steps {
            sh ('trivy repo https://github.com/prashantsuk/healthcare-GH.git')
          }
        }
        
    
    stages {
        stage('Checkout') {
            steps {
            checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/prashantsuk/healthcare-GH.git']]])            

          }
        }
        
        stage ("Buiding Image") {
            steps {
                sh ('docker build -t  prashant680844/heathcare .') 
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
