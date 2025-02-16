pipeline {
    agent any
    environment {
        IMAGE_NAME = 'jenkins-test-app'
        CONTAINER_NAME = 'jenkins-test'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/NazarAF/jenkins_test.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME} ."
                }
            }
        }
        stage('Run Container') {
            steps {
                script {
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                    sh "docker run -d -p 3000:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
                }
            }
        }
    }
}
