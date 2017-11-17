;(function($){
    $(function(){
      var istheman=location.search;

      if(istheman){
          $('.thefirst1').css({
                "border-color":"#E4E4E4"
            });
             $('.thefirst2').css({
                "border-color":"#A1CAE8"
            });
                
               $(".the_third_div").html("");
               $(".the_third1_div").html("");
               $(".the_fourth_div").html("");
            isman();
      }
      function isman(){

                     $('.first_div_r>div').each(function(idx,item){
                              $(this).css({
                                  backgroundImage: "url(img/n_first_img"+(idx+3)+".gif)"
                              });
                          })

                       $(".first_div_l div").eq(0).css({
                              "background-image":"url(img/n_first_img1.jpg)"
                       });
                        $(".first_div_l div").eq(1).css({
                              "background-image":"url(img/n_first_img2.gif)"
                       });

                //second_div_img操作
                  $('.second_div>div').each(function(idx){
                          $(this).css({
                                backgroundImage: "url(img/n_second_img"+(idx+1)+".jpg)"  
                          })
                      });

                                  //thrid_div
                              $(".the_third_div").html("");
                               $(".the_third1_div").html("");
                               $(".the_fourth_div").html("");
                              the_third("n_third_div.php");
                                the_third1("n_third_div.php");
                                the_fourth("n_fourth_div.php");

      }

  $(".nav").on("click","span",function(){
           //fristdiv_img操作
           //
           $(".nav span").css({
                   "border-color":"#F1F1F1"
           })
           //判断点击的盒子
         if($(this).hasClass('thefirst2')){
                  location.href="index.html?xxx";
                  console.log(666);
                    $(this).prev().css({
                        "border-color":"#A1CAE8"
                    })
                 $('.first_div_r>div').each(function(idx,item){
                        $(this).css({
                            backgroundImage: "url(img/n_first_img"+(idx+3)+".gif)"
                        });
                    })

                 $(".first_div_l div").eq(0).css({
                        "background-image":"url(img/n_first_img1.jpg)"
                 });
                  $(".first_div_l div").eq(1).css({
                        "background-image":"url(img/n_first_img2.gif)"
                 });

      //second_div_img操作
        $('.second_div>div').each(function(idx){
            $(this).css({
                  backgroundImage: "url(img/n_second_img"+(idx+1)+".jpg)"  
            })
        });

                    //thrid_div
                $(".the_third_div").html("");
                 $(".the_third1_div").html("");
                 $(".the_fourth_div").html("");
                the_third("n_third_div.php");
                  the_third1("n_third_div.php");
                  the_fourth("n_fourth_div.php");
       }else if($(this).hasClass('thefirst1')){
                //换色
                 location.href="index.html";
                   $(this).prev().css({
                                    "border-color":"#FF5F6E"
                                })
                  $('.first_div_r>div').each(function(idx,item){
                                $(this).css({
                                    backgroundImage: "url(img/first_img"+(idx+3)+".gif)"
                                });
                            })
                  $(".first_div_l div").eq(0).css({
                                "background-image":"url(img/first_img1.jpg)"
                         });
                   $(".first_div_l div").eq(1).css({
                                "background-image":"url(img/first_img2.jpg)"
                         });
                    //second_div_img操作
               $('.second_div>div').each(function(idx){
                        $(this).css({
                              backgroundImage: "url(img/second_div"+(idx+1)+".jpg)"  
                        })
                    });
                $(".the_third_div").html("");
                 $(".the_third1_div").html("");
                 $(".the_fourth_div").html("");
                the_third("third_div.php");
                  the_third1("third_div.php");
                  the_fourth("fourth_div.php");

       }else if($(this).hasClass('thefirst3')){
                //换色
                   $(this).prev().css({
                        "border-color":"#C9B8F1"
                    })
            location.href='http://localhost:1706/project/src/html/index1.html';
       }


      })
    })
})(jQuery);