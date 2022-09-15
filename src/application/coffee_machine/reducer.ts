import { Reducer } from "react"
import { CoffeeFactory } from "../../domain/coffee_factory"
import { CoffeeMachineAction, CoffeeMachineActions } from "./actions"
import { CoffeeMachineStates } from "./states"

export const createCoffeeMachineReducer = (coffeeFactory: CoffeeFactory): Reducer<CoffeeMachineStates | undefined, CoffeeMachineAction> => {
    return (state = CoffeeMachineStates.IDLE, action: CoffeeMachineAction): CoffeeMachineStates => {
        switch(action.type) {
            case CoffeeMachineActions.MAKE_COFFEE:
                try {
                    coffeeFactory.make()
                    return CoffeeMachineStates.IDLE
                } catch {
                    return CoffeeMachineStates.BROKEN
                }
            case CoffeeMachineActions.UPDATE_STATE:
                if (state == CoffeeMachineStates.BROKEN)
                    return state    
                return action.state
            default:
                return state
        }
    }
}