FROM golang:1.15-alpine AS build

WORKDIR /app

COPY hello.go .

RUN go build hello.go

FROM scratch

WORKDIR /app

COPY --from=build /app/hello .

ENTRYPOINT ["./hello"]