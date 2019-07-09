import {expect} from 'chai';
import 'mocha';
import {HeroCreator} from "./heroes/heroCreator";
import {DcHero} from "./heroes/dcHero";
import {MarvelHero} from "./heroes/marvelHero";

describe('Factory method', () => {
    it('should choose a hero creator\' type based on a config', () => {
        const heroGenerator = (heroCreator: HeroCreator) => {
            return heroCreator.introduceHero();
        };

        expect(heroGenerator(new DcHero())).to.equal('HeroCreator presents: DC => Justice League -> I am Batman');
        expect(heroGenerator(new MarvelHero())).to.equal('HeroCreator presents: Marvel => Avengers -> I am Ironman');
    });
});
