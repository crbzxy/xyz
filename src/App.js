import "./scss/App.scss";
import "aframe";
import { Entity, Scene } from "aframe-react";

function App() {
  return (
    <div className="App">
      <h1>XYZ</h1>
      <Scene className="scene">
        <a-assets>
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          />
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          />
        </a-assets>
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 8 4"
        />
        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="90"
          width="2048"
        />
        <Entity
          primitive="a-plane"
          src="#groundTexture"
          rotation="-90 0 0"
          height="100"
          width="100"
        />
        <Entity
          geometry={{ primitive: "box" }}
          material={{ color: "red" }}
          position={{ x: 0, y: 0, z: -5 }}
        />
        <Entity particle-system={{ preset: "snow" }} />
        <Entity light={{ type: "point" }} />
        <Entity gltf-model={{ src: "virtualcity.gltf" }} />
        <Entity text={{ value: "Hello, WebVR!" }} />
        <Entity primitive="a-box" color="red" position="0 0 -5" />
        <Entity primitive="a-sphere" color="green" position="-2 0 -3" />
        <Entity primitive="a-cylinder" color="blue" position="2 0 -3" />
        <Entity primitive="a-sky" src="sechelt.jpg" />v
      </Scene>
    </div>
  );
}

export default App;
