pipeline {
    agent any
    environment {
        NODE_VERSION = '18' // Cambia si usas otra versión de Node.js
    }
    stages {
        stage('Checkout') {
            steps {
                echo '📥 Clonando el repositorio...'
                checkout scm
            }
        }
        stage('Build') {
            steps {
                script {
                    try {
                        echo '⚙️ Instalando dependencias...'
                        bat 'npm install'
                        bat 'npm run build'
                    } catch (Exception e) {
                        error('❌ Error en la etapa de Build')
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    try {
                        echo '🧪 Ejecutando pruebas...'
                        bat 'npm test'
                    } catch (Exception e) {
                        error('❌ Error en la etapa de Test')
                    }
                }
            }
        }
        stage('Docker Build & Run') {
            steps {
                script {
                    try {
                        echo '🚀 Desplegando aplicación...'
                        // bat 'docker build -t desafio08grupo02 .' // Construye la imagen Docker
                        bat 'docker run -d -p 3000:3000 desafio08grupo02' // Ejecuta el contenedor Docker
                        bat 'npm start &'
                    } catch(Exception e) 
                    {
                        error('❌ Error en la etapa de Deploy')
                    }
                }
            }
        }
    }
    post {
        success {
            echo '✅ Pipeline completado con éxito'
        }
        failure {
            echo '❌ El pipeline ha fallado'
        }
    }
}
