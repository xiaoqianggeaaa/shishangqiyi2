$(function(){
    console.log(666);
    var divs=document.querySelectorAll(".the_third1_div div");
    //给第三div里面div加个索引
   divs.forEach(function(item,idx){
        item.setAttribute("idx", idx+1);
   })

   var isthediv=location.search;

   //点击时进行传参
   $(divs).on("click",function(){
        var idx=$(this).attr('idx');
        if(isthediv){
          var div="n_third_div";
        }else{
          var div="third_div";
        }
        
        location.href="./html/goods.html?id="+idx+"&&div="+div;
        
   })
   

   $('.the_fourth_div>div').each(function(idx){
        $(this).attr({
            "idx":idx+1
        }).on("click",function(){
                    var idx=$(this).attr('idx');
                      if(isthediv){
                        var div="n_fourth_div";
                      }else{
                        var div="thegoodslist";
                      }
                        
                        location.href="./html/goods.html?id="+idx+"&&div="+div;
        })

       $('.the_third_div div').each(function(idx){
        $(this).attr({
            "idx":idx+1
        })
        }).on("click",function(){
                    var idx=$(this).attr('idx');
                    if(isthediv){
                      var div="n_third_div";
                    }else{
                       var div="third_div";
                    }
                       
                        location.href="./html/goods.html?id="+idx+"&&div="+div;
        })


   })

  
})