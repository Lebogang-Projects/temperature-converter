import './App.css'
import TemperatureConverter from './compoents/TemperatureConvertor/TemperatureConveter';
import TeamDisplay from './compoents/TeamDirectory/TeamDisplay';


function App() {

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <TeamDisplay />
    </div>
  )
}

export default App
