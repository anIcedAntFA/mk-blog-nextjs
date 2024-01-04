.PHONY: build-development
build-development:
	# Start the development docker container.
	docker compose -f docker-compose.dev.yml build

.PHONY: start-development
start-development:
	# Start the development docker container.
	docker compose -f docker-compose.dev.yml up -d

.PHONY: stop-development
stop-development:
	# Start the development docker container.
	docker compose -f docker-compose.dev.yml down
