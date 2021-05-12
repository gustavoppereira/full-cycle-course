FROM golang:1.15-alpine AS build

WORKDIR /app

COPY hello.go .

RUN GOOS=linux go build -ldflags="-s -w" hello.go

FROM scratch

WORKDIR /app

COPY --from=build /app/hello .

ENTRYPOINT ["./hello"]