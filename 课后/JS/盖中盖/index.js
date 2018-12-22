
 var hh =  $(".hh")[0];
 for(var i = 0;i<$(".add").length;i++)
 {
     (function(n){
        $(".add a")[n].onclick=function(){
            var add =  document.getElementsByClassName("add");
            var input1 = document.createElement('input');
            for(var j = 0;j<$(".add").length;j++)
            {
                $("#hh").remove();
                console.log("a");
            }
          
            input1.setAttribute("value","回复:");
            input1.setAttribute("onblur","on()");
            input1.setAttribute("id","hh");
         console.log(n);
         
          $(".add")[n].appendChild(input1);
          $("#hh").val("回复：").focus().val( $("#hh").val); 
          }
     }(i));
  
 }
function on(){
    var input1 = document.createElement('input');
    for(var j = 0;j<$(".add a").length;j++)
    {
        $("#hh").remove();
       
    }
   

    input1.setAttribute("onblur","on()");
    input1.setAttribute("id","hh");

    $(".haha")[0].appendChild(input1);
 }

