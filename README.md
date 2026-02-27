# NestJS gRPC Example (HTTP + gRPC в одном приложении)

Пример простого NestJS-приложения, которое:

- поднимает **HTTP API** на порту `3000`;
- поднимает **gRPC сервер** на порту `50051` по `proto/hero.proto`;
- использует **gRPC-клиента** внутри HTTP-контроллера, чтобы вызвать gRPC-метод.

## Установка

```bash
cd C:\Users\stanislav\Desktop\ttt
npm install
```

## Запуск в режиме разработки

```bash
npm run start:dev
```

- HTTP: `http://localhost:3000/hero/1`
- gRPC: `localhost:50051`, пакет `hero`, сервис `HeroService`, метод `FindOne`

## Структура

- `proto/hero.proto` — описание gRPC-сервиса.
- `src/main.ts` — запуск HTTP-приложения и подключение gRPC microservice.
- `src/app.module.ts` — регистрация gRPC-клиента и модулей.
- `src/hero/hero.service.ts` — реализация gRPC-сервиса (`@GrpcMethod`).
- `src/hero/hero.controller.ts` — HTTP-контроллер, вызывающий gRPC-клиента.

