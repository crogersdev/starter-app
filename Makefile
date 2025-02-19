up:
	@if [ ! -f .env ]; then \
        cp .env.example .env; \
    fi
	podman compose up -d

down:
	podman compose down

fresh:
	@if [ ! -f .env ]; then \
        cp .env.example .env; \
    fi
	podman compose down --remove-orphans
	podman compose build --no-cache
	podman compose up -d --build -V

logs:
	podman compose logs -f

test:
	go test -v -race -cover -count=1 -failfast ./...

lint:
	golangci-lint run -v

rename:
	find . -type f ! -path "./.git/*" ! -path "./build/*" ! -path "./Makefile" -exec sed -i.bak -e "s|github.com/ankorstore/yokai-http-template|github.com/$(to)|g" {} \;
	find . -type f -name "*.bak" -delete
