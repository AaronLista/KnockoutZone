var nav = false;
var ubication = window.scrollY
const header = document.getElementById("header");
const panel = document.getElementsByClassName("panel")[0]

window.onscroll = ()=>{
    let newscroll = window.scrollY;
    if(nav){
        panel.style = "clip-path: circle(0% at 50% 0%);";
        nav = !nav;
    }
    if(newscroll > ubication){
         header.style = "top: -100px;";
         ubication = newscroll;
     } else {
         header.style = "top: 0;";
         ubication = newscroll;
         if(ubication == 0){
            header.style.backgroundColor = "transparent";
         } else {
            header.style.backgroundColor = "#14101ba9";
         }
     }
}

function togglenav(){
    if(nav){
        panel.style = "clip-path: circle(0% at 50% 0%);"
    } else {
        panel.style = "clip-path: circle(200% at 50% 0%);";
    }
    nav = !nav;
}