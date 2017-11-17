<?php
    include'connect.php';

    //存取用户信息
    $user=isset($_GET['user'])?$_GET['user']:"";
    $password=isset($_GET['password'])?$_GET['password']:"";
    $username=isset($_GET['username'])?$_GET['username']:"";
    $sex=isset($_GET['sex'])?$_GET['sex']:"";
 
    $phone=isset($_GET['phone'])?$_GET['phone']:"";
    //写入数据库
    if($user!=""){
        $password=md5($password);
        $sql="insert into usernews(user,password,username,sex,phone)values('$user','$password','$username','$sex','$phone')";
        $result=$conn->query($sql);
        if($result){
            echo "ok";
        }else{
            $mysql="select * from usernews where user='$user'";
            $res=$conn->query($mysql);
            if($res){
                $arr=$res->fetch_all(MYSQLI_ASSOC);
                $arr=json_encode($arr,JSON_UNESCAPED_UNICODE);
                echo $arr;
            
            }else{
                echo $conn->error;
            }
        }
    }
    



?>