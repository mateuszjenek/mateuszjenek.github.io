import { Reducer } from "react"
import { AnyAction, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { updateCoffeeLevel } from "./coffee_level"
import { RootState } from "./store"

export enum CoffeeAnimationStates {
    INIT, LOADING_1, LOADING_2, LOADING_3, HOT_COFFEE, ERROR
}

enum CoffeeAnimationActions {
    INIT = "COFFEE_ANIMATION_INIT",
    UPDATE = "COFFEE_ANIMATION_UPDATE",
}

interface CoffeeAnimationInitAction {
    type: CoffeeAnimationActions.INIT
}

interface CoffeeAnimationStartAction {
    type: CoffeeAnimationActions.UPDATE,
    state: CoffeeAnimationStates
}

type CoffeeAnimationAction = CoffeeAnimationInitAction | CoffeeAnimationStartAction

export const startCoffeeAnimation = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    if (getState().coffeeAnimation != CoffeeAnimationStates.INIT) 
        return

    dispatch(updateCoffeeLevel(5))
    
    dispatch({
        type: CoffeeAnimationActions.UPDATE,
        state: CoffeeAnimationStates.LOADING_1
    })
    await delay(1000)
    dispatch({
        type: CoffeeAnimationActions.UPDATE,
        state: CoffeeAnimationStates.LOADING_2
    })
    await delay(1000)
    dispatch({
        type: CoffeeAnimationActions.UPDATE,
        state: CoffeeAnimationStates.LOADING_3
    })
    await delay(1000)
    dispatch({
        type: CoffeeAnimationActions.UPDATE,
        state: CoffeeAnimationStates.HOT_COFFEE
    })
    await delay(3000)
    dispatch({
        type: CoffeeAnimationActions.UPDATE,
        state: CoffeeAnimationStates.INIT
    })

}

export const createCoffeeAnimationReducer = (): Reducer<CoffeeAnimationStates | undefined, CoffeeAnimationAction> => {
    return (state = CoffeeAnimationStates.INIT, action: CoffeeAnimationAction): number => {
        switch (action.type) {
            case CoffeeAnimationActions.UPDATE:
                return action.state
            }
        return state;
    }
}

