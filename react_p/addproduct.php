<?php 
include("db.php");
header("Access-Control-Allow-Origin: http://localhost:3000");

$pname=$con->real_escape_string($_POST['pname']);
$pprice=$_POST['pprice'];
$cid=$_POST['cid'];

$fn=time().$_FILES['pimg']['name'];
$buf=$_FILES['pimg']['tmp_name'];

move_uploaded_file($buf, "product_img/".$fn);

$ins="INSERT INTO products SET pname='$pname',pprice='$pprice',pcat='$cid',pimg='$fn'";
$con->query($ins);
$arr=array(
	'msg'=>'Product inserted'
);
echo json_encode($arr);
?>