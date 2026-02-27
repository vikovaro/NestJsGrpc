export interface HeroById {
  id: number;
}

export interface Hero {
  id: number;
  name: string;
}

export interface HeroGrpcService {
  // метод соответствует rpc FindOne(HeroById) returns (Hero);
  findOne(data: HeroById): import('rxjs').Observable<Hero>;
}

