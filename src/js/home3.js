requirejs.config({
    paths:{
    jQuery: "jquery-3.2.1",
}
});
requirejs(['jQuery'],function(){
    
        
            requirejs(['goodlist','conmon'],function(){

                requirejs(['input','qiehuan1','user'],function(){
                    requirejs(['cookie']);
                });
            });
     
   
})