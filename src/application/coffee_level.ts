import { Reducer } from "react"
import { Dispatch } from "redux"
import { CoffeeTank } from "../domain/coffee_tank"

enum CoffeeLevelActions {
    INIT = "COFFEE_LEVEL_INIT",
    UPDATE = "COFFEE_LEVEL_UPDATE",
}

interface CoffeeLevelInitAction {
    type: CoffeeLevelActions.INIT
}

interface CoffeeLevelUpdateAction {
    type: CoffeeLevelActions.UPDATE
    amount: number
}

type CoffeeLevelAction = CoffeeLevelInitAction | CoffeeLevelUpdateAction

export const updateCoffeeLevel = (amount: number) => {
    return (dispatch: Dispatch<CoffeeLevelAction>) => {
        dispatch({
            type: CoffeeLevelActions.UPDATE,
            amount: amount
        })
    }
}

export const createCoffeeLevelReducer = (tank: CoffeeTank): Reducer<number | undefined, CoffeeLevelAction> => {
    return (state: number = tank.getCurrentLevel(), action: CoffeeLevelAction): number => {
        switch (action.type) {
            case CoffeeLevelActions.UPDATE:
                tank.addCoffee(action.amount)
            }
        return tank.getCurrentLevel();
    }
}