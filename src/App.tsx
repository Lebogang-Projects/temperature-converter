import './App.css'
import { NavLink } from 'react-router-dom'

function App() {

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <nav className="flex flex-col items-center space-y-4">
        <NavLink to="/temperature-converter" className="text-2xl text-blue-500 hover:underline">
          Temperature Converter
        </NavLink>
        <NavLink to="/team-display" className="text-2xl text-green-500 hover:underline">
          Team Display
        </NavLink>
      </nav>
    </div>
  )
}

export default App
