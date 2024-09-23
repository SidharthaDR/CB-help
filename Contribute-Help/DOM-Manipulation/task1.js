var button1 = document.getElementById("btn1")
var head1 = document.getElementById("he1")

function changeText(){
    head1.textContent = "Hello, World!!!"
}
button1.addEventListener('click',changeText)