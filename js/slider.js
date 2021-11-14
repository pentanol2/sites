var slider = document.getElementById("slider");
var s_screen = slider.getElementsByClassName("screen");
var thumbnails = slider.getElementsByClassName("thumbnail");
var current = thumbnails[0];
for (var i = 0 ; i<thumbnails.length; i++){
    img_src = thumbnails[i].childNodes[1].src;
    thumbnails[i].addEventListener("click", (evnt) => {
        console.log("Fazla basma. Oğlum seni döverim : \n"+event.target.src);
        // console.log(evnt.target.src);
        // console.log(event.img_src)
        // console.log("Data "+thumbnails[i]);
        // s_screen[0].childNodes[1].src = thumbnails[i].childNodes[1].src;
        s_screen[0].childNodes[1].src = evnt.target.src;
        if (current != evnt.target){
            current.style.opacity = "1";
            evnt.target.style.opacity = "0.6";
            current = evnt.target;
        }
    },false);
    // var curNail = thumbnails[i];
    // thumbnails[i].style.opacity = "0.5";
    /*
    curNail..onclick = function(c){
        // s_screen[0].childNodes[1].src = thumbnails[i].childNodes[1].src ;
        // s_screen[0].childNodes[1].src =

        // console.log(s_screen[0].childNodes[1].src);
        console.log(curNail);
        console.log("[ * * **** * * ]");
        // console.log(thumbnails[i].childNodes[1].src);
    }
    */
}

function update(srcs){return;}
/*
    var curNail = thumbnails[i];
    // thumbnails[i].style.opacity = "0.5";
    curNail.onclick = function(c){
        // s_screen[0].childNodes[1].src = thumbnails[i].childNodes[1].src ;
        // s_screen[0].childNodes[1].src =

        // console.log(s_screen[0].childNodes[1].src);
        console.log(curNail);
        console.log("[ * * **** * * ]");
        console.log();
        // console.log(thumbnails[i].childNodes[1].src);
    } 
*/