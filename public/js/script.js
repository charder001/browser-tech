var main = document.querySelector("main")
main.insertAdjacentHTML("beforeend", '<button value="Print" id="printButton">Print</button>')
document.getElementById("printButton").addEventListener("click", function(){
    console.log("printing")
    window.print()
})

function liveUpdate(){
   var updatedText =  document.getElementById("textInput").value
   document.getElementById("fillingText").innerText = updatedText
}

function removeOld(){
    var filledText = document.getElementById("filledText")
    if (filledText.innerText != "") {
        filledText.innerText = ""
    }
}

const shirtSVG = document.getElementById('shirtSVG');
let radioButtons = document.forms["shirt"].elements["shirtColor"];
for (var i = 0, max = radioButtons.length; i < max; i++) {
    radioButtons[i].onclick = function () {
    shirtSVG.style.fill = this.value;
  }
}

const shirtTextColor = document.getElementById('fillingText');
let radioButtonsText = document.forms["shirt"].elements["textColor"];
for (var i = 0, max = radioButtonsText.length; i < max; i++) {
    radioButtonsText[i].onclick = function () {
        shirtTextColor.style.color = this.value;
        console.log(shirtTextColor.style.color)
  }
}
