<?php
    include'connect.php';
        $user=isset($_GET['user'])?$_GET['user']:"";
        $color=isset($_GET['color'])?$_GET['color']:"";
        $chicun=isset($_GET['chicun'])?$_GET['chicun']:"";
        $thecount=isset($_GET['thecount'])?$_GET['thecount']:"";
        $imgurl=isset($_GET['imgurl'])?$_GET['imgurl']:"";
        $priced=isset($_GET['priced'])?$_GET['priced']:"";
        $English=isset($_GET['English'])?$_GET['English']:"";
        $id=isset($_GET['id'])?$_GET['id']:"";

   
        //判断用户是否为空，不为空执行下面代码
        if($user!=""){
            $sql="insert into myuser(user,color,chicun,thecount,imgurl,priced,English,id) values ('$user','$color','$chicun','$thecount','$imgurl','$priced','$English','$id')";
           
            $result=$conn->query($sql);

            if($result){
                echo "ok";
            }else{
                  
                  $mysql="select * from myuser where id='$id'";
                  $rse=$conn->query($mysql);
                  $arr=$rse->fetch_all(MYSQLI_ASSOC);
                  
                  if($rse){
                     $cout=$arr[0]['thecount'];
                     $cout+=$thecount;
                     //改数据
                     $issql="update myuser set thecount='$cout' where id='$id'";
                     $aa=$conn->query($issql);
                    
                  }else{
                    echo "no";
                  }
            }
        }

?>