<?php
    include'connect.php';
    $id=isset($_GET['id'])?$_GET['id']:"";
    $user=isset($_GET['user'])?$_GET['user']:"";
    $add_time=isset($_GET['add_time'])?$_GET['add_time']:"";
    if($id!=""){
        $sql="delete from myuser where id='$id' and user='$user' and add_time='$add_time'";
        $result=$conn->query($sql);
        if($result){
            echo "ok";
        }else{
            echo $conn->error;
        }
        
    }

?>