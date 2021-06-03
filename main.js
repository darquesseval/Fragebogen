$(window).ready(function() {
  $(".loader-wrapper").fadeOut("1000");
  console.log("document loaded!");
});

//Editor
let output = document.getElementById('output');
let buttons = document.getElementsByClassName('.tool--btn');
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
//document.getElementById('button').onclick = "setColor('button', '#101010')";
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
let m = false;
let t = false;
let e = false;
let h = false;

let tod = document.querySelector(".Tod");
let moral = document.querySelector(".Moral");
let ehe = document.querySelector(".Ehe");
let humor = document.querySelector(".Humor");
let editor = document.querySelector(".Editor");

let weiter = false;
var floorstate = "Antworten";
let f2 = false;

document.getElementById('line1').onclick = function() {
  content.classList.toggle('activeTod')
  t = true;
  var floorstate = "Antworten";
  document.getElementById("Floor").innerHTML = floorstate;
}
document.getElementById('line2').onclick = function() {
  content.classList.toggle('activeMoral')
  m = true;
  var floorstate = "Antworten";
  document.getElementById("Floor").innerHTML = floorstate;
}
document.getElementById('line3').onclick = function() {
  content.classList.toggle('activeEhe')
  e = true;
  var floorstate = "Antworten";
  document.getElementById("Floor").innerHTML = floorstate;
}
document.getElementById('line4').onclick = function() {
  content.classList.toggle('activeHumor')
  h = true;
  var floorstate = "Antworten";
  document.getElementById("Floor").innerHTML = floorstate;
}


document.getElementById("Floor").innerHTML = floorstate;

document.getElementById('Floor').onclick = function() {
  if (weiter == true && f2 == false) {
    content.classList.toggle('activeAnswers');
    content.classList.toggle('f2');
    var floorstate = "Antworten";
    f2 = true;
    document.getElementById("Floor").innerHTML = floorstate;
    weiter = false;
  } else if (weiter == true && f2 == true) {
    content.classList.toggle('activeAnswers');
    content.classList.toggle('f2');
    var floorstate = "Home";
    if (t == true) {
      content.classList.toggle('activeTod')
      t = false;
    } else if (m == true) {
      content.classList.toggle('activeMoral')
      m = false;
    } else if (e == true) {
      content.classList.toggle('activeEhe')
      e = false;
    } else if (h == true) {
      content.classList.toggle('activeHumor')
      h = false
    }
    f2 = false;
    document.getElementById("Floor").innerHTML = floorstate;
    weiter = false;
  } else {
    editor.classList.toggle('activeEditor'); /*öffnen des Editors*/
    document.querySelector(".submittedText").value= "";
  }
}

document.getElementById('button').onclick = function() {
  editor.classList.toggle('activeEditor'); /*schliessen des Editors*/
  content.classList.toggle('activeAnswers'); /*transition Antworten werden angezeigt*/
  if (weiter == true) {
    weiter = false;
  } else if (weiter == false) {
    weiter = true;
  }
  if (weiter == true && f2 == true) {
    var floorstate = "Home";
    document.getElementById("Floor").innerHTML = floorstate;
  } else if (weiter == true && f2 == false) {
    var floorstate = "Weiter";
    document.getElementById("Floor").innerHTML = floorstate;
  } else {
    var floorstate = "Antworten";
    document.getElementById("Floor").innerHTML = floorstate;
  }
}

//Gordans Input vom Server
window.addEventListener('DOMContentLoaded', (event) => {

  // wenn button gedrückt dann post direkt ins google form –> ist jetzt auf .tool weil es eine vorhandene klasse braucht

  document.querySelector(".tool--speichern").addEventListener("click", function() { //.tool muss noch ersetzt werden
    let text = document.querySelector(".submittedText").value; // text aus der textarea
    let formID = "17p_s4p9BHLjfljhbddS7kti0n0FVfFnPvzG3r_05EmU"; // formID vom google form dokument
    let url = 'https://docs.google.com/forms/d/' + formID + '/formResponse'; // url für den post request
    // entry.329540547 muss adaptiert werden! -> mehr infos hier: https://stackoverflow.com/questions/18073971/http-post-to-a-google-form


    if (t == true && f2 == false) {
      var data = {
        'entry.1611945410': text
      }
    } else if (t == true && f2 == true) {
      var data = {
        'entry.1528171692': text
      }
    } else if (m == true && f2 == false) {
      var data = {
        'entry.1122356239': text
      }
    } else if (m == true && f2 == true) {
      var data = {
        'entry.312666473': text
      }
    } else if (e == true && f2 == false) {
      var data = {
        'entry.2055826422': text
      }
    } else if (e == true && f2 == true) {
      var data = {
        'entry.1106048141': text
      }
    } else if (h == true && f2 == false) {
      var data = {
        'entry.119882656': text
      }
    } else if (h == true && f2 == true) {
      var data = {
        'entry.1528171692': text
      }
    } else {
      var data = {
        'entry.1528171692': text
      }
    }

    // let data = {
    //   'entry.2055826422': text, //Ehe01
    //   'entry.1106048141': text, //Ehe02
    //   'entry.119882656': text, //Humor01
    //   'entry.1158286029': text, //Humor02
    //   'entry.1122356239': text, //Moral01
    //   'entry.321666473': text, //Moral02
    //   'entry.1611945410': text, //Tod01
    //   'entry.1528171692': text //Tod02
    //   //entry code findet man im Inspector -> hilfreiches video 6
    //   //und auch https://groups.google.com/g/tasker/c/NNFP9CgfWBo?pli=1
    // }
    var queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&'); // don't touch this!

    // making the post request to evil google servers  ...
    fetch(url, {
        method: 'POST',
        mode: 'no-cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: queryString // body data type must match "Content-Type" header
      }).then(response => response)
      .then(data => console.log(data));
  })
  /*
     ---------------------------------------------------------------
  */

  /* Antworten from Spreadsheet holen
     das spreadsheet als csv sharen (publish to web) un den link unten ersetzen
  */
  let url2 = "https://docs.google.com/spreadsheets/d/1UOeqADgY9YVOG0J6gQ5MwL3j5o-s2ndmQLTKGLJn7MY/edit?resourcekey#gid=218525999";

  const response = fetch(url2)
    .then(response => response.text())
    .then(v => Papa.parse(v))
    .then(function(v) {
      let antworten = v.data.filter((word, index) => index > 0);
      console.log(antworten)
      antworten.forEach(element => {
        let antwort = element[1];
        let node = document.createElement("LI"); // Create a <li> node
        let textnode = document.createTextNode(antwort); // Create a text node
        node.appendChild(textnode);
        //document.querySelector(".mLine").append(node);

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

            let a1 = "«" + antworten[2][1] + "» «" + antworten[3][1] + "» «" + antworten[4][1] + "» «" +antworten[5][1] + "» «" + antworten[6][1] + "»";
            let a2 = "«" + antworten[7][2] + "» «" + antworten[8][2] + "» «" + antworten[9][2] + "» «" +antworten[10][2] + "» «" + antworten[11][2] + "»";

            let mLine01 = new Antwort;
            mLine01.input(".mLineL01", ".mLineM01", ".mLineR01", a1);

            let mLine02 = new Antwort;
            mLine02.input(".mLineL02", ".mLineM02", ".mLineR02", a2);



            console.log(antworten)
      });
    })
    .catch(err => console.log(err))


});



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
