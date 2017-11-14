;(function($){
        $(function(){
            $("#isheader").load("../index.html #header");

            //轮播图
            // var i=1;
            // var setimg=setInterval(function(){
            //      $("#banner").css({
            //         "background-image":"url(../img/banner"+i+".jpg)"
            //      })

            //         i++;
            //         if(i>5){
            //             i=1;
            //         }
            //             console.log(666);
            // },2000) 
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
                    this.index=index;
                    var width=this.ele[0].offsetWidth;
                    var ul=$("<ul/>").css({
                               "height":this.ele[0].offsetHeight+"px",
                                "width":this.ele[0].offsetWidth*this.obj.img.length+"px",
                                "position":"absolute",
                                "top":0,
                                "left":0
                                
                    });
                    
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

                      this.move(ul,index);
                      
                       this.dotted(index,ul,width);
                },
                move(ul,index,width){
                    clearInterval(this.seter);
                    this.seter=setInterval(function(){
                      
                        ul.animate({
                            left:-index*this.ele[0].offsetWidth
                        })    
                        this.dotted(index,ul,width); 
                        index++;
                        if(index>=5){
                            index=0;
                        }

                    }.bind(this),3000)
                     this.stop(index,ul);
                     

                },
                stop(index,ul,width){
                   
                    this.ele.on("mouseover","li",function(){
                        clearInterval(this.seter);
                         this.play(ul,index,width);
                    }.bind(this))
                       
                   
                },
                play(ul,index,width){
                    clearInterval(this.seter);
                 this.ele.on("mouseout","li",function(){
                    console.log(66);
                    this.seter=setInterval(function(){

                        ul.animate({
                            left:-index*this.ele[0].offsetWidth
                        })    
                        this.dotted(index,ul,width); 
                        index++;
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
                        this.stop(ul,index,width)
                   }.bind(this))
                }

            }

            new Lunbotu($("#banner"),{
                    img:["../img/banner1.jpg","../img/banner2.jpg","../img/banner3.jpg","../img/banner4.jpg","../img/banner5.jpg"]
            }).init();
        })
}(jQuery));