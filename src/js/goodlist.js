$(function(){

            $("#isheader").load("../index.html #header");
            $('#container').load("../index.html #div_left").css({
                "width":"148px"
            });
            $("#isfooter").load("../index.html #footer");

            var arr=location.search.slice(1).split("&&");
            var arr1=arr[0].split("=");
            var arr2=arr[1].split("=");

                var theidx=arr1[1];
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
                      $(".isnews_img").css({
                        "background-image":"url(../"+obj.imgurl+")"
                      })
                      $('.mation_p1').html(obj.English);
                       $('.mation_p2').html(obj.style);
                       $('.priced').html(obj.priced);
                       $('.price').html(obj.price);

      
              });

        }
        goods('get.php');
})