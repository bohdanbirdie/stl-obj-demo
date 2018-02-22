## three-stl-loader

@aleeper's [THREE.STLLoader](http://threejs.org/examples/js/loaders/STLLoader.js) repackaged as a node module

## install

`npm i --save three`

`npm i --save three-stl-loader`

## usage

```js

var THREE = require('three')
var STLLoader = require('three-stl-loader')(THREE)

var loader = new STLLoader()

loader.load('./path/to/daaaamn.stl', function (geometry) {
  var material = new THREE.MeshNormalMaterial()
  var mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)
})

```
