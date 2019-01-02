<?php
	
	header("content-type:text/html;charset=utf-8");
	
    include 'connect.php';
    
    $id = isset($_GET['id']) ? $_GET['id'] : '';
	
	$sql="SELECT *FROM xiangqinglist WHERE id=$id";

    $res=$conn->query($sql);

    $row=$res->fetch_all(MYSQLI_ASSOC);

	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>