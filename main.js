//setup 3D
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setClearColor("#c088f0");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10, 0, 5);
scene.add(light);

//responsive
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix;
})

//object
var geometry = new THREE.BoxGeometry(1, 2, 1);
var material = new THREE.MeshLambertMaterial({
  color: 0xFFFFFF
});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 2;

scene.add(mesh);

//object
var geometry = new THREE.BoxGeometry(1, 2, 1);
var material = new THREE.MeshLambertMaterial({
  color: 0xFFFFFF
});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.x = -2;

scene.add(mesh);



//mouse on object
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onClick(event) {
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);

  for (var i = 0; i < intersects.length; i++) {

//on Click on specific object what hould happen

}

//render refreshes in framerate
var render = function() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();


window.addEventListener('click', onClick);
