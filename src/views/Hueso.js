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
          <a-scene>
            <a-camera position="2 6 2"></a-camera>
            <a-assets>
              {/* <img id="campo" src={campo} alt="" /> */}

              <a-asset-item id="shit" src={ShitHappens}></a-asset-item>
            </a-assets>

            <a-entity
              environment="active: true; skyType: gradient; skyColor: #89c2ff; horizonColor: #9ec3ea; lightPosition: 1 6 1s; fog: 0.7; flatShading: true; ground: canyon; groundYScale: 3.2699999999999994; groundTexture: checkerboard; groundColor: #fcfcfc; groundColor2: #afa6bb; dressing: stones; dressingAmount: 100; dressingColor: #444343; dressingScale: 5.2; dressingVariance: [object Object];  dressingOnPlayArea: 0.06; shadowSize: 10.52; preset: starry"
              animation__cielo="property:environment.skyColor; to: #0562c5; dur: 8000; easing: linear; loop: true; dir: alternate"
            />

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
