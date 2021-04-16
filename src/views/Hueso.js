import React from "react";

import ShitHappens from "../models/scene.gltf";
import Gallina from "../models/gallina.gltf";
require("aframe");
require("aframe-text-geometry-component");
require("aframe-environment-component");
// import campo from "../img/equ.jpg";

const Hueso = () => {
  console.log("hola");
  return (
    <section className="Hueso">
      <h1>xyz</h1>
      <div className="scene">
        <>
          <a-scene>
            <a-camera position="2 4 2"></a-camera>
            <a-assets>
              {/* <img id="campo" src={campo} alt="" /> */}
              <a-asset-item
                id="optimerBoldFont"
                src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json"
              ></a-asset-item>
              <a-mixin id="boldFont" text="font: #optimerBoldFont"></a-mixin>
              <a-asset-item id="shit" src={ShitHappens} />
              <a-asset-item id="happens" src={Gallina} />
            </a-assets>

            <a-entity environment="preset: arches; " />
            <a-entity
              mixin="boldFont"
              text-geometry="value: What was the first, the egg or the chicken?"
              position="0 12 -23.8"
            />
            <a-entity
              text-geometry="value: Dog?; font: #optimerBoldFont "
              position="60 12 -53.8"
            ></a-entity>

            <a-entity
              text-geometry="value: King LIzzard?; font: #optimerBoldFont "
              position="30 12 -53.8"
            ></a-entity>
            <a-entity
              text-geometry="value: If the poem of life
Had only one Itd be a universe
Said and done
But only cause life isnt terse
It has to be A multiverse
Apparently the arcane machinations of physical law that describe
the origins of the universe determine that I have only two options either believe
that God picked just the right proportions of the 
four fundamental physical interactions gravitation, electromagnetism, 
strong and weak interactions for the universe as we know it to exist, 
or believe in the multiverse where all possible combinations exist 
simultaneously and we just happened to hit on the one that makes all of this
I ve got a rational brain in my palpitating skull that is in charge 
of analyzing all of this and it regularly refuses to allow for God’s
existence, opting instead to go with the explanation of the multiverse
But the multiverse is a mind-bending poem about existence. It doesn’t
do so much as explain existence as it vaporizes the ability of my
rational mind to comprehend it. It is science become art. 
It is science become poem
You often hear that wisdom is the ability to hold two contradictory 
ideas in your head at the same time Maybe we need two distinct ways
of accessing reality in order to cope with the mystery We have a 
rational brain that dissects life and makes it into a problem 
to be solved We have an intuitive brain that grabs life as a whole
and knows there is a solid sense in it The mind that is impressed
by art and poetry is intuitive But that mind gets the shit kicked 
out of it on a regular basis by the rational mind when it insists
on substantiating every intuitive image The intuitive mind is like
an embarrassing child who gets locked away because he blurts out 
the obvious in mixed company Aunt Minnie’s false teeth look like 
a woodchucks Or less rude but equally disturbing I see God in you
The intuitive mind knows that the multiverse theory teaches just as
much by way of poetry as it does by way of logic, maybe more so because
the idea is just so profoundly zany The intuitive mind has a chance
to tell us a variety of other things when we occasionally 
let it out of detention for embarrassing us in front of out 
friends font: #optimerBoldFont "
              position="-60 40 -53.8"
            ></a-entity>

            <a-entity light=""></a-entity>
            <a-entity
              gltf-model={ShitHappens}
              scale="3 3 3"
              position="0 0 -23.8"
            />

            <a-entity
              gltf-model={Gallina}
              scale="3 3 3"
              position="0 8.4 -33.8"
            />
          </a-scene>
        </>
      </div>
    </section>
  );
};
export default Hueso;
