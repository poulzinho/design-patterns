import {HeroCreator} from "./heroCreator";
import {Hero} from "./hero";
import {Ironman} from "./ironman";

export class MarvelHero extends HeroCreator {
    public factoryMethod(): Hero {
        return new Ironman();
    }

    public heroUniverse(): string {
        return "Marvel";
    }
}
