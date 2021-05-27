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

let tod = document.querySelector(".line1");
let content = document.querySelector(".content");

document.getElementById('line1').onclick = function() {
  content.classList.toggle('activeTod')
}

document.getElementById('line3').onclick = function() {
  content.classList.toggle('activeEhe')
}

let moral_string_01 = "I have no idea if this will work, like ever";
let moral_string_02 = "And then there would have to be more lines";
let moral_string_03 = "And more lines with I think a whole lot more text I'd say.";
let moral_string_04 = "Let's just carry on writing some more and more and even more text, because we really need it.";
let moral_string_05 = "Wieso schreibe ich eigentlich alles auf Enlgisch, wenn es am Ende sowieso deutsch wird";
let moral_string_06 = "Und wie genau schreibt man eigentich sowieso";

class Antworten{
  zeile(zeile,klasse,string){
    this.zeile= zeile;
    this.klasse= klasse;
    this.string= string;
    let this.zeile = document.querySelector(this.klasse);
    this.zeile.innerHTML = this.string;
  }
}

let zeile_01 = new Antworten;
zeile_01.zeile(moral_01,".moral_line_01", moral_string_01);
console.log(moral_01.innerHTML);

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
