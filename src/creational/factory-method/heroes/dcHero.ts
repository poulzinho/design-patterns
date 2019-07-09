import {HeroCreator} from "./heroCreator";
import {Hero} from "./hero";
import {Batman} from "./batman";

export class DcHero extends HeroCreator {
    public factoryMethod(): Hero {
        return new Batman();
    }

    public heroUniverse(): string {
        return "DC";
    }
}
