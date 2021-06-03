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
    document.querySelector(".submittedText").value = "";
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

      //entry code findet man im Inspector -> hilfreiches video 6
      //und auch https://groups.google.com/g/tasker/c/NNFP9CgfWBo?pli=1

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
      });
    })
    .catch(err => console.log(err))
});

let givingup = ["Max Frisch hatte sehr interessante Fragen für die Gesellschaft. Ich fange tatsächlich an, an mir und meinen Prinzipien zu zweifeln, mit diesen Fragen.",
  "Ab und zu ist es schwierig, eine Frage zu beantworten die so tiefgründig ist.",
  "Jap.",
  "Es ist etwas, das sogar regelmässig bei mir geschieht xD I know I'm a creep.",
  "Ja und zwar viel zu oft. Es ist beunruhigend, wenn man in so einer Situation ist und nicht weiss wieso. Aber hey, ich werd wohl nicht die Einzige sein.",
  "jaaaa, so oft! Ich verstehe es nicht. Manchmal kommt einfach dieser Drang und es ist, als ob ich keine Kontrolle mehr hätte!",
  "Ist es sehr schrecklich wenn ich sage ja? Ich fühle mich jedes mal so schlecht...",
  "Leider nein. :(",
  "Deep. Ich glaube eigentlich nicht nein. Aber ich musste jetzt lange überlegen.",
  "Ich bin mir unsicher. Es kommt sehr stark drauf an wie die Frage genau gemeint ist. Ich hätte jetzt gesagt ja aber wenn es verallgemeinert gefragt ist dann definitiv nein. Glaub."
]

let m01;
let m02;
let m03;

class Antwort {
  input(klasseL, klasseM, klasseR, string) {
    this.klasseL = klasseL;
    this.klasseM = klasseM;
    this.klasseR = klasseR;
    this.string = string;
    document.getElementById(this.klasseL).innerHTML = this.string;
    document.getElementById(this.klasseM).innerHTML = this.string;
    document.getElementById(this.klasseR).innerHTML = this.string;
  }
}

let a1 = "«" + givingup[0] + "» «" + givingup[1] + "»";
let a2 = "«" + givingup[5] + "» «" + givingup[6] + "» «" + givingup[7] + "»";
let a3 = "«" + givingup[3] + "» «" + givingup[4] + "» «" + givingup[2] + "»";
let a4 = "«" + givingup[8] + "» «" + givingup[9] + "»";

let tLine01 = new Antwort;
tLine01.input("t01", "t03", "t05", a1);

let tLine02 = new Antwort;
tLine02.input("t02", "t04", "t06", a2);

let tLine03 = new Antwort;
tLine03.input("t07", "t09", "t11", a3);

let tLine04 = new Antwort;
tLine04.input("t08", "t10", "t12", a4);

let mLine01 = new Antwort;
mLine01.input("m01", "m03", "m05", a1);

let mLine02 = new Antwort;
mLine02.input("m02", "m04", "m06", a2);

let mLine03 = new Antwort;
mLine03.input("m07", "m09", "m11", a3);

let mLine04 = new Antwort;
mLine04.input("m08", "m10", "m12", a4);

let eLine01 = new Antwort;
eLine01.input("e01", "e03", "e05", a1);

let eLine02 = new Antwort;
eLine02.input("e02", "e04", "e06", a2);

let eLine03 = new Antwort;
eLine03.input("e07", "e09", "e11", a3);

let eLine04 = new Antwort;
eLine04.input("e08", "e10", "e12", a4);

let hLine01 = new Antwort;
hLine01.input("h01", "h03", "h05", a1);

let hLine02 = new Antwort;
hLine02.input("h02", "h04", "h06", a2);

let hLine03 = new Antwort;
hLine03.input("h07", "h09", "h11", a3);

let hLine04 = new Antwort;
hLine04.input("h08", "h10", "h12", a4);


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
// mLine02.input(m02, ".answer02", mInput02);
//
// let mLine03 = new Antwort;
// mLine03.input(m03, ".answer03", mInput03);



//tod.addEventListener("click", function(){
//  console.log('true')
//  content.style.transform = 'rotateX(90deg)';
//})
