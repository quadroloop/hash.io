var mode = 1;

function mcx() {
  // this function is the pointer to adittional plugins added.
  if(mode == 1){
    sledger(); // the feature chosen is the student ledger manager
  }
}


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
   var table_data = document.getElementById("data").value;
   var dash_board_data = document.getElementById("dashboard");

  var lines = table_data.split('\n');
for(var i = 0;i < lines.length;i++){
  if (lines[i]==""){
    x++;
  }else{
    alert(lines[i]);
  }
}
 dash_board_data.innerHTML = "number of lines is = " +x;

  
}