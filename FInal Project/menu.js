/* Variables: change the variables for the corresponding id and class*/

/* id of the link that display in the menu button */
var popper ="#menu-popper";

/* id of the menu that will be displayed */
var unfold="#menu_list";

/*class (without the dot) that shows the menu*/
var display_class="menu_popup";

/* From here you can leave the code as is*/

/*Declare the function*/
function nav(){
    var popping=document.querySelector(popper);
    popping.addEventListener("click",displayMenu,false);
}

function displayMenu(e){
    e.preventDefault();
    var deploy=document.querySelector(unfold);
    deploy.classList.toggle(display_class);
}

/* Add the js class to the html tag to know that js file is working*/
document.querySelector("html").classList.add("js");

/*execute the main function*/
nav();