<?php
    header("Access-Control-Allow-Origin:*");
        $user=isset($_GET["user"])?$_GET["user"]:"";
        $password=isset($_GET["password"])?$_GET["password"]:"";
        $writeit=isset($_GET["writeit"])?$_GET["writeit"]:"";

        $url="../../json/user.json";
         $file=fopen($url,'r');
        $html=fread($file,filesize($url));
        $arr=$html;
        $html=json_decode($html,true);
        
        fclose($file);
        $queue = array();
    if($user!=""&&$writeit==""){
             
 
           
           foreach($html as $key=>$val){
                if($key==$user){
                    echo $val;  

                }
                
          
           }
            
    }else{
        if($password!=""){
                    //遍历创建新的数组
      foreach($html as $thekey=>$theval){
            $queue = array($thekey=>$theval) + $queue;

           }
         $queue=array($user=>$password)+$queue;
         $queue=json_encode($queue,JSON_UNESCAPED_UNICODE);
         
            
    //写进文件
        $isfile=fopen($url,"w");
        fwrite($isfile, $queue);
        }else{
            echo $arr;
        }

    }
?>