import { useAppDispatch, useAppSelector } from "../application/hooks";

import img_coffee_idle from "./coffee_animation/coffee_idle.gif"
import img_coffee_hot_1 from "./coffee_animation/coffee_hot_1.gif"
import img_coffee_hot_2 from "./coffee_animation/coffee_hot_2.gif"
import img_coffee_error from "./coffee_animation/coffee_error.gif"
import img_coffee_making_1 from "./coffee_animation/coffee_making_1.gif"
import img_coffee_making_2 from "./coffee_animation/coffee_making_2.gif"
import img_coffee_making_3 from "./coffee_animation/coffee_making_3.gif"

import { CoffeeMachineStates } from "../application/coffee_machine/states";
import { startMakingCoffee } from "../application/coffee_machine/actions";


export const Application = () => {
    const coffeeMachineState = useAppSelector((state) => state.coffeeMachine)
    const dispatch = useAppDispatch()

    const animationImage = getAnimationImage(coffeeMachineState)

    return(
        <div >
            <img src={animationImage} width="auto" height="500rem" style={{imageRendering: "pixelated", display: "block", margin: "auto"}}/>
            <button onClick={() => dispatch(startMakingCoffee())} style={{display: "block", margin: "auto"}}>Add coffee</button>
        </div>
    )
}

function getAnimationImage(state: CoffeeMachineStates | undefined): string {
    switch (state) {
        case CoffeeMachineStates.MAKING_COFFEE_1:
            return img_coffee_making_1
        case CoffeeMachineStates.MAKING_COFFEE_2:
            return img_coffee_making_2
        case CoffeeMachineStates.MAKING_COFFEE_3:
            return img_coffee_making_3
        case CoffeeMachineStates.HOT_COFFEE_1:
            return img_coffee_hot_1
        case CoffeeMachineStates.HOT_COFFEE_2:
            return img_coffee_hot_2
        case CoffeeMachineStates.BROKEN:
            return img_coffee_error
        default:
            return img_coffee_idle
    }
}