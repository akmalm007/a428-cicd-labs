node {
    docker.image('node:16-buster-slim').inside('-p 3000:3000') {
        triggers {
            pollSCM('*/2 * * * *')
        }   

        stage('Build') {
            sh 'npm install'
        }
        stage('Test') {
            sh './jenkins/scripts/test.sh'
        }
    }
}