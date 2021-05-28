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
document.getElementById('button').onclick = "setColor('button', '#101010')";
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

let content = document.querySelector(".content");

document.getElementById('line1').onclick = function() {
  content.classList.toggle('activeTod')
}
document.getElementById('line2').onclick = function() {
  content.classList.toggle('activeMoral')
}
document.getElementById('line3').onclick = function() {
  content.classList.toggle('activeEhe')
}
document.getElementById('line4').onclick = function() {
  content.classList.toggle('activeHumor')
}

let mInput01 = "Hier etwas Platzhaltertext, um zu schauen, wie das scrollen so läuft.";
let mInput02 = "Hier werden irgendswann Antworten stehen. Ganz viele. Wiel wir eine mega coole Website aufgebaut haben.";
let mInput03 = "And more lines with I think a whole lot more text I'd say.";
let mInput04 = "what about this";
let mInput05 = "Wieso schreibe ich eigentlich alles auf Enlgisch, wenn es am Ende sowieso deutsch wird";
let mInput06 = "Und wie genau schreibt man eigentich sowieso";

let m01;
let m02;
let m03;

class Antwort {
  input(klasseL, klasseM, klasseR, string) {
    this.klasseL = klasseL;
    this.klasseM = klasseM;
    this.klasseR = klasseR;
    this.string = string;
    document.querySelector(this.klasseL).innerHTML = this.string;
    document.querySelector(this.klasseM).innerHTML = this.string;
    document.querySelector(this.klasseR).innerHTML = this.string;
  }
}


let mLine01 = new Antwort;
mLine01.input(".mLineL01", ".mLineM01", ".mLineR01", mInput01);

let mLine02 = new Antwort;
mLine02.input(".mLineL02", ".mLineM02", ".mLineR02", mInput02);



let tod = document.querySelector(".Tod");
let moral = document.querySelector(".Moral");
let ehe = document.querySelector(".Ehe");
let humor = document.querySelector(".Humor");
let editor = document.querySelector(".Editor");

document.getElementById('mFloor').onclick = function() {
  editor.classList.toggle('activeEditor')/*öffnen des Editors*/
  console.log(document.querySelector(".centerWall").style.width) 
}
document.getElementById('button').onclick = function() {
  editor.classList.toggle('activeEditor') /*schliessen des Editors*/
  moral.classList.toggle('activeAnswers') /*transition*/
}

// document.getElementById('tFragen').onclick = function() {
//   tod.classList.toggle('activeAnswers')
// }
//document.getElementById('mFloor').onclick = function() {
//  console.log('anything?')
//  moral.classList.toggle('activeAnswers')
//}
// document.getElementById('eFragen').onclick = function() {
//   ehe.classList.toggle('activeAnswers')
// }
// document.getElementById('hFragen').onclick = function() {
//   humor.classList.toggle('activeAnswers')
// }



// let mLine02 = new Antwort;
// mLine02.input(m02, ".mLine02", mInput02);
//
// let mLine03 = new Antwort;
// mLine03.input(m03, ".mLine03", mInput03);



//tod.addEventListener("click", function(){
//  console.log('true')
//  content.style.transform = 'rotateX(90deg)';
//})



//Loading Screen
//var loadingScreen = {
//  scene: new THREE.Scene(),
//  camera: new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,1000),position.z = 5,
//  box: new THREE.Mesh(
//    new THREE.BoxGeometry(1, 1, 1),
//    new THREE.MeshLambertMaterial({color: 0x00ff00}),
// new THREE.Mesh(geometry, material)
//  )
//};
//
//        var loadingManager = null;
//        var RESOURCES_LOADED = false;
//        mesh.position.set(2,2,-2);
//
//       scene.add(mesh);
//        var light = new THREE.PointLight(0xFFFFFF, 1, 500)
//        light.position.set(10,0,25);
//        scene.add(light);
//
//        function animate(){

//          // This block runs while resources are loading.
// //         if( RESOURCES_LOADED == false ){
//           requestAnimationFrame(animate);
//		        if( loadingScreen.box.position.x < -10 ) loadingScreen.box.position.x = 10;
//		        loadingScreen.box.position.y = Math.sin(loadingScreen.box.position.x);
//
//
//         requestAnimationFrame(animate);

//            //* Animationsbewegung
//           mesh.rotation.x += 0.01;
//           mesh.rotation.y += 0.01;
//           mesh.rotation.z += 0.01;
//
//       }
