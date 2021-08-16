import { useState } from 'react';
import './App.scss';

function App() {
  const [isHoverLeft, setIsHoverLeft] = useState(false);
  const [isHoverRight, setIsHoverRight] = useState(false);

  return (
    <div className="App">
      <div
        className={`container${isHoverLeft ? ' hover-left' : ''}${
          isHoverRight ? ' hover-right' : ''
        }`}
      >
        <div
          className="split left"
          onMouseEnter={() => setIsHoverLeft(true)}
          onMouseLeave={() => setIsHoverLeft(false)}
        >
          <h1>PlayStation 5</h1>
          <a
            href="https://www.playstation.com/en-us/ps5/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn"
          >
            Buy Now
          </a>
        </div>
        <div
          className="split right"
          onMouseEnter={() => setIsHoverRight(true)}
          onMouseLeave={() => setIsHoverRight(false)}
        >
          <h1>XBox Series X</h1>
          <a
            href="https://www.xbox.com/en-US/consoles/xbox-series-x"
            target="_blank"
            rel="noreferrer noopener"
            className="btn"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
