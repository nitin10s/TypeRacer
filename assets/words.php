<?php
$con=mysqli_connect("localhost","root","","words");
$words=array();
$result = mysqli_query($con,"SELECT * FROM words order by rand()");
while($row = mysqli_fetch_array($result)){
		array_push($words, $row['name']);
}
?>
