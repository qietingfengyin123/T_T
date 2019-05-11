<?php
require "conn.php";

if(isset($_POST['name'])){//前端ajax传输过来的额
	$tel=$_POST['name'];
	$password=md5($_POST['pass']);
}else{
	exit('非法操作');
}

$query="select * from user where tel='$tel' and password='$password'";
$result=mysql_query($query);

if(mysql_fetch_array($result)){
	echo true;
}else{
	echo false;
}






	
	
