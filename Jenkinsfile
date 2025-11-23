pipeline {
	agent any

	stages {
		stage('Hello') {
			steps {
				echo "Hello from Jenkins pipeline simulations!'
			}
		}
	
		stage('Backend folder check') {
			dir('backend-stock-simulator') {
				sh '''
				echo "== Backend PWD =="
				pwd
				echo "== Backend LS =="
				ls
				'''
			}
		}

		stage('Frontend folder check') {
			sh '''
			echo "== Frontend PWD =="
			pwd
			echo "== Frontend LS == "
			ls
			'''
		}
	
	}
}
