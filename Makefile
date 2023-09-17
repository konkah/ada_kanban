.DEFAULT_GOAL := help
.PHONY: start ps api-print-logs api-follow-logs api-bash front-print-logs \
		front-follow-logs front-bash ls-images finish rm-images

include env/back/dev.env

start:
	@docker compose -f containers/dev.docker-compose.yml up -d

ps:
	@docker compose -f containers/dev.docker-compose.yml ps

api-print-logs:
	@docker logs containers-ada-kanban-api-1

api-follow-logs:
	@docker logs containers-ada-kanban-api-1 --follow

api-bash:
	@docker exec -it containers-ada-kanban-api-1 bash

front-print-logs:
	@docker logs containers-ada-kanban-front-1

front-follow-logs:
	@docker logs containers-ada-kanban-front-1 --follow

front-bash:
	@docker exec -it containers-ada-kanban-front-1 bash

ls-images:
	@docker compose -f containers/dev.docker-compose.yml images

finish:
	@echo ">>>>> Remove containers"
	@docker compose -f containers/dev.docker-compose.yml down --rmi local --remove-orphans

rm-images:
	@echo ">>>>> Remove images from containers"
	docker rmi -f $(docker-compose images -q)
