pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE_NAME = 'packer-healthcare'
    }
    
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/prashantsuk/healthcare-GH.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(env.DOCKER_IMAGE_NAME)
                }
            }
        }
        
        stage('Scan Docker Image') {
            steps {
                script {
                    def scanResult = docker.image(env.DOCKER_IMAGE_NAME).run("--entrypoint", "", "aquasec/trivy", "--exit-code", "0", "--severity", "HIGH,CRITICAL", "--no-progress", env.DOCKER_IMAGE_NAME)
                    
                    if (scanResult == 0) {
                        echo "Trivy scan passed. Proceeding with deployment."
                    } else {
                        error "Trivy scan found vulnerabilities. Build failed."
                    }
                }
            }
        }
        
        // Add more stages as needed (e.g., deploy, test, etc.)
    }
    
    post {
        failure {
            echo "Build failed. Cleaning up..."
            script {
                docker.image(env.DOCKER_IMAGE_NAME).remove()
            }
        }
    }
}

