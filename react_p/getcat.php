<?php 
include("db.php");
header("Access-Control-Allow-Origin: http://localhost:3000");

$sel="SELECT * FROM categories";
$rs=$con->query($sel);
$arr=[];
while($row=$rs->fetch_assoc()){
	$arr[]=$row;
}
echo json_encode($arr);