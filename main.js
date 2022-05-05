import * as THREE from "../node_modules/three/build/three.module.js
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../node_modules/examples/jsm/loaders/GLTFLoader.js';
import { Reflector } from '../node_modules/examples/jsm/objects/Reflector';

let groundMirror, verticalMirror;
const scene = new THREE.Scene();
// scene.background = new THREE.Color( 0x464646 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector('#flex'),
  alpha: true,

  antialias: true
});

let geometrye, materiale;
const textureLoader = new THREE.TextureLoader();
const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
geometrye = new THREE.PlaneGeometry(50,50);
const texture3 = textureLoader.load( "pu.png" );
texture3.anisotropy = maxAnisotropy;
texture3.wrapS = texture3.wrapT = THREE.RepeatWrapping;
texture3.repeat.set(2,2);

materiale = new THREE.MeshPhongMaterial({ color: 0X000000});
materiale.metalness = 1;
const floor = new THREE.Mesh( geometrye, materiale );
floor.position.z = 1;
floor.position.x = 2;
floor.rotation.x= -Math.PI/2
scene.add(floor);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);



// const light = new THREE.PointLight( 0x464646,4, 160 );
// light.position.set( 20,110,0 );
// scene.add( light );

// const ulight = new THREE.PointLight( 0x464646, 4, 160 );
// ulight.position.set( -20, -110, 0 );
// scene.add( ulight );

const controls = new OrbitControls( camera, renderer.domElement );


camera.position.set( -5,4,0 );

controls.update();





				// reflectors/mirrors

		let geometry, material;

		geometry = new THREE.PlaneGeometry( 50, 50 );
		groundMirror = new Reflector( geometry, {
			clipBias: 1.008,
			textureWidth: window.innerWidth * window.devicePixelRatio,
			textureHeight: window.innerHeight * window.devicePixelRatio,
			color: 0x333333
		} );

	//miror
		groundMirror.position.y = 0;
groundMirror.position.x = 10;
		groundMirror.rotateX( - Math.PI / 2 );
		// scene.add( groundMirror );


		

		//ligths
	var mainRGB = 0xed9d0b;
	var intensity = 0.3;
material = new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0x666666 } );
const mainLight = new THREE.PointLight( mainRGB, intensity, 700 );
		mainLight.position.y = 3.7;
mainLight.position.z = -1.5;
		scene.add( mainLight );

		const mainLight22 = new THREE.PointLight( mainRGB, intensity, 1500 );
		mainLight22.position.y = 12.7;
mainLight22.position.z = -1.5;
		scene.add( mainLight22 );

		// const mainLightElevator = new THREE.PointLight( mainRGB, intensity, 700 );
		// mainLightElevator.position.y = 8.5;
		// mainLightElevator.position.x = 6;
		// scene.add( mainLightElevator );

		// const mainLightElevatorColored = new THREE.PointLight( mainRGB, intensity, 700 );
		// mainLightElevatorColored.position.x = 6;
		// mainLightElevatorColored.position.y = 15;
		// mainLightElevatorColored.position.z = 1;
		// scene.add( mainLightElevatorColored );


		// const mainSuitcase = new THREE.PointLight( mainRGB, intensity, 700 );
		// mainSuitcase.position.x = 2.5;
		// mainSuitcase.position.z = 2.9;
		// mainSuitcase.position.y = 2.9;
		// scene.add( mainSuitcase );

const alight = new THREE.AmbientLight( 0x404040, 3.5, 1800 ); // soft white light
alight.position.y = 2;
scene.add( alight );
			
        //glb's

const loader = new GLTFLoader();
var wheel= new THREE.Object3D();
var wheel2= new THREE.Object3D();
var wheel3= new THREE.Object3D();
var wheel4= new THREE.Object3D();
var elevator= new THREE.Object3D();
var wires= new THREE.Object3D();
var suitcase= new THREE.Object3D();
var wall= new THREE.Object3D();
var glass= new THREE.Object3D();
var chair= new THREE.Object3D();
loader.load( 'layingS.glb', function ( gltf ) {
//   gltf.scene.scale.set(0.7, 0.7, 0.7);

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

loader.load( 'elevator.glb', function ( gltf ) {
	elevator = gltf.scene;
	
	gltf.scene.position.x = 6;
	gltf.scene.position.y = -0.18;
	gltf.scene.position.z = 0.7;
	elevator.rotation.y = Math.PI;
	  scene.add( gltf.scene );

  
  }, undefined, function ( error ) {
  
	  console.error( error );
  
  } );
//   loader.load( 'wheel.glb', function ( gltf ) {
// 	  wheel = gltf.scene;
// 	  gltf.scene.scale.set(0.8, 0.8, 0.8);
// 	gltf.scene.position.x = 6.2;
// 	gltf.scene.position.y = 9;
// 	gltf.scene.position.z = 0.7;
// 	  scene.add( gltf.scene );
  
//   }, undefined, function ( error ) {
  
// 	  console.error( error );
  
//   } );
//   loader.load( 'wheel.glb', function ( gltf ) {
// 	wheel3 = gltf.scene;

//   gltf.scene.position.x = 6.5;
//   gltf.scene.position.y = 8.7;
//   gltf.scene.position.z = -0.3;
// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );
// loader.load( 'wheel.glb', function ( gltf ) {
// 	wheel4 = gltf.scene;

//   gltf.scene.position.x = 6.5;
//   gltf.scene.position.y = 8.7;
//   gltf.scene.position.z = 1.7;
// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );

//   loader.load( 'wheel.glb', function ( gltf ) {
// 	wheel2 = gltf.scene;
//   gltf.scene.scale.set(0.5, 0.5, 0.5);
//   gltf.scene.position.x = 6.9;
//   gltf.scene.position.y = 10;
//   gltf.scene.position.z = 0.7;
// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );


  
loader.load( 'suitcase.glb', function ( gltf ) {
	gltf.scene.scale.set(3, 3, 3);
	suitcase = gltf.scene;
	gltf.scene.position.x = 2.5;
	gltf.scene.position.z = 2.9;
	suitcase.rotation.y = 4;
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
loader.load( 'floor.glb', function ( gltf ) {
	gltf.scene.scale.set(1, 1, 1.5);
	wall = gltf.scene;
	gltf.scene.position.x = 0;
	gltf.scene.position.z = -4;

	
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
loader.load( 'chair.glb', function ( gltf ) {
	// gltf.scene.scale.set(3, 3, 3);
	chair = gltf.scene;
	gltf.scene.position.x = -4.5;
	gltf.scene.position.z = -3;
	gltf.scene.rotation.y= Math.PI/2;
	
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

// loader.load( 'floorreal.glb', function ( gltf ) {
// 	// // gltf.scene.scale.set(3, 3, 3);
// 	// wall = gltf.scene;
// 	gltf.scene.position.x = 0;
// 	gltf.scene.position.z = -4;
// 	gltf.scene.position.y = -0.01;
	
// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );

  
  //animation

var up = false;

function getup(){
	if(wall.position.y <=0){
	wall.position.y +=0.0015;

	}
	
	if(wall.position.y >=0.0){
	up = true;
	
	}

}
function nevermind(){

	if(wall.position.y >=-0.5){
		wall.position.y -=0.0015;
	
		}
		if(wall.position.y <= -0.5){
			up= false;
			}
}
function animate(){
  requestAnimationFrame( animate );
	controls.update(); 
	wheel.rotation.z += 0.01;
	wheel2.rotation.z += 0.01;
	// if(up == false){
	// getup();
	// }
	// else if(up == true){
	// nevermind();
	// }
	
  renderer.render(scene, camera);
}



animate();
