



//Editor
let output = document.getElementById('output');
let buttons = document.getElementsByClassName('tool--btn');
for (let btn of buttons) {
  btn.addEventListener('click', () => {
    let cmd = btn.dataset['command'];
    if (cmd === 'createlink') {
      let url = prompt("Enter the link here: ", "http:\/\/");
      document.execCommand(cmd, false, url);
    } else {
      document.execCommand(cmd, false, null);
    }
  })
}

// document.getElementById("change").onclick = changeColor();

function setColor(btn, color) {
  var count = 1;
  var property = document.getElementById(btn);
  if (count == 0) {
    property.style.backgroundColor = "#FFFFFF";
    count = 1;
  } else {
    property.style.backgroundColor = "#7FFF00";
    count = 0;
  }
}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//Three js

// var a = 0
//
// //coordinates of questions and just defining stuff
// //moral
// var m1_r = -1;
// var m1_y = 40;
// var m2_r = 1;
// var m2_y = 0;
// var m3_r = 3;
// var m3_y = -40;
// var m4_r = 5;
// var m4_y = -80;
//
//
// var m1;
// var m1_mesh;
// var m1_parent;
//
// var m2;
// var m2_mesh;
// var m2_parent;
//
// var m3;
// var m3_mesh;
// var m3_parent;
//
// var m4;
// var m4_mesh;
// var m4_parent;
// //humor
// var h1_r = 0;
// var h1_y = 0;
// var h2_r = 0;
// var h2_y = 0;
// var h3_r = 0;
// var h3_y = 0;
// var h4_r = 0;
// var h4_y = 0;
//
// var h1;
// var h1_mesh;
// var h1_parent;
//
// var h2;
// var h2_mesh;
// var h2_parent;
//
// var h3;
// var h3_mesh;
// var h3_parent;
//
// var h4;
// var h4_mesh;
// var h4_parent;
// //ehe
// var e1_r = 0;
// var e1_y = 0;
// var e2_r = 0;
// var e2_y = 0;
// var e3_r = 0;
// var e3_y = 0;
// var e4_r = 0;
// var e4_y = 0;
//
// var e1;
// var e1_mesh;
// var e1_parent;
//
// var e2;
// var e2_mesh;
// var e2_parent;
//
// var e3;
// var e3_mesh;
// var e3_parent;
//
// var e4;
// var e4_mesh;
// var e4_parent;
// //tod
// var t1_r = 0;
// var t1_y = 0;
// var t2_r = 0;
// var t2_y = 0;
// var t3_r = 0;
// var t3_y = 0;
// var t4_r = 0;
// var t4_y = 0;
//
// var t1;
// var t1_mesh;
// var t1_parent;
//
// var t2;
// var t2_mesh;
// var t2_parent;
//
// var t3;
// var t3_mesh;
// var t3_parent;
//
// var t4;
// var t4_mesh;
// var t4_parent;

//setup 3D

// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 150;
// var renderer = new THREE.WebGLRenderer({
//   antialias: true
// });
// renderer.setClearColor("#000000");
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
//
// var light = new THREE.PointLight(0xFFFFFF, 1, 500);
// light.position.set(0, 0, 100);
// scene.add(light);
//
// //responsive
// window.addEventListener('resize', () => {
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix;
// })
//
// // parent: everything turns at the same time at the same rate
// var grandparent = new THREE.Object3D();
//
// //material
// var white = new THREE.MeshStandardMaterial({
//   color: 0xFFFFFF
// });
//
// // for texture
// var texture = new THREE.TextureLoader().load('/zz_Pictures/normal_map.jpg');
// // var material = new THREE.MeshStandardMaterial({
// //   normalMap: texture
// // });
//
// // for picture on one side
// var m1_materialArray = [];
// m1_materialArray.push(new THREE.MeshBasicMaterial({
//   color: 0xFFFFCC
// }));
// m1_materialArray.push(new THREE.MeshStandardMaterial({
//   normalMap: texture
// }));
// m1_materialArray.push(new THREE.MeshBasicMaterial({
//   color: 0xFFFFCC
// }));
// m1_materialArray.push(new THREE.MeshBasicMaterial({
//   color: 0xFFFFCC
// }));
// m1_materialArray.push(new THREE.MeshBasicMaterial({
//   color: 0xFFFFCC
// }));
// m1_materialArray.push(new THREE.MeshBasicMaterial({
//   color: 0xFFFFCC
// }));
// m1_materialArray.push(new THREE.MeshBasicMaterial({
//   color: 0xFFFFCC
// }));
//
// var m1_material = new THREE.MeshFaceMaterial(m1_materialArray);
//
// // gemoetry
// var geometry = new THREE.BoxGeometry(-0.05, -50, 80);
//
// var mesh_screen = new THREE.Mesh(geometry, m1_material);
//
// mesh_screen.rotation.y = -1;
// scene.add(mesh_screen);
//
//
//
// // http://gero3.github.io/facetype.js/ –> ttf to json
// // put everything in font function to apply it to
// var fontjson = new THREE.FontLoader().load("/zz_Fonts/Raleway_SemiBold.json", function(font) {
//
//   class Question {
//     text(name, mesh, parent, input, y, rotation) {
//       this.name = name;
//       this.parent = parent;
//       this.input = input;
//       this.y = y;
//       this.rotation = rotation;
//
//       this.name = new THREE.TextGeometry(this.input, {
//         font: font,
//         size: 5,
//         height: 1,
//         curveSegments: 15,
//         bevelEnabled: true,
//         bevelThickness: 0.1,
//         bevelSize: 0.1,
//         bevelOffset: 0,
//         bevelSegments: 1
//       });
//       //center that shit
//       this.name.center();
//
//       this.mesh = new THREE.Mesh(this.name, white);
//
//       this.parent = new THREE.Object3D();
//       this.parent.add(this.mesh);
//       this.parent.rotation.y = this.rotation;
//       this.mesh.position.y = this.y;
//       this.mesh.position.z = 50;
//
//       grandparent.position.y = 40;
//       grandparent.add(this.parent);
//     }
//   }
//
//   //TextGeometry
//   var m1_question = new Question;
//   m1_question.text(m1, m1_mesh, m1_parent, "Croisson?", m1_y, m1_r);
//
//   var m2_question = new Question;
//   m2_question.text(m2, m2_mesh, m2_parent, "Blabla?", m2_y, m2_r);
//
//   var m3_question = new Question;
//   m3_question.text(m3, m3_mesh, m3_parent, "It is working?", m3_y, m3_r);
//
//   var m4_question = new Question;
//   m4_question.text(m4, m4_mesh, m4_parent, "Was ertragen Sie nur mit Humor?", m4_y, m4_r);
//
//
//   scene.add(grandparent);
//
// })
//
// var svg_answers = new THREE.LegacySVGLoader(THREE.DefaultLoadingManager).load('zz_Pictures/Antworten.svg')
//
// // renderer.scrollIntoView(true);
//
//
// // m1.position.x = 2;
// // var centerAxis = new THREE.Vector3(m1.position.x*-1, 0, 0);
// // m1.rotateOnAxis(centerAxis, 4);
// // m1.rotateY(2);
//
//
// //mouse on object
// var raycaster = new THREE.Raycaster();
// var mouse = new THREE.Vector2();
//
// function onClick(event) {
//   event.preventDefault();
//
//   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//
//   raycaster.setFromCamera(mouse, camera);
//
//   this.tl = new TimelineMax();
//
//   this.tl.to(camera.object.rotation, 1.5, {
//     y: Math.PI * 2,
//     ease: Expo.easeOut
//   })
//   this.tl.to(camera.object.rotation, 1.5, {
//     y: 0,
//     ease: Expo.easeOut
//   })
//
//   // var intersects = raycaster.intersectObjects(scene.children, true);
//   //
//   // for (var i = 0; i < intersects.length; i++) {
//   //
//   //   //on Click on specific object what hould happen
//   //   this.tl = new TimelineMax();
//   //
//   //   this.tl.to(intersects[i].object.rotation, 1.5, {
//   //     y: Math.PI * 2,
//   //     ease: Expo.easeOut
//   //   })
//   //   this.tl.to(intersects[i].object.rotation, 1.5, {
//   //     y: 0,
//   //     ease: Expo.easeOut
//   //   })
//   // }
// }
//render refreshes in framerate
// var render = function() {
//   requestAnimationFrame(render);
//   // a += 1;
//   // parent.rotation.y = -Math.PI / 180 * a;
//   var currentTimeline = window.pageYOffset / 3000;
//
//   grandparent.rotation.x = currentTimeline * -0.7 + 0.5
//   grandparent.rotation.y = (currentTimeline * 2.4 + 0.1) * Math.PI * 2
//
//   if (currentTimeline <= 10) {
//     document.querySelectorAll(".header-logo").innerHTML = "Yes";
//     console.log('now');
//   }
//
//   renderer.render(scene, camera);
// }
//
// render();
//
// window.addEventListener('click', onClick);
