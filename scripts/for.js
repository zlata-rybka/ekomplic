function setCookie(cname, cvalue, exdays) {
    alert('welcome to the game')
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var cvalue = document.getElementById("alias").value + document.getElementById("gender").value + document.getElementById("area").value + document.getElementById("activity").value + document.getElementById("coop").value;
    var cname = "login";
    localStorage.setItem(cname, cvalue);
  }
  
  function getCookie(cname) {
    var obsah = localStorage.getItem("login");
  } 
 

function dejToTam(classElement) {
  
  var testElements = document.getElementsByClassName(classElement);
  var testDivs = Array.prototype.filter.call(testElements, function(testElement){
    if(testElement.checked == false && testElement.type == 'radio') {
      return;


    }
    var cvalue = testElement.value;
    var idElement = testElement.id;
    localStorage.setItem(idElement, cvalue)
});
  
}
