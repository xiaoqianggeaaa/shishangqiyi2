;(function($){
    $(function(){

         
        $('#btn1').on("click",function(){

            setTimeout(function(){
             if($('.istrue').html()===""){
                 thedeng('user.php',$("#inp1").val()); 
                }
            },500)
        
        });

            //用户登录
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
               
                if(datalist==""){
                    $(".istrue").html("不存在该用户，请先注册");
                }else{
                        if($('#inp2').val()==datalist){
                            $('#isbackground').fadeOut();
                            var date=new Date();
                            date.setDate(date.getDate()+7);
                          
                            if($('#check')[0].checked){
                                console.log(666);
                                document.cookie="user="+$("#inp1").val()+";expires="+date.toString()+";path=/";
                                    location.reload();

                            }else{
                                       document.cookie="user="+$("#inp1").val();

                            }
                         
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
                        var user=$(".input1").val();
                        var password=$(".input2").val();
                        var username=$(".input4").val();
                        var sex=$(".input5").val();
                        var phone=$(".input6").val();
                    if($('.thetrue').html()===""){
                        sumb("usernews.php",user,password,username,sex,phone);
                     
                          $("#myform").fadeIn();
                          $("#myform1").css({
                            "display":"none"
                          });
                  }
                    },500)
                

        
            });

        $('.input1').on('blur',function(){
                var user=$(".input1").val();

                console.log(username);
            sumb("usernews.php",user,password,username,sex,phone);
        })


        //注册函数
    function sumb(thephp,user,password,username,sex,phone){
        if(password==undefined){
            password="";
        }
       
        $.get("http://localhost:1706//project/src/api/php/"+thephp+"?writeit=xx&&user="+user+"&&password="+password+"&&username="+username+"&&sex="+sex+"&&phone="+phone,function(data){
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
                    

                        $(".thetrue").html("已存在该用户，请重新输入");
               
                }

            });
            
        }

    //点击挑转到购物车页面
    $(".num").parent().on('click',function(){
        location.href="http://localhost:1706/project/src/html/car.html";
    })
    })
})(jQuery);