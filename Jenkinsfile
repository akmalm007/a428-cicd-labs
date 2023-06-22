node {
    docker.image('node:16-buster-slim').withRun('-p 3200:3200') {
        stage('Build') {
            sh 'npm install'
        }
        stage('Test') {
            sh './jenkins/scripts/test.sh'
        }
    }
}
