D=docker
IMAGE=apicontacts
DIR=$(CURDIR)
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=serverapp
DB_HOST=db


all:
	$(MAKE) build
	$(MAKE) run

build:
	$(D) build -t $(IMAGE) $(DIR)

run:
	$(D) run -d --name=$(DB_HOST) --env POSTGRES_USER=$(POSTGRES_USER) --env POSTGRES_PASSWORD=$(postgres) --env POSTGRES_DB=$(POSTGRES_DB) postgres
	$(D) run -d --rm --name=${IMAGE} --link $(DB_HOST):$(DB_HOST) --env DB_HOST=$(DB_HOST) -p 4000:3000 $(IMAGE)
