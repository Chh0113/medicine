<?php
	include 'connect.php';
	
	$id=isset($_GET['id']) ? $_GET['id'] : '';
	$name=isset($_GET['name']) ? $_GET['name'] : '';
	$bs=isset($_GET['bs']) ? $_GET['bs'] : '';
	$qua=isset($_GET['qua']) ? $_GET['qua'] : '';
	$images=isset($_GET['images']) ? $_GET['images'] : '';
	$price=isset($_GET['price']) ? $_GET['price'] : '';
	
	$sql="SELECT *FROM `cart` WHERE id='$id' AND name='$name'";
	
	$res=$conn->query($sql);
	
//	var_dump($res);
	
	if($res->num_rows>0){
		$sql1="UPDATE cart SET qua=qua+$qua WHERE id=$id;";
		$res1=$conn->query($sql1);
	}else{
		$sql1="insert into cart(id,name,price,qua,images,bs) values('$id','$name','$price','$qua','$images','$bs')";
		$res1=$conn->query($sql1);
	}
	if($res1){
		echo '插入成功';
	}else{
		echo '插入失败';
	}
?>