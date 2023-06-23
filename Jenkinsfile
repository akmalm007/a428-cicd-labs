node {
    checkout scm
    docker.image('node:16-buster-slim').withRun('-p 3000:3000') { container ->
        stage('Build') {
            sh "docker exec ${container.id} /bin/bash -c 'cd /var/jenkins_home/workspace && npm install'"
        }
        stage('Test') {
            sh "docker exec ${container.id} /bin/bash -c 'cd /var/jenkins_home/workspace/jenkins/scripts && ./test.sh'"
        }
    }
}
