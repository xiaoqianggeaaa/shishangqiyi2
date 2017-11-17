$(function(){
            //引入页面内容
            $('#container').load('../index.html #div_left').css({
                "width":"164px"
            });
            $("#isfooter").load("../index.html #footer");
            $("#isheader").load("../index.html #header");

        //获取cookie，看看有没有用户登录
       
    var thecookie=document.cookie.split("=");
    if(thecookie[0]=="user"){
        $(".carp1").html("欢迎您的到来，"+thecookie[1]);


        //发送ajax请求，获取该用户的信息
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
                            console.log(datalist);
                    $('#shopcar').html("");
            if(Array.isArray(datalist)){
                    datalist.forEach(function(item){
                            var theul=$('<ul/>').addClass('iscarul').attr({
                                "idx": item.id
                            });
                            //第一个li
                            $('<li>').addClass('iscarli1').append($('<input/>').addClass('carinput').attr({
                                    "type":"checkbox",
                                    "checked":"checked"
                            })).appendTo(theul);
                            //第二个li
                            var theli= $('<li>').addClass('iscarli2');
                                console.log(item.imgurl);
                                $('<div/>').addClass('car_img').css({
                                        "background-image":"url(../"+item.imgurl+")"
                                }).appendTo(theli);
                                var thediv=$('<div/>').addClass('carli_div');
                                $('<p/>').html(item.English).appendTo(thediv);
                                $('<p/>').append($('<span/>').html(item.color)).append($('<span/>').html("/"+item.chicun)).appendTo(thediv);
                                $('<p/>').addClass('iconfont').append($('<span/>').addClass('icon-fangdajing')).append($('<span/>').addClass('icon-xin')).append($('<span/>').addClass('icon-cha').addClass('deleit')).appendTo(thediv);
                                thediv.appendTo(theli);
                                theli.appendTo(theul);

                            //第三个li
                            $('<li/>').html("[0% / 瑪瑙会员] :"+item.priced).addClass('iscarli3').appendTo(theul);
                            //第四个li 
                            $('<li/>').addClass('iscarli4').html('￥'+4*item.thecount).appendTo(theul);
                            //第五个li
                            $('<li/>').addClass('iscarli5').append($('<span/>').addClass('addp').html("+")).append($('<span/>').addClass('iscout').html(item.thecount)).append($('<span/>').addClass('lowp').html("-")).appendTo(theul);
                            //第六个li
                            $('<li/>').addClass('thesum').html("￥"+item.thecount*item.priced.slice(5)).appendTo(theul);

                            theul.appendTo($('#shopcar'));


                            })
                        }

                //全选和其他操作
        var checkboxs=document.querySelectorAll("input[type='checkbox']");
                $("#carcheck").on("click",function(){
                    if( $("#carcheck")[0].checked){
                        checkboxs.forEach(function(item){
                                item.checked=true;
                        })
                    }else{
                      checkboxs.forEach(function(item){
                                item.checked=false;
                        })
                    }
                })

            //count增加与减少
            //
                 var pay=0;
                 var low=0;
                 $(".thesum").each(function(idx,item){
                    pay+=Number(item.innerHTML.slice(1));
                    low+=Number($(".iscarli4")[idx].innerHTML.slice(1));
                 })
                $('.carsum').html("￥"+pay);
                $('.carlow').html("￥"+low);
                console.log(pay-low);
                var carpayit=pay-low;
                $('.carpay').html("￥"+carpayit);

                //---------------------
           
            $(".addp").on("click",function(e){
              var price=$(this).parent().parent().children('.iscarli3').html().slice(-3);

                   var a=$(this).parent().children()[1].innerHTML;
                   a++;
                $(this).parent().children()[1].innerHTML=a;
                 $(this).parent().parent().children('.thesum').html("￥"+price*a);
               $(this).parent().parent().children('.iscarli4').html("￥"+a*4);
                 var pay=0;
                 var low=0;
                 $(".thesum").each(function(idx,item){
                    pay+=Number(item.innerHTML.slice(1));
                    low+=Number($(".iscarli4")[idx].innerHTML.slice(1));
                 })
                $('.carsum').html("￥"+pay);
                $('.carlow').html("￥"+low);
                 var carpayit=pay-low;
                $('.carpay').html("￥"+carpayit);
               
            })
           $(".lowp").on("click",function(){
                var price=$(this).parent().parent().children('.iscarli3').html().slice(-3);
                   var a=$(this).parent().children()[1].innerHTML;
                   a--;
                   if(a<0){
                    a=0;
                   }
                 $(this).parent().children()[1].innerHTML=a;
                 $(this).parent().parent().children('.thesum').html("￥"+price*a);
                                  $(this).parent().parent().children('.iscarli4').html("￥"+a*4);
                 var pay=0;
                 var low=0;
                 $(".thesum").each(function(idx,item){
                    pay+=Number(item.innerHTML.slice(1));
                    low+=Number($(".iscarli4")[idx].innerHTML.slice(1));
                 })
                $('.carsum').html("￥"+pay);
                $('.carlow').html("￥"+low);
                 var carpayit=pay-low;
                $('.carpay').html("￥"+carpayit);
               
            })
           //删除商品操作
           $(".deleit").on('click',function(){

                var id=$(this).parent().parent().parent().parent().attr('idx');
                
                $(this).parent().parent().parent().parent().remove();
                 $('.carsum').html("￥0");
                $('.carlow').html("￥0");
                $('.carpay').html("￥0");

                 thedele("dele.php",'id',id);


           })

              })
      }
            getinformation("getusercar.php",thecookie[1]);

                                //发送ajax请求，获取该用户的信息
             function thedele(thephp,obj,val){
                    console.log(thephp);
             $.get("http://localhost:1706//project/src/api/php/"+thephp+"?"+obj+"="+val,function(data){
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


    }

})