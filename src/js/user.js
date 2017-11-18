;(function($){
    $(function(){

         //用户登录，判断密码是否正确
        $('#btn1').on("click",function(){

            setTimeout(function(){
             if($('.istrue').html()===""){
                            var user=$("#inp1").val();
                            var password=$("#inp2").val();
                         sumb("usernews.php",user,password,"","","");
                        
                }
            },500)
        
        });

        //发送ajax请求，获取该用户的信息，更新购物车数量
             function getinformation(thephp,user){
                    console.log(thephp);
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
                console.log(datalist.length);
                            var date=new Date();
                            date.setDate(date.getDate()+7);
                            var arr=[];
                            arr.push(datalist.length);
                            arr.push($("#inp1").val());
                            arr=JSON.stringify(arr);
                          
                            if($('#check')[0].checked){
                                console.log(666);
                                document.cookie="user="+arr+";expires="+date.toString()+";path=/";
                                    location.reload();

                            }else{
                                       document.cookie="user="+$("#inp1").val();

                            }


            })
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

            //判断是否存在该用户
        $('.input1').on('blur',function(){
            
             var user=$(".input1").val();


            sumb("usernews.php",user);
        })

        //判断用户是否登录和存在
        $("#inp1").on("blur",function(){
             var user=$("#inp1").val();
              console.log(user);
             if(user!=""){

                setTimeout(function(){
                    if($(".istrue").html()==""){
                         sumb("usernews.php",user,"","","","");
                    }
                   
                }, 500)
                 
             }
           

        })

        //注册函数
    function sumb(thephp,user,password,username,sex,phone){
        if(password==undefined){
            password="";
        }
        console.log(88888);
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
                //根据服务端返回信息判断用户密码与用户名是否正确
                if(datalist=="exsit"&&$(".input1").val()){
                        $(".thetrue").html("已存在该用户，请重新输入");
                       
                    }else if(datalist=="noexsit"&&$("#inp1").val()!=""){
                        
                         $(".istrue").html("不存在该用户，或用户名错误");
                    }else if(datalist=="error"){
                         $(".istrue").html("密码错误，请输入正确的密码");

                    }else if(datalist=="permit"){
                        
                //更新购物车物品数量
                getinformation("getusercar.php",$("#inp1").val());
                        
                         //登录框样式操作
                            $('#isbackground').fadeOut();

                    }


            });
            
        }

    //点击挑转到购物车页面
    $(".num").parent().on('click',function(){
        location.href="http://localhost:1706/project/src/html/car.html";
    })
    })
})(jQuery);