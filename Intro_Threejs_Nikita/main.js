console.log("Hello Digital Ideation!");


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setClearColor("#c088f0");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix;
})

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var geometry = new THREE.BoxGeometry(1, 2, 1);
var material = new THREE.MeshLambertMaterial({
  color: 0xFFFFFF
});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 2;

scene.add(mesh);


var geometry = new THREE.BoxGeometry(1, 2, 1);
var material = new THREE.MeshLambertMaterial({
  color: 0xFFFFFF
});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.x = -2;

scene.add(mesh);

var light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10, 0, 5);
scene.add(light);

var render = function() {
  requestAnimationFrame(render);
  // mesh.rotation.z +=0.05
  renderer.render(scene, camera);
}

function onClick(event) {
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);

  for (var i = 0; i < intersects.length; i++) {

    this.tl = new TimelineMax();

    this.tl.to(intersects[i].object.rotation, 1, {
      y: Math.PI * .5,
      ease: Expo.easeOut
    })
    this.tl.to(intersects[i].object.position, .5, {
      z: -3,
      ease: Expo.easeOut
    })
    this.tl.to(intersects[i].object.rotation, 1, {
      y: 0,
      ease: Expo.easeOut
    })
    this.tl.to(intersects[i].object.position, .5, {
      z: 0,
      ease: Expo.easeOut
    })
  }

}

render();



window.addEventListener('click', onClick);
