<?php
         header("Access-Control-Allow-Origin:*");
    $Best=isset($_GET["Best"])?$_GET["Best"]:"";
    if($Best!=""){
             $url="../../json/Best.json";
            $file=fopen($url,'r');
            $html=fread($file,filesize($url));
            fclose($file);
            echo $html;
            
    }else{
        echo "";
    }

?>