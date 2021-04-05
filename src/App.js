import { useState } from 'react'
import './App.css'

export const App = () => {
  const defaultMousePosition = [0, 0]
  const [mousePosition, setMousePosition] = useState(defaultMousePosition)
  const logMousePosition = (e) => {
    setMousePosition([e.clientX, e.clientY])
  }
  return (
    <div className="container" onClick={logMousePosition}>
      <h1>drag and drop</h1>
      <p>Click Anywhere in this Container to Log Current Mouse Position</p>
      <p>X : {mousePosition[0]}, Y: {mousePosition[1]}</p>
    </div>
  );
}
