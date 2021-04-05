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
    <div className="w-4/5 h-96 mx-auto mt-12 p-12 border text-center">
      <h1 className="text-3xl font-bold mb-8">drag and drop</h1>
      <div className="container w-12 h-40 mx-auto">
        <DraggableElement color="red" />
        <DraggableElement color="green" />
        <DraggableElement color="yellow" />
      </div>
      <div className="w-36 ml-auto h-12 mt-auto flex items-center justify-between">
        <a
          href="https://github.com/you-5805/drag-and-drop-DOM-elements/blob/main/README.md"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHubリポジトリ"
            className="w-12"
          />
        </a>
        <p className="whitespace-nowrap">by @you-5805</p>
      </div>
    </div>
  );
}