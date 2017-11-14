<?php
     header("Access-Control-Allow-Origin:*");
    $third_div=isset($_GET["third_div"])?$_GET["third_div"]:"";
    if($third_div!=""){
             $url="../../json/n_third_div.json";
            $file=fopen($url,'r');
            $html=fread($file,filesize($url));
            fclose($file);
            echo $html;
            
    }else{
        echo "";
    }
?>