<?php
    header("Access-Contorl-Allow-Origin:*");
    //数据库链接
    $conn= new mysqli("localhost","root","","theproject");

    //检测是否连接成功
    if($conn->connect_errno){
        die('连接失败'.$conn->connect_errno);
    }
    $conn->set_charset('utf8');
?>