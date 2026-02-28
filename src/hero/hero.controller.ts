import { Controller, Get, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { OnModuleInit } from '@nestjs/common';
import { Hero, HeroGrpcService } from './hero.interfaces';
import { firstValueFrom } from 'rxjs';

@Controller('hero')
export class HeroController implements OnModuleInit {
    private heroService!: HeroGrpcService;

    constructor(
        @Inject('HERO_PACKAGE')
        private readonly client: ClientGrpc,
    ) {}

    onModuleInit() {
        this.heroService = this.client.getService<HeroGrpcService>('HeroService');
    }

    @Get(':id')
    async getHero(@Param('id') id: string): Promise<Hero> {
        const heroId = Number(id);
        console.log(heroId);
        return firstValueFrom(this.heroService.findOne({ id: heroId }));
    }
}
