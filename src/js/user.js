;(function($){
    $(function(){

        $('#btn1').on("click",function(){
           thedeng('user.php',$("#inp1").val()); 
 
        });

            //input
     function thedeng(thephp,user){
        console.log(thephp,user);
        $.get("http://localhost:1706//project/src/api/php/"+thephp+"?user="+user,function(data){
                try{
                    var datalist=JSON.parse(data);
                }catch(e){
                    try{
                        var datalist=eval("("+data+")");
                    }catch(err){
                        var datalist=data;
                    }
                }
                if(datalist==""){
                    $(".istrue").html("不存在该用户，请先注册");
                }else{
                        if($('#inp2').val()==datalist){
                            $('#isbackground').fadeOut();
                        }else{
                            console.log(777);
                        }
                }
            });
            
        }
      
    })
})(jQuery);