requirejs.config({
    paths:{
    jQuery: "jquery-3.2.1",
}
});
requirejs(['jQuery'],function(){
    requirejs(['conmon','calendar'],function(){
        
            requirejs(['input','qiehuan','index','user',],function(){
                requirejs(['through','cookie']);
            });
     
    })
})