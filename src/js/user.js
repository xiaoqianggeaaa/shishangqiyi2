;(function($){
    $(function(){

        $('#btn1').on("click",function(){
            setTimeout(function(){
             if($('.istrue').html()===""){
                 thedeng('user.php',$("#inp1").val()); 
                }
            },500)
        
        });

            //input
     function thedeng(thephp,user){
        
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
                console.log(datalist);
                if(datalist==""){
                    $(".istrue").html("不存在该用户，请先注册");
                }else{
                        if($('#inp2').val()==datalist){
                            $('#isbackground').fadeOut();
                        }else{
                        $(".istrue").html("密码不正确，请重新输入");
                        $('#inp2').val("");
                        }
                }
            });
            
        }
        //注册
            $('.isdenglu').on("click",function(){
                     
                
                 setTimeout(function(){
                    if($('.thetrue').html()===""){
                      sumb("user.php",$('.input1').val(),$('.input2').val());
                          $("#myform").fadeIn();
                          $("#myform1").css({
                            "display":"none"
                          });
                  }
                    },500)
                

        
            });

        $('.input1').on('blur',function(){
            sumb("user.php",$('.input1').val());
        })


        //注册函数
    function sumb(thephp,user,password){
        if(password==undefined){
            password="";
        }
       
        $.get("http://localhost:1706//project/src/api/php/"+thephp+"?writeit=xx&&user="+user+"&&password="+password,function(data){
                try{
                    var datalist=JSON.parse(data);
                }catch(e){
                    try{
                        var datalist=eval("("+data+")");
                    }catch(err){
                        var datalist=data;
                    }
                }
                if(datalist!=""){
                 for(var obj in datalist){
                    
                    if(obj===$('.input1').val()){

                        $(".thetrue").html("已存在该用户，请重新输入");
                    }
                }
                }

            });
            
        }
    })
})(jQuery);