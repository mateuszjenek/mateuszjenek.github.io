import { applyMiddleware, configureStore, EnhancedStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import { createCoffeeLevelReducer } from "./coffee_level";
import {LocalCofeeTank} from "../infrastructure/local_coffee_tank";
import { createCoffeeAnimationReducer } from "./coffee_animation";

const composedEnhancer = applyMiddleware(thunkMiddleware)

export const store = configureStore({
        reducer: {
            coffeeLevel: createCoffeeLevelReducer(new LocalCofeeTank(100)),
            coffeeAnimation: createCoffeeAnimationReducer()
        },
        enhancers: [composedEnhancer]
    })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
