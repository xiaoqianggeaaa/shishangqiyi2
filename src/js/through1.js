$(function(){
    
    $("#Best>div").each(function(idx,item){
        $(this).attr({
            "idx": Number(idx+1)
        })
    }).on("click",function(){
          var idx=$(this).attr('idx');
          var div="best";
            location.href="./goods.html?id="+idx+"&&div="+div;
        })
 
    $(".Arrivals>div").each(function(idx,item){
        $(this).attr({
            "idx": Number(idx+1)
        })
    }).on("click",function(){
          var idx=$(this).attr('idx');
          var div="best";
            location.href="./goods.html?id="+idx+"&&div="+div;
        })
    
    $(".weekly>div").each(function(idx,item){
        $(this).attr({
            "idx": Number(idx+1)
        })
    }).on("click",function(){
          var idx=$(this).attr('idx');
          var div="best";
            location.href="./goods.html?id="+idx+"&&div="+div;
        })
    })
