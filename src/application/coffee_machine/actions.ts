import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { CoffeeMachineStates } from "./states";

export enum CoffeeMachineActions {
    MAKE_COFFEE, UPDATE_STATE
}

interface MakeCoffeeAction {
    type: CoffeeMachineActions.MAKE_COFFEE
}

interface UpdateCoffeeMachineStateAction {
    type: CoffeeMachineActions.UPDATE_STATE,
    state: CoffeeMachineStates
}

export type CoffeeMachineAction = MakeCoffeeAction | UpdateCoffeeMachineStateAction

export const startMakingCoffee = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    if (getState().coffeeMachine != CoffeeMachineStates.IDLE)
        return

    dispatch({
        type: CoffeeMachineActions.MAKE_COFFEE
    })

    dispatch({
        type: CoffeeMachineActions.UPDATE_STATE,
        state: CoffeeMachineStates.MAKING_COFFEE_1
    })
    await delay(1000)
    dispatch({
        type: CoffeeMachineActions.UPDATE_STATE,
        state: CoffeeMachineStates.MAKING_COFFEE_2
    })
    await delay(1000)
    dispatch({
        type: CoffeeMachineActions.UPDATE_STATE,
        state: CoffeeMachineStates.MAKING_COFFEE_3
    })
    await delay(1000)
    dispatch({
        type: CoffeeMachineActions.UPDATE_STATE,
        state: CoffeeMachineStates.HOT_COFFEE_1
    })
    await delay(1000)
    dispatch({
        type: CoffeeMachineActions.UPDATE_STATE,
        state: CoffeeMachineStates.HOT_COFFEE_2
    })
    await delay(1000)
    dispatch({
        type: CoffeeMachineActions.UPDATE_STATE,
        state: CoffeeMachineStates.IDLE
    })
}

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}