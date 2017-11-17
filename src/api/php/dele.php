<?php
    include'connect.php';
    $id=isset($_GET['id'])?$_GET['id']:"";

    if($id!=""){
        $sql="delete from myuser where id='$id'";
        $result=$conn->query($sql);
        
    }
?>