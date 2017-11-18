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
        //判断用户名与密码是否正确
       
        if($password!=""&&$username==""){
            $mysql="select * from usernews where user='$user'";
            $res=$conn->query($mysql);
            if($res){
                $arr=$res->fetch_all(MYSQLI_ASSOC);

                // $arr=json_encode($arr,JSON_UNESCAPED_UNICODE);
                if(count($arr)!=0){
                    $pas=$arr[0]['password'];
                    $password=md5($password);
                    //判断密码是否符合
                    if($pas!=$password){
                        echo "error";
                    }else{
                        echo "permit";
                    }
                }else{
                    echo "";
                }
            
            }else{
                echo $conn->error;
            }
        }
        //判断是否写入数据库
        else if($password!=""&&$username!=""){

                 $password=md5($password);
                 $sql="insert into usernews(user,password,username,sex,phone)values('$user','$password','$username','$sex','$phone')";
                 $result=$conn->query($sql);

                         if($result){
                                          echo "ok";
                                 }else{
                                     echo $conn->error;

                                 }
        }
        //判断是否存在该用户名
        else{
            $insql="select * from usernews where user='$user'";
            $theresult=$conn->query($insql);
            if($theresult){
                $arrs=$theresult->fetch_all(MYSQLI_ASSOC);
                //如果找不到，用户不存在
                if(count($arrs)==0){
                        echo "noexsit";
                    }else{
                        echo "exsit";
                    }
            }else{
                echo $conn->error;
            }
        }


    }
    



?>