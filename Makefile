.PHONY: up clean logs

up:
	@docker-compose up -d --build
	
clean:
	@docker-compose down --rmi local

logs:
	docker-compose logs -f
	