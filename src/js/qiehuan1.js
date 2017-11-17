$(function(){
    $('.thefirst1').css({
        "border-color":"#E4E4E4"
    });

    $('.thefirst3')[0].style.borderColor="#C9B8F1";

    $('.ismyul').on('click','span',function(e){
            if($(e.target).hasClass('thefirst1')){
                location.href="http://localhost:1706/project/src/index.html";
            }
    })

    $('.ismyul').on('click','span',function(e){
            if($(e.target).hasClass('thefirst2')){
                location.href="http://localhost:1706/project/src/index.html?xxx";
            }else if($(e.target).hasClass('thefirst3')){
           location.href="http://localhost:1706/project/src/html/index1.html?xxx";
            }
    })
})