function setCookie(cname, cvalue, exdays) {
    alert('welcome to the game')
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var cvalue = document.getElementById("alias");
    //var cvalue = document.getElementById("gender");//
    //var cvalue = document.getElementById("area");//
    //var cvalue = document.getElementById("activities");//
    //var cvalue = document.getElementById("coop");//
    
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  } 
  function checkCookie() {
    var alias = getCookie("alias");
    if (alias != "") {
      alert("Welcome again " + alias);
    } else {
      user = prompt("Please login:", "");
      if (user != "" && user != null) {
        setCookie("alias", user, 365);
      }
    }
  }

