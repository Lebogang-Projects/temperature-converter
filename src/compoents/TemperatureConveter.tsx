import {useState} from "react";
import Celsuis from "./Celsuis";
import Fahrenheit from "./Fahrenheit";

export default function TemperatureConverter() {
    const FAHRENHEIT_CONSTANT = (9/5) + 32;
    const [temp, setTemp] = useState({celsuis: 1, fahrenheit: FAHRENHEIT_CONSTANT})

    function handleSwitchTemperature() {
        // swap placement of elements


        // swap main element
    }

    function onTemperatureChange() {

    }

    return (
        <>
            <Celsuis value={temp.celsuis} onChange={onTemperatureChange}/>

            <button onClick={handleSwitchTemperature}>Switch</button>

            <Fahrenheit value={temp.fahrenheit} onChange={onTemperatureChange}/>
        
        </>
    )
}