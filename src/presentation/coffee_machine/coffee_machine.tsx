import img_coffee_idle from "./coffee_animation/coffee_idle.png"
import img_coffee_hot_1 from "./coffee_animation/coffee_hot_1.png"
import img_coffee_hot_2 from "./coffee_animation/coffee_hot_2.png"
import img_coffee_error from "./coffee_animation/coffee_error.png"
import img_coffee_making_1 from "./coffee_animation/coffee_making_1.png"
import img_coffee_making_2 from "./coffee_animation/coffee_making_2.png"
import img_coffee_making_3 from "./coffee_animation/coffee_making_3.png"
import { useAppDispatch, useAppSelector } from "../../application/hooks"
import { startMakingCoffee } from "../../application/coffee_machine/actions"
import { CoffeeMachineStates } from "../../application/coffee_machine/states"

import "./coffee_machine.css"

export const CoffeeMachine = () => {
    const coffeeMachineState = useAppSelector((state) => state.coffeeMachine)
    const dispatch = useAppDispatch()

    const animationImage = getAnimationImage(coffeeMachineState)

    return(
        <img className="coffee-machine-img" src={animationImage} onClick={() => dispatch(startMakingCoffee())} />
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