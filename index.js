//setup
import * as THREE from 'three';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import {genCube} from './src/generate_cube'
var scene, camera, renderer, controls;

function init() {
    var group;
    var light = new THREE.AmbientLight( 0x404040 );
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000000 );
    renderer = new THREE.WebGLRenderer({ antialias: true });
    scene.fog = new THREE.Fog( 0xffffff, 1, 10000 );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    scene.background = new THREE.Color(0xffffff);
    group = genCube(group);
    scene.add(group);
    scene.add(light);
    controls =  new OrbitControls( camera, renderer.domElement );
    camera.position.y +=3000
    camera.position.z = -2500;
}

function animate() {
    requestAnimationFrame( animate );
    controls.update();
	renderer.render( scene, camera );
}
///////////


init()
animate();