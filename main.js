var req = new XMLHttpRequest(); /* A stream connecting browser to database */
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "d1wgihg18ANgUFqAUvzhGc6gbjHGeDV35Vc5J1PI";

req.open("GET", url + api_key); /* Creates a valid URL and makes it initliazed */
req.send(); /* Sending request to the server */

req.addEventListener("load", function(){ /* When the request is finished loading, then the function executes */
	if(req.status == 200 && req.readyState == 4){ /* 200 is a successful request && 4 means the operation is complete */ /* When these are true, then it means the data has been received from the server */
  	var response = JSON.parse(req.responseText); /* Creates an easy way to read the data */
    document.getElementById("title").textContent = response.title;
    /* document.getElementById("date").textContent = response.date; */
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})