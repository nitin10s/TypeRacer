<?php
if(isset($_POST['submit']))
{
if (!defined('DB_HOST')) define('DB_HOST','localhost');
if (!defined('DB_USER')) define('DB_USER','root');

if (!defined('DB_NAME')) define('DB_NAME','user');

//$con=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) or die("Failed to connect to MySQL: " .     mysql_error());
//$db=mysql_select_db(DB_NAME,$con) or die("Failed to connect to MySQL: " . mysql_error());
$con=mysqli_connect("localhost","root","","user");// Check connection
//if (mysqli_connect_error($con)) echo "Failed to connect to MySQL: " ; 


$userName = $_POST['username'];
$password =  $_POST['password'];
$name=$_POST['name'];
$emailid=$_POST['email'];
$phone =$_POST['phone'];
$query = "INSERT INTO users (username,name,phone,emailid,password) VALUES ('$userName','$name','$phone','$emailid','$password')";
$data = mysqli_query ($con,$query) or die(mysqli_error($con));
if($data) echo "YOUR REGISTRATION IS COMPLETED...";

else echo "Unknown Error!";

}
?>
