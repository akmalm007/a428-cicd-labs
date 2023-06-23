node {
    docker.image('node:16-buster').withRun('-p 3200:3200') { container ->
        stage('Build') {
            sh "docker exec ${container.id} npm install"
        }
        stage('Test') {
            sh "docker exec ${container.id} ./jenkins/scripts/test.sh"
        }
    }
}
