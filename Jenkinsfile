node {
    docker.image('node:16-buster-slim').withRun('-p 3200:3200') {
        stage('Build') {
            sh 'docker exec -w /workspace 99eee061c55549b5ca300c307645d3c8f391333d02ca2056275d5586a8aeb096 npm install'
        }
        stage('Test') {
            sh 'docker exec -w /workspace 99eee061c55549b5ca300c307645d3c8f391333d02ca2056275d5586a8aeb096 ./jenkins/scripts/test.sh'
        }
    }
}
