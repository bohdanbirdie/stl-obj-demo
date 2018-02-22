# Three Addons

[![Latest NPM release](https://img.shields.io/npm/v/three-addons.svg)](https://www.npmjs.com/package/three-addons)

> A collection of Three.js addons.

## Installation
```
npm install --save three-addons

or

yarn add three-addons
```

## Usage
```js
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';
import { OBJLoader } from 'three-addons';

const scene = new Scene();
// ...
const loader = new OBJLoader();
loader.load('obj/someObj.obj', (object) => {
  object.position.y = -95;
  scene.add(object);
});
```


Or if your bundler has Tree Shaking, you can just import everything:
```js
import * as THREE from 'three';
import * as THREE_ADDONS from 'three-addons';

const scene = new THREE.Scene();
// ...
const loader = new THREE_ADDONS.OBJLoader();
loader.load('obj/someObj.obj', (object) => {
  object.position.y = -95;
  scene.add(object);
});
```

If you don't have a module bundler you can just drop it in the HTML after Three.js and you will be able to use it like this:
```html
<script src="js/three.min.js"></script>
<script src="js/three-addons.min.js"></script>


<script>
  const scene = new THREE.Scene();
  // ...
  const loader = new THREE_ADDONS.OBJLoader();
  loader.load('obj/someObj.obj', (object) => {
    object.position.y = -95;
    scene.add(object);
  });
</script>
```


Instead, if you want to mindlessly paste the examples of Three.js and its addons you find online, you can just do this:
```js
import * as THREEJS from 'three';
import * as THREE_ADDONS from 'three-addons';
const THREE = { ...THREEJS, ...THREE_ADDONS }; // you can also use Object.assign() or lodash's _.assign()


const scene = new THREE.Scene();
// ...
const loader = new THREE.OBJLoader();
loader.load('obj/someObj.obj', (object) => {
  object.position.y = -95;
  scene.add(object);
});
```
But this pattern is not recommended, since it doesn't tell you which property belongs to Three.js and which one is an addon.

## Addon structure
All the addons are taken from most used examples around the web, and wrapped with those two lines to make it exportable:
```js
import * as THREE from 'three';

// ...addon code

export default THREE.AddonName;
```

Thanks to [npm-three-js](https://github.com/JordanDelcros/npm-three-js) for the inspiration of this project and the full list of addons.

Here is the list of the addons present in this package:

AdaptiveToneMappingPass, BasicShader, BleachBypassShader, BlendShader, BloomPass, BokehPass, BokehShader, BokehShader2, BrightnessContrastShader, ~~CanvasRenderer~~, ColorCorrectionShader, ColorifyShader, ConvolutionShader, CopyShader, DDSLoader, DOFMipMapShader, DigitalGlitch, DotScreenPass, DotScreenShader, EdgeShader, EdgeShader2, EffectComposer, FXAAShader, FilmPass, FilmShader, FocusShader, FresnelShader, GammaCorrectionShader, GlitchPass, HorizontalBlurShader, HorizontalTiltShiftShader, HueSaturationShader, KaleidoShader, LuminosityShader, MTLLoader, MarchingCubes, MaskPass, MirrorShader, NormalMapShader, OBJLoader, OceanShaders, OrbitControls, ParallaxShader, ~~Projector~~, RGBShiftShader, RenderPass, SSAOShader, SVGLoader, SavePass, SepiaShader, ShaderPass, ShaderToon, TechnicolorShader, TexturePass, ToneMapShader, TriangleBlurShader, UnpackDepthRGBAShader, VerticalBlurShader, VerticalTiltShiftShader, VignetteShader.


**NOTE**: both CanvasRenderer and Projector are not available for now because the go in conflict with their respective deprecated warning exported from the main Three.js repo. [Here](https://github.com/mrdoob/three.js/blob/393b54a96464ca2725e548d02e3b48f386728c47/src/Three.Legacy.js#L1518) is the source of that code.
