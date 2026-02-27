
import type props from "./TemperatureConveter"

export default function Temperature(prop: props) {

    return (
        <>
         <input value={prop.value.toFixed(4)} type="number" onChange={prop.onTypeTemperature} />
            <div id="temperature-display">
 {prop.type}
            </div>
        </>
    )
}