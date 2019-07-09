import {Hero} from "./hero";

/**
 * This Class has a factoryMethod() that allows to create objects
 * @remarks
 * - Subclasses can alter the type of objects that will be created
 */
export abstract class HeroCreator {

    public abstract factoryMethod(): Hero;

    public abstract heroUniverse(): string;

    public introduceHero(): string {
        const hero = this.factoryMethod();
        return `HeroCreator presents: ${this.heroUniverse()} => ${hero.league} -> ${hero.salute()}`;
    }
}

