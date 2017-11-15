;(function($){
   
    $(function(){
         //邮箱验证
              var inp1=document.querySelector('#inp1');
              var inp2=document.querySelector('#inp2');

            var myform=document.querySelector('#myform');
            
            $("#inp1").blur(function(){
                  
                if(!/^[a-z][\w]+@[a-z]+\.[a-z]+$/i.test($('#inp1').val())){
                    
                    $('.istrue').html("邮箱格式错误");
                    
                }

                 inp1.onfocus=function(){
                  $('.istrue').html("");
             }
             inp2.onblur=function(){
                    if(/\s/ig.test($('#inp2').val())){
                    $('.istrue').html("密码中不能存在空格");

                    }
             }
             inp2.onfocus=function(){
                 $('.istrue').html("");
             }
            
            });

       

       

        //非空验证
            $("#btn1").click(function(){
              
                    if(inp1.value==""||inp2.value==""){
                        $('.istrue').html("用户名或密码不能为空");

                    }
            })
  
//注册界面的验证
//
                
            $(".input1").blur(function(){
                  
                if(!/^[a-z][\w]+@[a-z]+\.[a-z]+$/i.test($('.input1').val())){
                    
                    $('.thetrue').html("邮箱格式错误");
                    
                }

                 $(".input1").focus(function(){
                  $('.thetrue').html("");
             })
    
            
            });
                $('.input2').blur(function(){
                    if(/\s/ig.test($('.input2').val())){
                    $('.thetrue').html("密码中不能存在空格");

                    }
             })
              $('.input2').focus(function(){
                 $('.thetrue').html("");
             })
        //判断两次密码是否输入一致
        $('.input3').blur(function(){
             if($('.input2').val()!==$('.input3').val()){
                     $('.thetrue').html("两次输入的密码不一致");
             }
        })
        $('.input3').focus(function(){
            $('.thetrue').html("");
        })
           
        //用户名
            $(".input4").blur(function(){
                if(!/^[a-z][\w]{5,}$/ig.test($(".input4").val())){
                     $('.thetrue').html("用户名不合法");

                }
            })
       $('.input4').focus(function(){
            $('.thetrue').html("");
        })
           
        //手机号
             $(".input6").blur(function(){
                if(!/^[13458][\d]{10}$/.test($(".input6").val())){
                     $('.thetrue').html("手机号不合法");

                }
            });
        $('.input6').focus(function(){
            $('.thetrue').html("");
        });
        //验证码
        var arr='a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,i,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,I,S,T,U,V,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0'.split(",")
     function randomNumber(min,max){
                return parseInt(Math.random()*(max-min+1)) + min;
        }
        //随机生成验证码
        $('.yanzheng1').html(arr[randomNumber(0,61)]+arr[randomNumber(0,61)]+arr[randomNumber(0,61)]);


       
        $('.yanzheng1').click(function(){
          
             $('.yanzheng1').html(arr[randomNumber(0,61)]+arr[randomNumber(0,61)]+arr[randomNumber(0,61)]);
        })
     //验证码验证
         $(".input7").blur(function(){
            var reg=new RegExp($(".input7").val(),"i");
            console.log($('.yanzheng1').html());

                if(!reg.test($('.yanzheng1').html())||$(this)[0].value.length!=3){
                    
                     $('.thetrue').html("验证码不正确");
                
                }
            });

        $('.input7').focus(function(){
            $('.thetrue').html("");
        });

        //非空验证
        $('.isdenglu').click(function(){
            
            if($(".input1").val()==""||$(".input2").val()==""||$(".input3").val()==""||$(".input4").val()==""||$(".input5").val()==""||$(".input6").val()==""||$(".input7").val()==""){
                $('.thetrue').html("不能留空,请填写全部信息");
            }
        })
 })})(jQuery);