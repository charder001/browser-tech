document.getElementById("printButton").addEventListener("click", function(){
    console.log("printing")
    window.print()
})

function liveUpdate(){
   var updatedText =  document.getElementById("textInput").value
   document.getElementById("fillingText").innerText = updatedText
}