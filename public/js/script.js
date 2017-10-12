document.querySelector("#test").onclick  = function(){

httpGetAsync("/api/33333", function(response){
	console.log(response);
});

};



function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

// var http = new XMLHttpRequest();
// var url = "/api/";
// var params = "33333";
// http.open("POST", url, true);

// //Send the proper header information along with the request
// http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// http.onreadystatechange = function() {//Call a function when the state changes.
//     if(http.readyState == 4 && http.status == 200) {
//         alert(http.responseText);
//     }
// }
// http.send(params);