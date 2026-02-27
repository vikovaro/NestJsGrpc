import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, '..', 'proto', 'hero.proto'),
      url: '0.0.0.0:50051'
    }
  });

  await app.startAllMicroservices();

  await app.listen(3069);
  // HTTP:  http://localhost:3000/hero/1
  // gRPC:  localhost:50051 (service HeroService)
  console.log('start');
}

bootstrap().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Bootstrap error', err);
  process.exit(1);
});

