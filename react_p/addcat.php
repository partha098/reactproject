<?php 
include("db.php");
header("Access-Control-Allow-Origin: http://localhost:3000");

$cname=$con->real_escape_string($_POST['cname']);

$ins="INSERT INTO categories SET cname='$cname'";
$con->query($ins);
$arr=array(
	'msg'=>'Category inserted'
);
echo json_encode($arr);
?>