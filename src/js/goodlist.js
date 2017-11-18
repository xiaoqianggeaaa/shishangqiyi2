$(function(){



            $("#isheader").load("../index.html #header");
            $('#container').load("../index.html #div_left").css({
                "width":"148px"
            });
            $("#isfooter").load("../index.html #footer");
            var theimg;
            var thepriced;
            var English;
            var id;
            //判断页面有没有传参
          if(location.search!=""){
            var arr=location.search.slice(1).split("&&");
            var arr1=arr[0].split("=");
            var arr2=arr[1].split("=");

                var theidx=arr1[1];
                if(String(Number(theidx))=="NaN"){
                  theidx=theidx.slice(2);
                
                }
                theidx=theidx%12;
                if(theidx==0){
                    theidx=12;
                }

            //初始化详情页
            for(var i=0;i<6;i++){
                for(var j=1;j<=2;j++){
                    $('<div/>').css({
                        "background-image":"url(../img/xianq"+theidx+"-"+j+".jpg)"
                    }).addClass('imgshow').appendTo('#imgit');
                }
            }
            goods('get.php');
          }

          //服务器请求函数
          function goods(thephp){
                console.log(thephp);
              $.get(`http://localhost:1706//project/src/api/php/${thephp}?${arr1[0]}=${arr1[1]}&&${arr2[0]}=${arr2[1]}`,function(data){
                      try{
                          var datalist=JSON.parse(data);
                      }catch(e){
                          try{
                              var datalist=eval("("+data+")");
                          }catch(err){
                              var datalist=data;
                          }
                      }
                      var obj=datalist[0];
                      console.log(obj);
                      theimg=obj.imgurl;
                      thepriced=obj.price;
                      English=obj.English;
                      id=obj.id;
                      $(".isnews_img").css({
                        "background-image":"url(../"+obj.imgurl+")"
                      })
                      $('.mation_p1').html(obj.English);
                       $('.mation_p2').html(obj.style);
                       $('.priced').html(obj.priced);
                       $('.price').html(obj.price);

      
              });
         
            

        }
        


         //判断用户是否登录，没登录则弹出登录框
         //
         var goodscookie=document.cookie.split("=");
          $(".car").on("click",function(){
           
                     if(goodscookie[0]==='user'){
                              if($('.selection').val()=="请选择颜色"){
                                  alert("请选择颜色");
                                }
                           else if($(".selection1").val()=="请选择尺寸"){
                                alert("请选择尺寸");
                           }else if($(".counts").val()==0){
                              alert("数量不能为0");
                           }else{
                                var color=$('.selection').val();
                                var chicun=$(".selection1").val();
                                var thecount=$(".counts").val();
                                var user=goodscookie[1];
                                thedeng("goodlist.php",theimg,user,color,chicun,thecount,thepriced,English,id);

                              //商品飞入购物车效果
                              $('<div/>').addClass('flycar').css({
                                  "background-image" : "url(../"+theimg+")"
                              }).appendTo($('.isnew_mation')).animate({
                                    "top":0,
                                    left: -262
                              },function(){
                                  $('.flycar').animate({
                                      top:281,
                                      left:172,
                                      width:0,
                                      height:0

                                  },function(){
                                      $('.flycar').remove();
                                  })
                              });
                           }

                         }
                          else{
                            $("#isbackground").fadeIn();
                            $("#myform").fadeIn();
                         }
        })

        //商品数量的添加与减少
        $('#addit').on("click",function(){
              $('.counts')[0].value++;
        })
        $("#lowit").on("click",function(){
              $('.counts')[0].value--;
              if($('.counts')[0].value<0){
                      $('.counts')[0].value=0;
              }
        })

      //AJAX请求
                //将购物信息写入数据库
     function thedeng(thephp,theimg,user,color,chicun,thecount,priced,English,id){
            console.log(id);
        $.get("http://localhost:1706//project/src/api/php/"+thephp+"?imgurl="+theimg+"&&user="+user+"&&color="+color+"&&chicun="+chicun+"&&thecount="+thecount+"&&priced="+priced+"&&English="+English+"&&id="+id,function(data){
                try{
                    var datalist=JSON.parse(data);
                }catch(e){
                    try{
                        var datalist=eval("("+data+")");
                    }catch(err){
                        var datalist=data;
                    }
                }


              })
      }
})