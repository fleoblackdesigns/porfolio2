// Create a variable below
var HelloWorld = 'Hi There Stranger';

// Console.log() your variable here.
console.log(HelloWorld);
var displayText = document.getElementById("displayText");
console.log(displayText);
displayText.textContent = HelloWorld; 

//Accordion Section
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



//Animate Element
$(document).ready(function(){
    $("button").click(function(){
      var p = $("p");  
      p.animate({left: '100px'}, "slow");
      p.animate({fontSize: '3em'}, "slow");
    });
  });