<?php

$host="localhost"; // Host name
$username="root"; // Mysql username
$password=""; // Mysql password
$db_name="user"; // Database name
$tbl_name="users"; // Table name

// Connect to server and select databse.
$con=mysqli_connect("$host", "$username", "$password","$db_name");

// username and password sent from form
$username=$_POST['username'];
$password=$_POST['password'];

// To protect MySQL injection (more detail about MySQL injection)
$username = stripslashes($username);
$password = stripslashes($password);
//$username = mysql_real_escape_string($username);
//$password = mysql_real_escape_string($password);
$sql="SELECT * FROM $tbl_name WHERE username='$username' and password='$password'";
$result=mysqli_query($con,$sql);
// Mysql_num_row is counting table row

// If result matched $username and $password, table row must be 1 row
$totalRows=0;
while($row = mysqli_fetch_array($result)){
  $totalRows++;
}
if ($totalRows==0) echo "Wrong Id or Password ";
else{
    session_start();
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $username;
    echo "Logged In";
}
?>
