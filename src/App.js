import { useState } from 'react'

export const App = () => {
  const defaultMousePosition = [0, 0]
  const [mousePosition, setMousePosition] = useState(defaultMousePosition)
  const logMousePosition = (e) => {
    setMousePosition([e.clientX, e.clientY])
  }
  return (
    <div className="w-4/5 h-screen mx-auto mt-12 p-12 border text-center" onClick={logMousePosition}>
      <h1 className="text-3xl font-bold mb-8">drag and drop</h1>
      <p className="mb-4">Click Anywhere in this Container to Log Current Mouse Position</p>
      <p>X : {mousePosition[0]}, Y: {mousePosition[1]}</p>
    </div>
  );
}
