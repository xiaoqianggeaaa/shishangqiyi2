


        //third_div操作
      function the_third(thephp){
                console.log(thephp);
              $.get("http://localhost:1706//project/src/api/php/"+thephp+"?third_div=xxx",function(data){
                      try{
                          var datalist=JSON.parse(data);
                      }catch(e){
                          try{
                              var datalist=eval("("+data+")");
                          }catch(err){
                              var datalist=data;
                          }
                      }

                      //处理数据
                      //转为jquery对象并遍历
                      $(datalist).each(function(idx,item){
                              var isthediv=$('<div/>');
                              if((idx+1)%4===0){
                                  isthediv.addClass('_left');
                              }

                         isthediv.append($('<img/>').attr('src',item.imgurl)).appendTo('.the_third_div');

                          isthediv.append( $('<p/>').html(item.title));
                        

                             $('<p/>').append($('<a/>').attr("href","#").html(item.style)).appendTo(isthediv);
                             $('<p/>').append($('<a/>').attr("href","#").html(item.English)).appendTo(isthediv);

                           $('<p/>').append($('<span/>').html(item.priced)).append($('<span/>').html(item.price)).appendTo(isthediv);
                         

                      })
              });
        } 

    //thrid1_div操作
    function the_third1(thephp){
           $.get("http://localhost:1706//project/src/api/php/"+thephp+"?third_div=xxx",function(data){
                try{
                    var datalist=JSON.parse(data);
                }catch(e){
                    try{
                        var datalist=eval("("+data+")");
                    }catch(err){
                        var datalist=data;
                    }
                }

                //处理数据
                //转为jquery对象并遍历
                $(datalist).each(function(idx,item){
                        var isthediv=$('<div/>');
                        if((idx+1)%4===0){
                            isthediv.addClass('_left');
                        }

                   isthediv.append($('<img/>').attr('src',item.imgurl)).appendTo('.the_third1_div');

                    isthediv.append( $('<p/>').html(item.title));
                  

                       $('<p/>').append($('<a/>').attr("href","#").html(item.style)).appendTo(isthediv);
                       $('<p/>').append($('<a/>').attr("href","#").html(item.English)).appendTo(isthediv);

                     $('<p/>').append($('<span/>').html(item.priced)).append($('<span/>').html(item.price)).appendTo(isthediv);
                   
                })
        });
    }

    //fourth_div
       //fourth div 操作
                //third_div操作
    function the_fourth(thephp){
        console.log(thephp);
        $.get("http://localhost:1706//project/src/api/php/"+thephp+"?fourth_div=xxx",function(data){
                try{
                    var datalist=JSON.parse(data);
                }catch(e){
                    try{
                        var datalist=eval("("+data+")");
                    }catch(err){
                        var datalist=data;
                    }
                }

                //处理数据
                //转为jquery对象并遍历
                $(datalist).each(function(idx,item){
                    var thediv=$('<div/>');
                    if((idx+1)%4===0){
                        thediv.addClass('_left');
                    }
                 thediv.append($('<img/>').attr('src',item.imgurl)).appendTo('.the_fourth_div');


                 var thep=$('<p/>');
                 if(item.hot){
                    thep.append($('<span/>').html('HOT!').addClass('_isspan'));
                    
                 }
                 thep[0].innerHTML+='WEEKLY!';
                 $(thep).appendTo(thediv);
                   $('<p/>').append($('<a/>').attr("href","#").html(item.style)).appendTo(thediv);
                   $('<p/>').append($('<a/>').attr("href","#").html(item.English)).appendTo(thediv);

                 $('<p/>').append($('<span/>').html(item.priced)).append($('<span/>').html(item.price)).appendTo(thediv);


                })
        });
    }
         //Best操作
    function the_Best(thephp){
        console.log(thephp);
        $.get("http://localhost:1706//project/src/api/php/"+thephp+"?Best=xxx",function(data){
                try{
                    var datalist=JSON.parse(data);
                }catch(e){
                    try{
                        var datalist=eval("("+data+")");
                    }catch(err){
                        var datalist=data;
                    }
                }

                //处理数据
                //转为jquery对象并遍历
                $(datalist).each(function(idx,item){
                    var thediv=$('<div/>');
                    if((idx+1)%4===0){
                        thediv.addClass('_left');
                    }
                 thediv.append($('<img/>').attr('src',item.imgurl)).appendTo('.theBest');


                 var thep=$('<p/>');
                 if(item.hot){
                    thep.append($('<span/>').html('HOT!').addClass('_isspan'));
                    
                 }
                 thep[0].innerHTML+='WEEKLY!';
                 $(thep).appendTo(thediv);
                   $('<p/>').append($('<a/>').attr("href","#").html(item.style)).appendTo(thediv);
                   $('<p/>').append($('<a/>').attr("href","#").html(item.English)).appendTo(thediv);

                 $('<p/>').append($('<span/>').html(item.priced)).append($('<span/>').html(item.price)).appendTo(thediv);


                })
        });
    }

             //Arrivals操作
    function Arrivals(thephp){
        console.log(thephp);
        $.get("http://localhost:1706//project/src/api/php/"+thephp+"?Best=xxx",function(data){
                try{
                    var datalist=JSON.parse(data);
                }catch(e){
                    try{
                        var datalist=eval("("+data+")");
                    }catch(err){
                        var datalist=data;
                    }
                }

                //处理数据
                //转为jquery对象并遍历
                $(datalist).each(function(idx,item){
                    var thediv=$('<div/>');
                    if((idx+1)%4===0){
                        thediv.addClass('_left');
                    }
                 thediv.append($('<img/>').attr('src',item.imgurl)).appendTo('.Arrivals');


                 var thep=$('<p/>');
                 if(item.hot){
                    thep.append($('<span/>').html('HOT!').addClass('_isspan'));
                    
                 }
                 thep[0].innerHTML+='WEEKLY!';
                 $(thep).appendTo(thediv);
                   $('<p/>').append($('<a/>').attr("href","#").html(item.style)).appendTo(thediv);
                   $('<p/>').append($('<a/>').attr("href","#").html(item.English)).appendTo(thediv);

                 $('<p/>').append($('<span/>').html(item.priced)).append($('<span/>').html(item.price)).appendTo(thediv);


                })
        });
    }
   function isweekly(thephp){
        console.log(thephp);
        $.get("http://localhost:1706//project/src/api/php/"+thephp+"?Best=xxx",function(data){
                try{
                    var datalist=JSON.parse(data);
                }catch(e){
                    try{
                        var datalist=eval("("+data+")");
                    }catch(err){
                        var datalist=data;
                    }
                }

                //处理数据
                //转为jquery对象并遍历
                $(datalist).each(function(idx,item){
                    var thediv=$('<div/>');
                    if((idx+1)%4===0){
                        thediv.addClass('_left');
                    }
                 thediv.append($('<img/>').attr('src',item.imgurl)).appendTo('.weekly');


                 var thep=$('<p/>');
                 if(item.hot){
                    thep.append($('<span/>').html('HOT!').addClass('_isspan'));
                    
                 }
                 thep[0].innerHTML+='WEEKLY!';
                 $(thep).appendTo(thediv);
                   $('<p/>').append($('<a/>').attr("href","#").html(item.style)).appendTo(thediv);
                   $('<p/>').append($('<a/>').attr("href","#").html(item.English)).appendTo(thediv);

                 $('<p/>').append($('<span/>').html(item.priced)).append($('<span/>').html(item.price)).appendTo(thediv);


                })
        });
    }
    //多属性动画函数
              function animate(ele,obj,callback){
                    //定义一个值，来计算传入属性的数量
                    var index=0;
                    for(var attr in obj){
                        index++;
                        //没遍历一个属性，执行一次函数，并把属性传入函数
                        theanimate(attr);
                        
                    }
                    //动画函数，为了生成块级作用域
                    function theanimate(attr){

                        //创建定时器的名称
                        var thetimer=attr+'timer';
                        //清除定时器
                        clearInterval(ele[thetimer]);
                        //目标值
                        var thevalue=obj[attr];

                        //创建定时器
                    ele[thetimer]=setInterval(function(){
                        //获取当前对象传入属性的当前值
                            var current=getComputedStyle(ele)[attr];
                        //通过正则获取单位，注意分组，在这个方法中，分多少个就会多返回多少个分组中的元素
                        //比如var a=23DDFKFF12;
                        // a.match(/(\d)([a-z]*)\d$/); 返回的数组是 arr=['23DDFKFF12',23,'DDFKFF'];
                            var item=current.match(/\d([a-z]*)$/);
                                //判断item是不是null,如果不是就获取单位
                                item=item?item[1]:'';
                            //通过parseFloat()方法对current提取数字，parseInt（）也可以
                            current=parseFloat(current);
                            if(attr!='opacity'){current=parseInt(current);}
                        //对速度进行获取
                        var speed=(thevalue-current)/10;
                        //判断传入属性是不是opacity,因为opacity的值在1以内
                        if(attr=='opacity'){
                            speed=speed>0?0.01:-0.01;
                        }else{
                            speed=speed>0?Math.ceil(speed):Math.floor(speed);
                        }
                        //判断当前值是否达到目标值
                        if(current===thevalue){
                            //达到目标值，清除定时器
                            clearInterval(ele[thetimer]);
                            //重置current
                            current=thevalue-speed;
                            //执行完一次动画减一次index
                            index--;
                            //判断回调函数，如果有则执行，并且在前面的动画都执行完后
                            if(typeof callback=='function'&&index==0) callback();
                        }
                        

                        //更改样式
                        ele.style[attr]=current+speed+item;
                       
                    },30)
                }
            }
