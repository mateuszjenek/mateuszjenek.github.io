import { Coffee } from "../domain/coffee"
import { OutOfCoffeeBeans } from "../domain/coffee_factory_errors"
import { CoffeeMachine } from "./coffee_machine"

const cupOfCoffee = new Coffee()

test("When coffee machine make coffee, given there is enought amount of beans, should return coffee", () => {
    const coffeeMachine = new CoffeeMachine()

    let coffee = coffeeMachine.make()

    expect(coffee).toEqual(cupOfCoffee)
})

test("When coffee machine make coffee, given there is no enought amount of beans, should throw out of beans error", () => {
    const coffeeMachine = new CoffeeMachine(0)

    expect(() => coffeeMachine.make()).toThrowError(OutOfCoffeeBeans)
})