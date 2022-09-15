import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { CoffeeAnimationStates, startCoffeeAnimation } from "../application/coffee_animation";
import { updateCoffeeLevel } from "../application/coffee_level";
import { useAppDispatch, useAppSelector } from "../application/hooks";

import img_coffee_init from "./coffee_animation/coffee_init.png"
import img_coffee_hot from "./coffee_animation/coffee_hot.png"
import img_coffee_error from "./coffee_animation/coffee_error.png"
import img_coffee_loading_1 from "./coffee_animation/coffee_loading_1.png"
import img_coffee_loading_2 from "./coffee_animation/coffee_loading_2.png"
import img_coffee_loading_3 from "./coffee_animation/coffee_loading_3.png"


export const Application = () => {
    const coffeeAnimationState = useAppSelector((state) => state.coffeeAnimation)
    const dispatch = useAppDispatch()

    const animationImage = getAnimationImage(coffeeAnimationState)

    return(
        <div >
            <img src={animationImage} width="auto" height="500rem" style={{imageRendering: "pixelated", display: "block", margin: "auto"}}/>
            <button onClick={() => dispatch(startCoffeeAnimation())} style={{display: "block", margin: "auto"}}>Add coffee</button>
        </div>
    )
}

function getAnimationImage(state: CoffeeAnimationStates | undefined): string {
    switch (state) {
        case CoffeeAnimationStates.LOADING_1:
            return img_coffee_loading_1
        case CoffeeAnimationStates.LOADING_2:
            return img_coffee_loading_2
        case CoffeeAnimationStates.LOADING_3:
            return img_coffee_loading_3
        case CoffeeAnimationStates.HOT_COFFEE:
            return img_coffee_hot
        case CoffeeAnimationStates.ERROR:
            return img_coffee_error
        default:
            return img_coffee_init
    }
}