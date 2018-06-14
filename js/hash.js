var mode = 1;

function mcx() {
  // this function is the pointer to adittional plugins added.
  if(mode == 1){
    sledger(); // the feature chosen is the student ledger manager
  }
}

//UI js for dropzone
function drophover() {
  var droparea = document.getElementById("dropzone");
 droparea.className = "animated shake";
 // play sound
 setTimeout("sfx1();",500);
 
}
// SFX
function sfx1() {
  document.getElementById("bling").play();
}

//file upload

function file_call() {
  var file = document.getElementById("xlf");
  file.click();
  var loader = document.getElementById("dropzone");
      if(file.value){
          loader.src = '';
      }
}

function dropreset() {
  var droparea = document.getElementById("dropzone");
 droparea.className = "";
}

// UI Responsive for drag and drop and screen layout 
/*
    setInterval(function(){
     var rscreen = window.innerWidth // detect current window size
|| document.documentElement.clientWidth
|| document.body.clientWidth;
 
   if ( rscreen < 1000 ){
     w3_close(); // close side bar
   }else{
     w3_open();
   }   
    }, 300);
    */
   

// check if file is uploaded and parsed.
    setInterval(function(){
       var data_screen = document.getElementById("main_panel");
       var data_panel = document.getElementById("out");
       var droparea = document.getElementById("drop");
       if ( data_panel.innerHTML == [ ] ){
        droparea.style.display = "block";
        data_screen.style.display = "none";    
       }else{
          droparea.style.display = "none";
        data_screen.style.display = "block";
        // tone shit document.getElementById("stone").play();
       }
    }, 200);





// switch screen function 
var capp = '';
function scr(n) {
   switch(n){
       case 1:
         alert("home");
       break;
       case 2:
         alert("sheets");
       break;
       case 3:
         alert("something");
       break;
   }
}