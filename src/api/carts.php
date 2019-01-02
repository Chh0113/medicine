<?php
	include 'connect.php';
	
	$sql="SELECT * FROM cart";
	
	$res=$conn->query($sql);
	
	$data=$res->fetch_all(MYSQLI_ASSOC);
	
	$cart=array(
		'datalist'=>$data,//查询到的数据
	);
	
	echo json_encode($cart,JSON_UNESCAPED_UNICODE);
	
	$res->close();//关掉结果集
//	$res2->close();//关掉结果集
	$conn->close();//断开连接
	
//	var_dump($data);
?>