import React from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton';
import { MouseTracker } from './components/MouseTracker';
import { useMousePosition } from './hooks/useMousePosition';

function App() {

  const position = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <LikeButton></LikeButton>
        <p>x:{position.x} y:{position.y}</p>
      </header>
    </div>
  );
}

export default App;
