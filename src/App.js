// import { useState } from 'react';
// import { GetPosition } from './components/GetPosition';

// export const App = () => {
//   const [mousePosition, setMousePosition] = useState([0, 0])
//   const logMousePosition = (e) => {
//     setMousePosition([e.clientX, e.clientY])
//   }
//   return (
//     <div className="w-4/5 h-screen mx-auto mt-12 p-12 border text-center" onClick={logMousePosition}>
//       <h1 className="text-3xl font-bold mb-8">drag and drop</h1>
//       <GetPosition mousePosition={mousePosition} />
//     </div>
//   );
// }

import { DraggableElement } from './components/Draggable';

export const App = () => {
  return (
    <div className="w-4/5 h-screen mx-auto mt-12 p-12 border text-center">
      <h1 className="text-3xl font-bold mb-8">drag and drop</h1>
      <div className="container h-40 border">
        <DraggableElement color="red" />
        <DraggableElement color="green" />
        <DraggableElement color="yellow" />
      </div>
    </div>
  );
}