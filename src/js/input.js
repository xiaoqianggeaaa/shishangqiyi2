;(function($){

    $(function(){
        //各个网页的链接与传承
      $("#content").on("click",function(){
          $(".inputp").fadeOut();
      })
      $(".gouwuche").on("click",function(){
          location.href="http://localhost:1706/project/src/html/car.html";
      })
      $("#toindex").on("click",function(){
          location.href="http://localhost:1706/project/src/index.html";

      })
      // 点击侧边栏登录框，打开登录界面
      $('.dengluba').on("click",function(){
            $('#isbackground').fadeIn();
            $('#myform').fadeIn(); 
      })
        
      //
     //登录注册框关闭与打开
    $("#showit").click(function(){
      $("#myform").fadeIn();
      $("#myform1").css({
        "display":"none"
      })
        $("#isbackground").fadeIn();
        return false;
    })
     $("#showit1").click(function(){
         $("#myform1").fadeIn();
           $("#myform").css({
        "display":"none"
      });
        $("#isbackground").fadeIn();
        return false;
    })
    $("#close").click(function(){
      $("#isbackground").fadeOut();
      $('#isbackground input').each(function(){
        //关闭登录或注册框时清空所有input
          $(this).val("");
          
      })
    })

  $('.isthea').click(function(){
      $("#myform").fadeOut();
      $("#myform1").fadeIn();


  })
    $('.isthea1').click(function(){
      $("#myform").fadeIn();
      $("#myform1").fadeOut();


  })
    //颜色切换
    $('.thebtn2').click(function(){
        $(this).toggleClass('isspan');
        $('.thebtn1').toggleClass('isspan');
        $('.isthea').fadeOut();
        
    })
    $('.thebtn1').click(function(){
        $(this).toggleClass('isspan');
        $('.thebtn2').toggleClass('isspan');
        $('.isthea').fadeIn();

        
    })

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

    //滚轮事件
      $(window).scroll(function(){
            if(window.scrollY>=125){
               
                animate($("#scroll")[0],{
                    "height":40
                })
                $(".isclose").css({
                    "top":"40px"
                });
            $(".inputp").css({
                    "top":"40px"
                });             
               $("#aside").css({
                    "top":"40px"
                });
            }else{
                    animate($("#scroll")[0],{
                    "height":0
                })
           $(".isclose").css({
                    "top":"125px"
                });
            $(".inputp").css({
                    "top":"125px"
                });             
               $("#aside").css({
                    "top":"125px"
                });
            }
           
      })

      //点击关闭开启侧边栏
      $(".isclose").click(function(){
        if($("#aside")[0].offsetWidth>0){
            $("#aside").animate({
                width:"0px"
            });
            $(this).animate({
                right:0
            },function(){
                    $(this).html("<");
            }.bind(this))
            console.log(66);
        }else{
          $("#aside").animate({
                width:"120px"
            });
            $(this).animate({
                right: "120px"
            },function(){
                    $(this).html(">");
            }.bind(this))
        }
      })
      //点击开启收索框
      $(".isshousuo").click(function(){
                $(".inputp").css({
                    "display":"block"
                })

      })
      //点击关闭收索框
      $("#main").click(function(){
             $(".inputp").css({
                    "display":"none"
                })
         })
 })})(jQuery);