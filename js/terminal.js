//terminal.js
//using ptty.js
    $(document).ready(function(){
        var $ptty = $('#terminal').Ptty();
    //command 1
    $ptty.register('command', { 
    name: 'hello',
    method: function(cmd){
        cmd.out = "Hello world!";
        return cmd;
    },
    options: [],
    help: 'A command to say hi.'
});
     //ping command
     $ptty.register('command', { 
    name: 'ping',
    method: function (cmd){
        cmd.out = "Reply from "+ipmain+": bytes=32 time=1ms TTL=53";
        return cmd;
          },
    options: [],
    help: 'JS PING check networtk connection by, Bryce Mercines 2017'
});

     //network fixer command
     //netrun
      $ptty.register('command', { 
    name: 'netrun',
    method: function (){
      var x = document.getElementsByClassName("bstatus");
      for (var i=0;i < x.length;i++) {
      	x[i].innerHTML = ipmain+i;
      	iparray.push(ipmain+i);
      }
    },
    options: [],
    help: 'fixes and silmulate all the network status'
});


    });
    