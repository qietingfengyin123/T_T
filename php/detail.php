<?php  
	
	include "conn.php";
	if(isset($_GET['sid'])){
		$id=$_GET['sid'];
	
	
	$result=mysql_query("select * from lecuntaopic where sid='$id' ");
	
	$list=mysql_fetch_array($result,MYSQL_ASSOC);
	
	echo json_encode($list);
}
?>