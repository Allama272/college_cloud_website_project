var theme = document.getElementById("darkmode-toggle");
var dark = true
theme.onclick = function(){
   
    if(dark){
    document.body.style.background="linear-gradient(180deg,rgba(137, 47, 255, 0.42) 31.77%,#6392de 100%)";
    }
    else{
        document.body.style.background="radial-gradient(circle, rgba(8,8,32,1) 7%, rgba(27,27,121,1) 98%)";
    }
    dark = !dark
}