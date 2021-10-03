
// from here things do begin 
//show_hide_on_click("mobile-menu-btn","menu");

function show_hide_on_click(to_click, to_hide){
    var item = document.getElementsByClassName(to_click)[0];
    item.onclick = function(){
        show_hide(to_hide);
    }
}

/*
document.getElementsByClassName("mobile-menu-btn")[0].onclick = function(){
    show_hide("menu");
}*/

// from here things do begin
function show_hide(to_change){
    var  item = document.getElementsByClassName(to_change)[0];
    if (item.style.display == ""){
        item.style.display = "inline-block";
        item.style.transition = "500ms";
        console.log("Could show it!");
        return;
    }
    item.style.display = "";
    console.log("Could hide it!");
}

// hide_on_click("mobile-menu-btn","menu")

function show_on_click(to_click,to_hide){
    document.getElementsByClassName(to_click)[0].onclick = function(){hide()};
    function hide(){
        var items = document.getElementsByClassName(to_hide);
        items[0].style.display ="block";
        console.log(items[0]);
        //[0].style.background-color = "yellow";
    }
}

function show_on_click(to_click,to_hide){
    document.getElementsByClassName(to_click)[0].onclick = function(){hide()};
    function hide(){
        var items = document.getElementsByClassName(to_hide);
        items[0].style.display ="none";
        console.log(items[0]);
        //[0].style.background-color = "yellow";
    }
}


hide_show_menu("mymenu");
function hide_show_menu(menu_id){
    var active = false;
    var c = 1;
    var menu =  document.getElementById(menu_id);
    document.getElementsByClassName("mobile-menu-btn")[0].onclick = function(){
        c = c + 1; 
        console.log(c);
        console.log(active);
        // menu.style.position = "unset";
        if (!active){
            menu.style.left = "0";
            menu.style.transition = "500ms";
            active = true;
            return;
        }
        menu.style.left = "-100%";
        menu.style.transition = "500ms";
        active = false;
        return;
    };
    
}



/*
menu = document.getElementsByClassName("menu")[0];
console.log(menu.style);
menu.style.left = "0";
menu.style.top = "70px";
*/
/*
let c = 1;
slide_on_click("mybtn","mymenu");

function slide_on_click(to_click,to_slide){
    
    var btn = document.getElementById(to_click);
    
    btn.onclick = function() {
        c = c + 1;
        console.log(c);
        console.log("clicked");
        slide(to_slide);
    }

}

function slide(to_slide){
    var item = document.getElementById(to_slide);
    console.log("clicked here");
    console.log("------------------");
    console.log(item.style.left);
    console.log("------------------");
    if (item.style.left == ""){
        item.style.left = "0";
        item.style.transition = "500ms";
        item.style.color = "red";
        console.log("slided right");
        return;    
    }
    console.log("Directlty came here!");
    item.style.left = "-100%";
}
*/

/*
document.getElementById("mybtn").onclick = function(){
    console.log("clicked");   
    var active = false;
    var menu = document.getElementById("mymenu");  
    if (!active){
        menu.style.left = "0";
        menu.style.transition = "500ms";
        active = true;
        console.log("Clicked!");
        return;
    }
    menu.style.left = "-100%";
    active = false;  
}
*/