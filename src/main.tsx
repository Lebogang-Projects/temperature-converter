import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import TemperatureConverter from './compoents/TemperatureConvertor/TemperatureConveter.tsx'
import TeamDisplay from './compoents/TeamDirectory/TeamDisplay.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/temperature-converter" element={<TemperatureConverter />} />
        <Route path="/team-display" element={<TeamDisplay />} />
        <Route path="*" element={<h1>404 Not Found, my bad</h1>} />
    </Routes>

    </BrowserRouter>
  </StrictMode>,
)
