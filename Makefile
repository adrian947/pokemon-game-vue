# Define los comandos para ejecutar los contenedores con Docker Compose

# Iniciar los contenedores en segundo plano (modo demonio)
up:
	docker-compose up -d

# Detener y eliminar los contenedores
down:
	docker-compose down

# Ver el registro de los contenedores
logs:
	docker-compose logs -f

# Otros comandos personalizados o tareas adicionales pueden agregarse aquí
