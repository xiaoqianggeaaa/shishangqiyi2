<?php
        include'connect.php';
        $user=isset($_GET["user"])?$_GET['user']:"";
        if($user!=""){
          
             $sql="select * from myuser where user='$user'";

        
            $result=$conn->query($sql);
            $arr=$result->fetch_all(MYSQLI_ASSOC);

            $arr=json_encode($arr,JSON_UNESCAPED_UNICODE);
            echo $arr;
        }
?>