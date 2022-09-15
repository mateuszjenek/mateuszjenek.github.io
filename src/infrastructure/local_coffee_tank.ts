import { CoffeeTank } from "../domain/coffee_tank"
import { CoffeeTankOverflowError, NegativeAmountOfCoffeeError } from "../domain/coffee_tank_errors";

export class LocalCofeeTank extends CoffeeTank {
    
    private capacity: number
    private current = 0

    public constructor(capacity: number) {
        super()

        this.capacity = capacity
    }

    addCoffee(amount: number): void {
        if (amount < 0) {
            throw new NegativeAmountOfCoffeeError()
        }
        if (this.current + amount > this.capacity) {
            throw new CoffeeTankOverflowError()
        }
        
        this.current += amount
    }
    
    getCapacity(): number {
        return this.capacity
    }
    getCurrentLevel(): number {
        return this.current
    }
}