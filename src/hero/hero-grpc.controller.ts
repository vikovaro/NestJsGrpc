import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class HeroGrpcController {
    private heroes = [
        { id: 1, name: 'Superman' },
        { id: 2, name: 'Batman' },
    ];

    @GrpcMethod('HeroService', 'FindOne')
    findOne(data: { id: number }) {
        const hero = this.heroes.find(h => h.id === data.id);
        return hero || { id: 0, name: 'Unknown' };
    }
}