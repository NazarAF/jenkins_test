pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/NazarAF/jenkins_test.git'
            }
        }
        stage('Test Webhook') {
            steps {
                echo 'GitHub Webhook Triggered Successfully!'
            }
        }
    }
}
