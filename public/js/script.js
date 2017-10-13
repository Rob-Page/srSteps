document.querySelector("#getTest").onclick  = function(){

// gets sr attribute passed in in the url
httpGetAsync("/api/33333/IC", function(response){
	console.log(response);
});

// gets sr by number
httpGetAsync("/api/33333", function(response){
	console.log(response);
});

};		


document.querySelector("#postTest").onclick  = function(){
var body1 = "this is the IC tag";


var body2 ={
        "sr_num": "33333",
        "IC": "test this stuff for what IO want",
        "IV": "test this stuff for what IO want",
        "CD": "test this stuff for what IO want",
        "CV": "test this stuff for what IO want",
        "PS": "test this stuff for what IO want",
        "SAP": "test this stuff for what IO want"
    };
// gets sr by number
httpPostAsyncJSON("/api/33333", body2 , function(response){
	console.log(response);
});

httpPostAsync("/api/33333/IC", body1 , function(response){
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

function httpPostAsync(theUrl, body, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    
    xmlHttp.open("POST", theUrl, true); // true for asynchronous 
    xmlHttp.send(JSON.stringify(body));
}

function httpPostAsyncJSON(theUrl, body, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    
    xmlHttp.open("POST", theUrl, true); // true for asynchronous 
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(JSON.stringify(body));
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