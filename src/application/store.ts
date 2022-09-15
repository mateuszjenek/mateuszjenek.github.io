import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import { CoffeeMachine } from "../infrastructure/coffee_machine";
import { createCoffeeMachineReducer } from "./coffee_machine/reducer";

const composedEnhancer = applyMiddleware(thunkMiddleware)

export const store = configureStore({
        reducer: {
            coffeeMachine: createCoffeeMachineReducer(new CoffeeMachine(20)),
        },
        enhancers: [composedEnhancer]
    })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
