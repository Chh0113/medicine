<?php
	
	//连接数据库
	include 'connect.php';
	
	//接收数据
	$name=isset($_GET['username']) ? $_GET['username'] : 'ch';
	$psw=isset($_GET['psw']) ? $_GET['psw'] : '123456';
	
	//写查询语句
	$sql="SELECT * FROM user WHERE `username`='$name' and `password`='$psw'";
	
	//执行：内部编译
	$res=$conn->query($sql);//结果集
	
//	var_dump($res);
	
	if($res->num_rows>0){
		echo 'yes';//用户名密码都正确，可以登陆
	}else{
		echo 'no';//不正确，不可以登陆
	}
?>