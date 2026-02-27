import { useState, type ChangeEvent } from "react";
import Temperature from "./Temperature";


export default interface props {
    value: number,
    type: string,
    onTypeTemperature: (e: ChangeEvent<HTMLInputElement>) => void
}


export default function TemperatureConverter() {
    const FAHRENHEIT_CONSTANT = (9 / 5) + 32;
    const [temp, setTemp] = useState({ celsuis: 0, fahrenheit: 0 })
    const [isActive, setIsActive] = useState(true);

    function CtoF(temperature: number): number {
        return temperature * FAHRENHEIT_CONSTANT;
    }

    function FtoC(temperature: number): number {
        return (temperature - 32) * 5 / 9;
    }

    function handleSwitchTemperature() {
        setIsActive(!isActive)
        // swap placement of elements


        // swap main element
    }

    function handleCelsuis(e: ChangeEvent<HTMLInputElement>) {
        // if change from celsuis
        setTemp({
            celsuis: parseFloat(e.target.value),
            fahrenheit: CtoF(parseFloat(e.target.value))
        });
    }

    function handleFaherenheit(e: ChangeEvent<HTMLInputElement>) {
        // if change from celsuis
        setTemp({
            fahrenheit: parseFloat(e.target.value),
            celsuis: FtoC(parseFloat(e.target.value))
        });
    }


    return (
        <>
            {isActive ? <Temperature value={temp.celsuis} type="Celsuis" onTypeTemperature={handleCelsuis} /> : <Temperature value={temp.fahrenheit} type="Fahrenheit" onTypeTemperature={handleFaherenheit} />}
            <button onClick={handleSwitchTemperature}>Switch</button>
            {!isActive ? <Temperature value={temp.celsuis} type="Celsuis" onTypeTemperature={handleCelsuis} /> : <Temperature value={temp.fahrenheit} type="Fahrenheit" onTypeTemperature={handleFaherenheit} />}
        </>
    )
}