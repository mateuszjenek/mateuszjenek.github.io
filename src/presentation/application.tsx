import { FunctionComponent } from "react";
import { useSelector } from "react-redux";


export const Application = () => {

    const counter = useSelector((state: ReturnType<typeof store.getState>) => state.)

    return(
        <h1>Hello world</h1>
    )
}