import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Polygon from './components/geometry/polyPath';
import P5Wrapper from 'react-p5-wrapper';
import Bubble from 'components/geometry/bubble';
import sketchOne from 'sketches/sketchOne';


function App() {

  const [bgColor, setBgColor] = useState([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]);

  const [circlesCoord, setCirclesCoord] = useState([[ 500, 300, 22 ]]);

  useEffect(() => {
    let newCirclesCoord = [];
    for(let i = 0; i < 50; i++){
      newCirclesCoord.push([Math.floor(Math.random() * window.innerWidth - 50), Math.floor(Math.random() * window.innerHeight - 50), 10 + Math.floor(Math.random() * 50), 0]);
    }
    console.log("new coords"); console.log(newCirclesCoord)
    setCirclesCoord(newCirclesCoord);
  },  []);

  return (
    <div className="App" onClick={() => {
      console.log("clicked");
      setBgColor([Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]);
      let newCirclesCoord = [];
      for(let i = 0; i < 50; i++){
        newCirclesCoord.push([Math.floor(Math.random() * window.innerWidth - 50), Math.floor(Math.random() * window.innerHeight - 50), 10 + Math.floor(Math.random() * 50), 0]);
      }
      console.log("new coords"); console.log(newCirclesCoord)
      setCirclesCoord(newCirclesCoord);
    }}>
      {/*<svg version="1.1" id="canavs" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 1000 1000">
        {[...Array(10 + Math.floor(Math.random() * 20))].map(() => <Bubble/>)

        }
      </svg>*/}
      <P5Wrapper sketch={sketchOne} bgColor={bgColor} circlesCoord={circlesCoord}/>
    </div>
  );
}

export default App;
