import { Coffee } from "./coffee";

export type CoffeeFactoryProgressCallback = (progress: number) => void

export abstract class CoffeeFactory {
    abstract make(): Coffee
}