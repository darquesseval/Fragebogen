var a = 0

//setup 3D

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 80;
var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setClearColor("#000000");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(0, 0, 60);
scene.add(light);

//responsive
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix;
})


var parent = new THREE.Object3D();

//material
var white = new THREE.MeshLambertMaterial({
  color: 0xFFFFFF
});
var violet = new THREE.MeshLambertMaterial({
  color: 0xC088F0
});
var blue = new THREE.MeshLambertMaterial({
  color: 0xCCCCFF
});
var yellow = new THREE.MeshLambertMaterial({
  color: 0xFFFFCC
});

var q1_texture = new THREE.TextureLoader().load('/zz_Questions/Not_a_Question.jpg');
q1_texture.repeat.set(0.5, 0.5);

//for picture on one side
var q1_materialArray = [];
q1_materialArray.push(new THREE.MeshBasicMaterial({
  color: 0xFFFFCC
}));
q1_materialArray.push(new THREE.MeshBasicMaterial({
  map: q1_texture
}));
q1_materialArray.push(new THREE.MeshBasicMaterial({
  color: 0xFFFFCC
}));
q1_materialArray.push(new THREE.MeshBasicMaterial({
  color: 0xFFFFCC
}));
q1_materialArray.push(new THREE.MeshBasicMaterial({
  color: 0xFFFFCC
}));
q1_materialArray.push(new THREE.MeshBasicMaterial({
  color: 0xFFFFCC
}));
q1_materialArray.push(new THREE.MeshBasicMaterial({
  color: 0xFFFFCC
}));

var q1_material = new THREE.MeshFaceMaterial(q1_materialArray);

//gemoetry
var geometry = new THREE.BoxGeometry(-0.05, -10, 20);

// http://gero3.github.io/facetype.js/ –> ttf to json
var fontjson = new THREE.FontLoader().load("/zz_Fonts/Raleway_SemiBold.json", function(font) {
var q2 = new THREE.TextGeometry("Haben Sie amoralische Einfälle?", {
  font: font,
  size: 5,
  height: 2,
  curveSegments: 15,
  bevelEnabled: true,
  bevelThickness: 0.1,
  bevelSize: 0.2,
  bevelOffset: 0,
  bevelSegments: 3
});

//mesh
var q1_mesh = new THREE.Mesh(geometry, q1_material);
var q2_mesh = new THREE.Mesh(q2, violet)

//add to parent, edit position/rotation/etc. and add to scene
parent.add(q1_mesh);
q1_mesh.position.x = 2;

parent.add(q2_mesh);
q2_mesh.position.set(0, 0, -20);

scene.add(parent);

})
// var font = new THREE.Font(fontjson);



// q1.position.x = 2;
// var centerAxis = new THREE.Vector3(q1.position.x*-1, 0, 0);
// q1.rotateOnAxis(centerAxis, 4);
// q1.rotateY(2);


//mouse on object
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onClick(event) {
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);

  for (var i = 0; i < intersects.length; i++) {

    //on Click on specific object what hould happen
    this.tl = new TimelineMax();

    this.tl.to(intersects[i].object.rotation, 1.5, {
      y: Math.PI * 2,
      ease: Expo.easeOut
    })
    this.tl.to(intersects[i].object.rotation, 1.5, {
      y: 0,
      ease: Expo.easeOut
    })
  }
}
//render refreshes in framerate
var render = function() {
  requestAnimationFrame(render);
  a += 1;
  parent.rotation.y = Math.PI / 180 * a;
  renderer.render(scene, camera);
}

render();

window.addEventListener('click', onClick);
