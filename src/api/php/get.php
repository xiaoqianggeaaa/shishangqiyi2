<?php
    include 'connect.php';
    $id=isset($_GET['id'])?$_GET['id']:"";
    $div=isset($_GET['div'])?$_GET['div']:"";

    if($id!=""&&$div!=""){
        $sql="select * from $div where id=$id";
       
        $result=$conn->query($sql);
        $arr=$result->fetch_all(MYSQLI_ASSOC);
        $arr=json_encode($arr,JSON_UNESCAPED_UNICODE);
        echo $arr;
    }
?>