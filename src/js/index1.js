;(function($){
        $(function(){
            $("#isheader").load("../index.html #header");
            $("#footer").load("../index.html #footer");




            //轮播图
  
      function Lunbotu(ele,obj){
                var defalut={
                    img:[],
                    speed:3000,
                    shuiping:true,
                    button:true,
                    dotted:true
                }
                this.obj=Object.assign({},defalut,obj);
                this.ele=ele;
                this.index=0;

            }

     Lunbotu.prototype={
                "constructor" : Lunbotu,
                init(){
                    var index=0;
                    
                    
                    console.log(width);
                    var ul=$("<ul/>").css({
                               "height":this.ele[0].offsetHeight+"px",
                                "width":this.ele[0].offsetWidth*this.obj.img.length+"px",
                                "position":"absolute",
                                "top":0,
                                "left":0
                                
                    });
                    var width=ul.outerWidth()/this.obj.img.length;
                    
                        for(var i=0;i<this.obj.img.length;i++){
                            ul.append($("<li/>").css({
                                "height":this.ele[0].offsetHeight+"px",
                                "width":this.ele[0].offsetWidth+"px",
                                 "background-image":"url("+this.obj.img[i]+")"
                            }));
                        }
                        this.ele.append(ul);
                    //判断是否水平播放
                    if(this.obj.shuiping){
                       ul.children().css({
                        "float":"left"
                       }) 
                    }
                  
                  

                    if(this.obj.button){
                        $(".isback").css({
                            "display":"block"
                        })
                       $(".isnext").css({
                            "display":"block"
                        })
                    }
                    if(this.obj.dotted){
                           $(".isdotted").css({
                            "display":"block"
                        })
                    }
                    //默认第一个点黑色
                   $(".isdotted li").eq(0).css({
                        "background-color":"black"
                   })
                   $("#banner").mouseout(function(){
                        $(".isback").animate({
                                right: "-30px"
                            })
                             $(".isnext").animate({
                                left: "-30px"
                            })

                   })
                   $("#banner").mousemove(function(event) {
                         $(".isback").stop().animate({
                                right: "10px"
                            })
                             $(".isnext").stop().animate({
                                left: "10px"
                            })
                   });

                      this.move(ul,index);
                      this.stop();
                      this.play(ul,width,index);
                       this.dotted(index,ul,width);
                       this.isnext(ul,width);
                       this.isback(ul,width);
                },
                move(ul,index,width){
                    clearInterval(this.seter);
                    this.seter=setInterval(function(){
                         console.log(88);
                        animate({

                            left:-index*this.ele[0].offsetWidth
                        })    
                        this.dotted(index,ul,width); 
                        index++;
                        this.index=index-1;
                        if(index>=4){
                            index=0;
                        }

                    }.bind(this),3000)
                     this.stop(index,ul);
                     

                },
                stop(index,ul,width){
                   
                    this.ele.on("mouseenter","li",function(){
                        clearInterval(this.seter);
         
                         
                    }.bind(this))
                       
                   
                },
                play(ul,index,width){
                    var ul=ul;
                   index=this.index;
                   console.log(index);
                ul.on("mouseleave","li",function(){
                  
            
                        clearInterval(this.seter);

                    this.seter=setInterval(function(){
                        console.log(777);
                        ul.animate({
                            left:-index*this.ele[0].offsetWidth
                        })    
                        this.dotted(index,ul,width); 
                        index++;
                        this.index=index-1;

                        if(index>=5){
                            index=0;
                        }
                            
                    }.bind(this),3000)
                   }.bind(this))

                },
                dotted(index,ul,width){
                    
                    $(".isdotted li").css({
                        "background-color":""

                    })
                   $(".isdotted li").eq(index).css({
                        "background-color":"black"
                   })
                   //点击点时候切换图片
                   $(".isdotted").on("click","li",function(e){
                        $(".isdotted li").css({
                            "background":""
                        })

                        $(e.target).css({
                            "background":"black"
                        })
                        ul.css({
                            "left": -$(e.target).index()*width+"px"
                        })
                        
                        index=$(e.target).index();
                        this.index=index;
                        
                   }.bind(this))
                },
                //下一张图片
                isnext(ul,width){
                    $(".isnext").click(function(){
                        this.index--;
                        if(this.index<0){
                            this.index=4

                        }
                        ul.animate({
                            "left":-this.index*width+"px"
                        })
                          $(".isdotted li").css({
                            "background":""
                        }).eq(this.index).css({
                            "background":"black"
                        })

                        clearInterval(this.seter);
                       this.play(ul,width,this.index-1);
                    }.bind(this))
                },
                isback(ul,width){
                       $(".isback").click(function(){
                                this.index++;
                                console.log(66);
                                if(this.index>4){
                                    this.index=0;

                                }
                                ul.animate({
                                    "left":-this.index*width+"px"
                                })
                                  $(".isdotted li").css({
                                    "background":""
                                }).eq(this.index).css({
                                    "background":"black"
                                })

                                clearInterval(this.seter);
                               this.play(ul,width,this.index-1);
                            }.bind(this))
                }


            }

            new Lunbotu($("#banner"),{
                    img:["../img/banner1.jpg","../img/banner2.jpg","../img/banner3.jpg","../img/banner4.jpg","../img/banner5.jpg"]
            }).init();

            the_Best("Best.php");
           Arrivals("Best.php");
           isweekly("Best.php");

    //promotion
    $(".promotion_ul2 li").each(function(idx,item){
                $(this).css({
                "background":"url(../img/promotion2_"+(idx+1)+" ) no-repeat"
            })
    })
        })
}(jQuery));