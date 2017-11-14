<?php
         header("Access-Control-Allow-Origin:*");
    $fourth_div=isset($_GET["fourth_div"])?$_GET["fourth_div"]:"";
    if($fourth_div!=""){
             $url="../../json/fourth_div.json";
            $file=fopen($url,'r');
            $html=fread($file,filesize($url));
            fclose($file);
            echo $html;
            
    }else{
        echo "";
    }

?>