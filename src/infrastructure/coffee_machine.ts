import { Coffee } from "../domain/coffee";
import { CoffeeFactory, CoffeeFactoryProgressCallback } from "../domain/coffee_factory";
import { OutOfCoffeeBeans } from "../domain/coffee_factory_errors";

const AMOUNT_OF_BEANS_FOR_COFFEE = 5

export class CoffeeMachine extends CoffeeFactory {
    private amountOfBeans: number

    public constructor(amountOfBeans: number = 100) {
        super();
        this.amountOfBeans = amountOfBeans
    }

    make(): Coffee {
        if (this.amountOfBeans - AMOUNT_OF_BEANS_FOR_COFFEE < 0)
            throw new OutOfCoffeeBeans()
        
        this.amountOfBeans -= AMOUNT_OF_BEANS_FOR_COFFEE
        return new Coffee()
    }
}
