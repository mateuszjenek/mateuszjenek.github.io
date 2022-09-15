import { CoffeeTankOverflowError, NegativeAmountOfCoffeeError } from "../domain/coffee_tank_errors"
import { LocalCofeeTank } from "./local_coffee_tank"

const COFFEE_TANK_CAPACITY = 10
const AMOUNT_LOWER_THAN_TANK_CAPACITY = 5
const AMOUNT_HIGER_THAN_TANK_CAPACITY = 15
const NEGATIVE_AMOUNT_OF_COFFEE = -5

test("When addCoffee, given amount smaller than tank size, then amount should be added to tank", () => {
    let tank = new LocalCofeeTank(COFFEE_TANK_CAPACITY)

    tank.addCoffee(AMOUNT_LOWER_THAN_TANK_CAPACITY)

    expect(tank.getCurrentLevel())
        .toEqual(AMOUNT_LOWER_THAN_TANK_CAPACITY)
})

test("When addCoffee, given amount bigger than tank size, then function should throw an TankOverflowError", () => {
    let tank = new LocalCofeeTank(COFFEE_TANK_CAPACITY)

    expect(() => tank.addCoffee(AMOUNT_HIGER_THAN_TANK_CAPACITY))
        .toThrowError(CoffeeTankOverflowError)
})

test("When addCoffee, given amount is negative, then function should throw an NegativeAmountOfCoffeeError", () => {
    let tank = new LocalCofeeTank(COFFEE_TANK_CAPACITY)

    expect(() => tank.addCoffee(NEGATIVE_AMOUNT_OF_COFFEE))
        .toThrowError(NegativeAmountOfCoffeeError)
})

test("When getCapacity, then should retrun capacity of tank", () => {
    let tank = new LocalCofeeTank(COFFEE_TANK_CAPACITY)

    expect(tank.getCapacity())
        .toEqual(COFFEE_TANK_CAPACITY)
})

test("When getCurrentLevel, given empty tank, then should retrun 0", () => {
    let tank = new LocalCofeeTank(COFFEE_TANK_CAPACITY)

    expect(tank.getCurrentLevel())
        .toEqual(0)
})