# NestJS gRPC Example

Поднимает **gRPC сервер** на порту `50051` по `proto/hero.proto`;

## Запуск в dev режиме

```bash
bun run start:dev
```

- HTTP: `http://localhost:3000/hero/1`
- gRPC: `localhost:50051`, пакет `hero`, сервис `HeroService`, метод `FindOne`

## Структура

- `proto/hero.proto` — описание gRPC-сервиса.
- `src/main.ts` — запуск HTTP-приложения и подключение gRPC microservice.
- `src/app.module.ts` — регистрация gRPC-клиента и модулей.
- `src/hero/hero.service.ts` — реализация gRPC-сервиса (`@GrpcMethod`).
- `src/hero/hero.controller.ts` — HTTP-контроллер, вызывающий gRPC-клиента.

