import { useState, type ChangeEvent } from "react";
import Temperature from "./Temperature";
import Weather from "./Weather";
import NavTabs from "../Nav/NavTabs";
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
    }

    function handleCelsuis(e: ChangeEvent<HTMLInputElement>) {
        setTemp({
            celsuis: parseFloat(e.target.value),
            fahrenheit: CtoF(parseFloat(e.target.value))
        });
    }

    function handleFaherenheit(e: ChangeEvent<HTMLInputElement>) {
        setTemp({
            fahrenheit: parseFloat(e.target.value),
            celsuis: FtoC(parseFloat(e.target.value))
        });
    }


    return (
        <>
        <NavTabs activeTab="temperature-converter" />

        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 p-3">
           
            <div className="w-full   overflow-hidden rounded-[2.5rem] bg-black shadow-2xl border border-zinc-800">
                <div className="flex flex-col ">
                    {isActive ? <Temperature value={temp.celsuis} type="Celsuis" onTypeTemperature={handleCelsuis} /> : <Temperature value={temp.fahrenheit} type="Fahrenheit" onTypeTemperature={handleFaherenheit} />}
                    <div className="relative h-2 flex items-center justify-center z-10"> 
                        <button className="w-1/4   px-4 py-1 text-lg font-bold text-zinc-200 border border-green-700 rounded-full hover:bg-zinc-400 hover:text-white transition-all" onClick={handleSwitchTemperature}>Switch</button> 
                    </div>
                    {!isActive ? <Temperature value={temp.celsuis} type="Celsuis" onTypeTemperature={handleCelsuis} /> : <Temperature value={temp.fahrenheit} type="Fahrenheit" onTypeTemperature={handleFaherenheit} />}
                </div>
            </div>

            <div className="mt-1">
                <Weather />
            </div>


        </div>
        </>
    )
}