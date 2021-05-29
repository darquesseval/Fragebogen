window.addEventListener('DOMContentLoaded', (event) => {

    // wenn button gedrückt dann post direkt ins google form

    document.querySelector(".clickme").addEventListener("click", function () {
        let text = document.querySelector(".submittedText").value; // text aus der textarea
        let formID = "1rUGcaZDPfyW4ar9cnCz8gXInlIm3qJLqks44s_TSEOY"; // formID vom google form dokument
        let url = 'https://docs.google.com/forms/d/'+formID+'/formResponse'; // url für den post request
        // entry.329540547 muss adaptiert werden! -> mehr infos hier: https://stackoverflow.com/questions/18073971/http-post-to-a-google-form  
        let data = {
            'entry.329540547': text
        }
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
    let url2 = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRl6yC1ApBKa7kxh1aW_G7oOHBREusfC-kiojH9TqWzOgj52QL-g6MxeRBhs-zvxM7G3l3qQy9Vvq9K/pub?key=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fd%2F1E4yBm_nIi4ELKfCbawA3KBvrdZp69dW24ozW8hvj-zI&output=csv&gid=186008803&single=true";

    const response = fetch(url2)
        .then(response => response.text())
        .then(v => Papa.parse(v))
        .then(function (v) {
            let antworten = v.data.filter((word,index) => index > 0);
            console.log(antworten)
            antworten.forEach(element => {
                let antwort = element[1];
                let node = document.createElement("LI"); // Create a <li> node
                let textnode = document.createTextNode(antwort); // Create a text node
                node.appendChild(textnode);
                document.querySelector(".antworten").append(node);
            });
        })
        .catch(err => console.log(err))

});
