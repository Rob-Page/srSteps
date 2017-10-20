/******************************************************
 * ON LOAD CONROLLER
 * populates all onlicks 
 * #postTest on click
 * 
 ******************************************************/

//TODO add in funtionality to check if the SR exsists already as soon as the number is entered in, 
// if it does alert the user and redirect to that SR, and add the save button
// if it doesn't then add the create button

function onloadController() {
    onclickGenerator();
    //onload get the pram from the url and pass it in to see if there is anything we need
    var queryString = getQueryVariable();
    //if the url has an SR attached to the end make a call out to the api and populate the SR
    if(queryString){
        httpGetAsync("/api/" + getQueryVariable(), function(response) {
                console.log(getQueryVariable());
            populateSR(JSON.parse(response));
        });
    }    
}
//Run onloadController
onloadController();

function getQueryVariable(variable)
{
       //grab url params
       var query = window.location.pathname;
       //take out the /
       var vars = query.split("/");
       //return what is left
       return vars[1];
}
/******************************************************
 * ONCLICKS
 * #getTest on click 
 * #postTest on click
 *
 ******************************************************/
function onclickGenerator() {
    /******************************************************
     * CLICK #testFormSubmit
     * Makes GET call to the url passed in and logs the response
     ******************************************************/
    document.querySelector("#testFormSubmit").onclick = function() {
        event.preventDefault();
        var formData = new FormData(document.querySelector("#testForm")),
            result = {};

        for (var entry of formData.entries()) {
            result[entry[0]] = entry[1];
        }
        console.log("Prepared result: ",result);
        httpPostAsyncJSON("/api/"+ result.sr_num, result, function(response) {
            console.log(response);

        });
    };

    /******************************************************
     * CLICK #getTEst
     * Makes GET call to the url passed in and logs the response
     ******************************************************/
    document.querySelector("#getTest").onclick = function() {

        // gets sr attribute passed in in the url
        httpGetAsync("/api/33333/IC", function(response) {
            console.log(response);
        });

        // gets sr by number
        httpGetAsync("/api/33333", function(response) {
            console.log(response);
        });

    };

    /******************************************************
     * CLICK #getTEst
     * Makes POST call using the url and body variable passed 
     * in and logs the response
     ******************************************************/
    document.querySelector("#postTest").onclick = function() {
        var body1 = "this is the IC tag";


        var body2 = {
            "sr_num": "33333",
            "IC": "test this stuff for what IO want",
            "IV": "test this stuff for what IO want",
            "CD": "test this stuff for what IO want",
            "CV": "test this stuff for what IO want",
            "PS": "test this stuff for what IO want",
            "SAP": "test this stuff for what IO want",
            "KC": "test this stuff for what IO want"
        };
        // gets sr by number
        httpPostAsyncJSON("/api/33333", body2, function(response) {
            console.log(response);
        });

        httpPostAsync("/api/33333/IC", body1, function(response) {
            console.log(response);
        });
    };
}

function populateSR(srObject) {
    // get all the sr HTML objects
    var inputs =  document.querySelectorAll('input, textarea');
    // populate the by looping throuhg all the objects and assiging them the the value of the key that matches the input name (same crap you submited so it matches)
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = srObject[inputs[i].name];
    }
}

/******************************************************
 * HTTP GET ASYNC
 * gets in a url and a callback 
 * create new request
 * Set callback run conditions if you get a successful response (4 or 200) 
 * Open the http call passing in the method and url
 * Send the get call with the body passed in
 ******************************************************/
function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

/******************************************************
 * HTTP POST ASYNC
 * gets in a url, body, and a callback 
 * create new request
 * Set callback run conditions if you get a successful response (4 or 200) 
 * Open the http call passing in the method and url
 * Send the POST call with the string body passed in
 ******************************************************/
function httpPostAsync(theUrl, body, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }

    xmlHttp.open("POST", theUrl, true); // true for asynchronous 
    xmlHttp.send(body);
}

/******************************************************
 * HTTP POST ASYNC
 * gets in a url, body, and a callback 
 * create new request
 * Set callback run conditions if you get a successful response (4 or 200) 
 * Open the http call passing in the method and url
 * Send the POST call with the stringified json body passed in
 ******************************************************/
function httpPostAsyncJSON(theUrl, body, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }

    xmlHttp.open("POST", theUrl, true); // true for asynchronous 
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(JSON.stringify(body));
}

function addSR(evt) {
    evt.preventDefault();
    return false;
}