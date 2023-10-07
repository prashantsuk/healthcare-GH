pipeline {
    agent any
 
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
}
