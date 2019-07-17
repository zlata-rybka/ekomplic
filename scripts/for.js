function setCookie(){
    
    var customObject = {}
    customObject.alias = document.getElementById('alias').value;
    customObject.gender = document.getElementById('gender').value;
    customObject.area = document.getElementById('area').value;
    customObject.activity = document.getElementById('activity').value;
    customObject.coop = document.getElementById('coop').value;
    var jsonString = JSON.stringify(customObject);
    document.cookie = "cookieObject=" + jsonString;
//toereticky by tohle melo ulozit vic klicu k jedene cookie//
}
    
function getCookie(){
    var nameValueArray = document.cookie.split("=");
    
    
    //odeli se to rovnase (doufejme)//
    document.getElementById('alias').value = customObject.alias;
    document.getElementById('gender').value = customObject.gender;
    document.getElementById('area').value = customObject.area;
    document.getElementById('activity').value = customObject.activity;
    document.getElementById('coop').value = customObject.coop;
}