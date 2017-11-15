;(function($){
    $(function(){
          //input关闭
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
        //fristdiv_img操作
        //设置颜色

        $('.first_div_r>div').each(function(idx,item){
            $(this).css({
                backgroundImage: "url(img/first_img"+(idx+3)+".gif)"
            });
        })


        //second_div_img操作
        $('.second_div>div').each(function(idx){
            $(this).css({
                  "background-image": "url(img/second_div"+(idx+1)+".jpg)"  
            })
        });
      //third_div
        the_third("third_div.php");
        //third_div操作
      the_third1("third_div.php");

        //fourth_div操作
        the_fourth("fourth_div.php");
//
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
   
    })

})(jQuery);
