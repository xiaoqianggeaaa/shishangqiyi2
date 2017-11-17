requirejs.config({
    paths:{
    jQuery: "jquery-3.2.1",
}
});
requirejs(['jQuery'],function(){
    
        
            requirejs(['car','conmon'],function(){

                requirejs(['input','qiehuan1','user'],function(){
                    requirejs(['cookie']);
                });
            });
     
   
});