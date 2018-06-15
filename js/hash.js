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
    // setInterval(function(){
    //    var data_screen = document.getElementById("main_panel");
    //    var data_panel = document.getElementById("out");
    //    var droparea = document.getElementById("drop");
    //    if ( data_panel.innerHTML == [ ] ){
    //     droparea.style.display = "block";
    //     data_screen.style.display = "none";    
    //    }else{
    //       droparea.style.display = "none";
    //     data_screen.style.display = "block";
    //     // tone shit document.getElementById("stone").play();
    //    }
    // }, 200);



var classdata = 0;

function tabulize() {
   var data = document.getElementById('out').innerText;
   if(data){
      var x = document.getElementById('drop');
        x.innerHTML = '';
      var pdata = JSON.parse(data);
        // convert to table
        console.log(pdata);
        x.innerHTML += '<div class="w3-margin"><table class="w3-table w3-small w3-card-2" id="tabledata"></table></div>';
        for(var i=0; i < pdata.Sheet1.length; i++){
            var classData;
            if(classdata == 0){
                   classData = 'w3-light-grey';
                   classdata = 1;
                }else{
                  classData = 'w3-white'
                  classdata =0;
            }
             var app = document.getElementById('tabledata');
                app.innerHTML +=  '<tr class="'+classData+'"><td>'+pdata.Sheet1[i].Name+'</td><td>'+pdata.Sheet1[i].Age+'</td><td>'+pdata.Sheet1[i].Campus+'</td></tr>';
            }
            
        }
   }




// switch screen function 
var capp = 'drop';
function scr(menu) {
       document.getElementById(capp).style.display = 'none';
        document.getElementById('window_banner').innerHTML = menu;
         document.getElementById(menu).style.display = 'block';
         capp = menu;
}