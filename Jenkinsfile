node {
    docker.image('node:16-buster-slim').withRun('-p 3200:3200') {
        stage('Build') {
            sh 'docker exec -w /workspace ${container.id} npm install'
        }
        stage('Test') {
            sh 'docker exec -w /workspace ${container.id} ./jenkins/scripts/test.sh'
        }
    }
}
