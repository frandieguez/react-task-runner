pipeline {
  agent any
  tools {nodejs "nodejs"}
  stages {
    stage('Install Deps') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
  environment {
    CI = 'true'
  }
}
