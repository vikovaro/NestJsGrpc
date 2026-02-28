import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HeroController } from './hero/hero.controller';
import { HeroService } from './hero/hero.service';
import { HeroGrpcController } from './hero/hero-grpc.controller';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'HERO_PACKAGE',
                transport: Transport.GRPC,
                options: {
                    package: 'hero',
                    protoPath: join(__dirname, '..', 'proto', 'hero.proto'),
                    url: 'localhost:50051',
                },
            },
        ]),
    ],
    controllers: [HeroController, HeroGrpcController],
    providers: [HeroService],
})
export class AppModule {}
