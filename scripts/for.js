
onsubmit = function() {
    var alias = document.getElementById("alias").value;
    var gender = document.getElementsByName("gender").value;
    var area = document.getElementById("area").value;
    var activity = document.getElementById("activity").value;
    var onetime = document.getElementById("onetime").value;
    var fulltime = document.getElementById("fulltime").value;
    var waitandsee = document.getElementById("waitandsee").value;

    document.getElementById("outputAlias").innerHTML = alias;
    document.getElementById("outputGender").innerHTML = gender;
    document.getElementById("outputArea").innerHTML = area;
    document.getElementById("outputActivity").innerHTML = activity;
    document.getElementById("outputOnetime").innerHTML = onetime;
    document.getElementById("outputFulltime").innerHTML = fulltime;
    document.getElementById("outputWaitandsee").innerHTML = waitandsee;
}