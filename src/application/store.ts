import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { CoffeeTank } from "../domain/coffee_tank";
import { createCoffeeLevelReducer } from "./coffee_level";

export const createStore = (coffeeTank: CoffeeTank): EnhancedStore => {
    const coffeeReducer = createCoffeeLevelReducer(coffeeTank)
    return configureStore({
        reducer: {
            coffee: coffeeReducer,
        }
    })
}
