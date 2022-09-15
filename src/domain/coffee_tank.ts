export abstract class CoffeeTank {
    abstract addCoffee(amount: number): void;
    abstract getCapacity(): number;
    abstract getCurrentLevel(): number;
}