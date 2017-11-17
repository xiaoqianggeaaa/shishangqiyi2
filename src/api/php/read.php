<?php
    include'connect.php';

    //获取json字符串
    $url="../../json/Best.json";
    $file=fopen($url,'r');
    $html=fread($file,filesize($url));
    fclose($file);
    $arr=$html;
         
    $arr=json_decode($arr,true);

   
    // var_dump($arr);
    //循环遍历把数据写入数据库
        foreach($arr as $key=>$val){
            $a=$key+1;
           //写入数据库
           
           $sql="insert into best(id,imgurl,title,style,English,priced,price) values ('$a','$val[imgurl]','$val[title]','$val[style]','$val[English]','$val[priced]','$val[price]')";
                 $result=$conn->query($sql);
         
        }

            if($result){
                      echo "ok";
                 }
                    else{
                    echo "Error". $sql ."<br/>".$conn->error;
             }
    // $sql="insert into goodslist(id,imgurl,title,style) values ('2','../img/first_img1.png','xxXXX','xxx')";

    // $sql="select * from goodslist where id=1";
   

    // $result->close();
    // $arr = $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr);

?>