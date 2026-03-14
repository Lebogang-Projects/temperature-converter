
import type props from "./TemperatureConveter"

export default function Temperature(prop: props) {

    return (
      <div className="flex flex-col justify-end p-6 bg-black h-64 font-light border-r-2">
         <input className="w-full bg-transparent text-white text-7xl text-right appearance-none" type="number" value={prop.value.toFixed(4)}  onChange={prop.onTypeTemperature} step="any" />
            <div id="temperature-display" className="text-green-500 text-xl font-medium uppercase mt-2" >
                {prop.type}
            </div>
        </div>
    )
}