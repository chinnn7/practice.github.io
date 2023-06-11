function next(element, btn, reduce_element) {
    // console.log(element[0].offsetWidth, stop_value);
    var currentPosition = parseInt(element[0].style.left) || 0;
    var img_width = element[0].offsetWidth ;
    var stop_value = (element.length - reduce_element) * -img_width;
    if(currentPosition >= stop_value){
        for (var i = 0; i < element.length; i++){
            var currentPosition = parseInt(element[i].style.left) || 0;
            var newPosition = currentPosition - img_width;
            element[i].style.left = newPosition + "px";
        }
    }
    
    if(currentPosition <= (stop_value + img_width)) { 
        btn[1].style.display = "None";
    }
    else{
        btn[0].style.display = "block";
    }
}

function back(element, btn) {
    var currentPosition = parseInt(element[0].style.left) || 0;
    var img_width = element[0].offsetWidth;
    var stop_value = 0;
    // console.log(currentPosition , stop_value);

    if(currentPosition <= stop_value){
        for (var i = 0; i < element.length; i++){
            var currentPosition = parseInt(element[i].style.left) || 0;
            var newPosition = currentPosition + img_width;
            element[i].style.left = newPosition + "px";
        }
    }
    if(currentPosition >= (stop_value - img_width)){
        btn[0].style.display = "none";
    }else{
        btn[1].style.display = "block";
    }

}
     
function nextstep() {
    var element = document.getElementsByClassName("human");
    var btn = document.getElementsByClassName("next");
    var reduce_element = 3;
    next(element, btn, reduce_element);
}
  
function backstep() {
    var element = document.getElementsByClassName("human");
    var btn = document.getElementsByClassName("next");
    back(element, btn)
}

function nextphoto(){
    var element = document.getElementsByClassName("squ");
    var btn = document.getElementsByClassName("photobtn");
    var reduce_element = 1;
    next(element, btn, reduce_element);
}

function backphoto(){
    var element = document.getElementsByClassName("squ");
    var btn = document.getElementsByClassName("photobtn");
    back(element, btn);
}
function nextphoto2(){
    var element = document.getElementsByClassName("squ2");
    var btn = document.getElementsByClassName("photobtn2");
    var reduce_element = 1;
    next(element, btn, reduce_element);
}

function backphoto2(){
    var element = document.getElementsByClassName("squ2");
    var btn = document.getElementsByClassName("photobtn2");
    back(element, btn);
}

