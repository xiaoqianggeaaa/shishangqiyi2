$(function(){
    var mycookie=document.cookie.split('=');

    if(mycookie[0]=="user"){
      $("#showit").css({
            "display":"none"
      }).before($('<a/>').html("我的账户").attr({
                "href":"#"
      }).addClass('showit'));
      //退出按钮
     $("#showit1").css({
            "display":"none"
      }).before($('<a/>').html("退出").attr({
                "href":"#"
      }).addClass('showit1'));

      //设定一个定时器，延迟获取元素时间
      setTimeout(function(){
        //进入用户界面的功能
                if($(".showit")){
                    $(".showit").on("click",function(){
                        console.log(666);
                    })
                }


        //退出当前登陆的功能
            if($('.showit1')){
                $(".showit1").on('click',function(){
                    var date=new Date();
                    date.setDate(date.getDate()-20);
                    console.log(date);
                    document.cookie="user="+mycookie[1]+";expires="+date.toString()+";path=/";
                    location.reload();
                    
                })
            }
      },500)

    }


})