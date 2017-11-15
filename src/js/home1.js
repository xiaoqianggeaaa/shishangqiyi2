requirejs.config({
    paths:{
    jQuery: "jquery-3.2.1",
}
});
requirejs(['jQuery'],function(){
    requirejs(['conmon'],function(){
        requirejs(['index1'],function(){
              requirejs(['input','qiehuan1','user']);
     
        })
          
    })
})