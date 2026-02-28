import { Injectable } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Hero, HeroById } from './hero.interfaces';

@Injectable()
export class HeroService {
    private readonly heroes: Hero[] = [
        { id: 1, name: 'Superman' },
        { id: 2, name: 'Batman' },
        { id: 3, name: 'Wonder Woman' },
    ];

    @GrpcMethod('HeroService', 'FindOne')
    findOne(data: HeroById): Hero {
        const hero = this.heroes.find((item) => item.id === data.id);
        return hero ?? { id: data.id, name: 'Unknown hero' };
    }
}
