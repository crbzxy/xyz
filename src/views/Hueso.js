import React from "react";

import ShitHappens from "../models/scene.gltf";

// import campo from "../img/equ.jpg";

const Hueso = () => {
  console.log("hola");

  return (
    <section className="Hueso">
      <h1>xyz</h1>
      <div className="scene">
        <>
          <a-scene >
            <a-camera position="2 6 2"></a-camera>
            <a-assets>
              {/* <img id="campo" src={campo} alt="" /> */}
              <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
              <a-asset-item id="shit" src={ShitHappens}></a-asset-item>
            </a-assets>
            <a-sky id="bg"  opacity="0.6" radius="325" src="#skyTexture" theta-length="90"></a-sky>
            <a-entity
              environment="active:  true;  skyType:  gradient;  skyColor:  #89c2ff;  horizonColor:  #9ec3ea;   fog:  0.3;  flatShading:  true;  ground:  canyon;  groundYScale:  3.27;  groundTexture:  squares;  groundColor:  #f1f1f1;  groundColor2:  #d1d1d1;  dressing:  stones;  dressingAmount:  100;  dressingColor:  #5a5a5a;  dressingScale:  2.2;  dressingVariance:  1 1 1;  dressingOnPlayArea:  0.07;  shadowSize:  10.52;  preset:  starry; grid:none;
              "
              scale="2.9 2.2 2.7"
              
            />
            
            <a-entity
            light="type:ambient;  position:0 144 0; intensity:0.4;"
            >

            </a-entity>
            
            
            <a-entity
              gltf-model={ShitHappens}
              scale="3 3 3"
              position="0 0 -23.8"
            
            />
          </a-scene>
        </>
      </div>
    </section>
  );
};
export default Hueso;
