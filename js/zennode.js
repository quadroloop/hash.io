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
}

function dropreset() {
  var droparea = document.getElementById("dropzone");
 droparea.className = "";
}

// UI Responsive for drag and drop and screen layout 
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



//sidebar
function w3_open() {
  document.getElementById("main").style.marginLeft = "15%";
  document.getElementById("mySidebar").style.width = "15%";
  document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
}

// Student ledger function.
// default function.
function sledger() {
   var x = 0;
   var table_data = document.getElementById("out").innerHTML;
   var dash_board_data = document.getElementById("dashboard");

  var lines = table_data.split('\n'); 
for(var i = 0;i < lines.length;i++){ // loop to get textarea data line by line.
  //if (lines[i]==""){
    //x++;
     var line_fragmentation = lines[i].split(','); // split text to different sections
    for(var l=0;l<line_fragmentation.length;l++){
      if (line_fragmentation[l]==""){
        //dont attemp if data is empty
      }else{
      // handle when data is not emply  
      //dash_board_data.innerHTML += line_fragmentation[l]+"<br>";
      dash_board_data.innerHTML += '<a class="w3-text-grey"><i class="fa fa-circle w3-text-blue"></i> File Uploaded!</a><br>';

    }
    }

  }
  
}