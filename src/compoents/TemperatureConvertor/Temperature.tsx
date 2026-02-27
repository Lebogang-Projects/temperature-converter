
import type props from "./TemperatureConveter"

export default function Temperature(prop: props) {

    return (
      <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
         <input className="border-2" value={prop.value.toFixed(4)} type="number" onChange={prop.onTypeTemperature} />
            <div id="temperature-display">
                {prop.type}
            </div>
        </div>
    )
}