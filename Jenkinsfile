pipeline {
    agent {
        docker {
            image 'node:16-buster-slim'
            args '-p 3100:3100'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
    stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
}