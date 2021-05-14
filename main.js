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

// parent: everything turns at the same time at the same rate
var parent = new THREE.Object3D();

//material
var white = new THREE.MeshStandardMaterial({
  color: 0xFFFFFF
});
var violet = new THREE.MeshStandardMaterial({
  color: 0xC088F0
});
var blue = new THREE.MeshStandardMaterial({
  color: 0xCCCCFF
});
var yellow = new THREE.MeshStandardMaterial({
  color: 0xFFFFCC
});


// for texture
// var texture = new THREE.TextureLoader().load('/zz_Pictures/normal_map.jpg');
// var material = new THREE.MeshStandardMaterial({
//   normalMap: texture
// });

//for picture on one side
// var q1_materialArray = [];
// q1_materialArray.push(new THREE.MeshBasicMaterial({
//   color: 0xFFFFCC
// }));
// q1_materialArray.push(new THREE.MeshBasicMaterial({
//   map: q1_texture
// }));
// q1_materialArray.push(new THREE.MeshBasicMaterial({
//   color: 0xFFFFCC
// }));
// q1_materialArray.push(new THREE.MeshBasicMaterial({
//   color: 0xFFFFCC
// }));
// q1_materialArray.push(new THREE.MeshBasicMaterial({
//   color: 0xFFFFCC
// }));
// q1_materialArray.push(new THREE.MeshBasicMaterial({
//   color: 0xFFFFCC
// }));
// q1_materialArray.push(new THREE.MeshBasicMaterial({
//   color: 0xFFFFCC
// }));
//
// var q1_material = new THREE.MeshFaceMaterial(q1_materialArray);

//gemoetry
// var geometry = new THREE.BoxGeometry(-0.05, -10, 20);



// http://gero3.github.io/facetype.js/ –> ttf to json
// put everything in font function to apply it to
var center = new THREE.Vector3( 0, 0, -30 );
var fontjson = new THREE.FontLoader().load("/zz_Fonts/Raleway_SemiBold.json", function(font) {

var q2 = new THREE.TextGeometry("Haben Sie amoralische Einfälle?", {
  font: font,
  size: 1.5,
  height: 2,
  curveSegments: 15,
  bevelEnabled: true,
  bevelThickness: 0.1,
  bevelSize: 0.2,
  bevelOffset: 0,
  bevelSegments: 3
});
q2.center();

//mesh
var q1_mesh = new THREE.Mesh(q2, white);
var q2_mesh = new THREE.Mesh(q2, violet);

//add to parent, edit position/rotation/etc. and add to scene
parent.add(q1_mesh);
q1_mesh.position.z = 50;
// q1_mesh.rotateOnWorldAxis(center, 1);

// q2_mesh.rotation.y = 1;
q2_parent = new THREE.Object3D();
q2_parent.add(q2_mesh);
parent.add(q2_parent);
q2_parent.rotation.y = 2;
q2_mesh.position.z = 50;
q2_mesh.position.y = 30;

scene.add(parent); 

})

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
  /*a += 1;
  parent.rotation.y = -Math.PI / 180 * a;
  */
  var currentTimeline = window.pageYOffset / 3000;

  parent.rotation.x = currentTimeline * -0.5 + 0.5
  parent.rotation.y = (currentTimeline * 0.9 + 0.1) * Math.PI * 2
  
  /*parent.rotation.set(rx, ry, 0);*/
  renderer.render(scene, camera);
}

render();

window.addEventListener('click', onClick);
