<?php
require '../dbconfig.php';

$sql = "SELECT * FROM user";
$result = $mysqli->query($sql);

while($row = $result->fetch_assoc()){
    $json[] = $row;
}

$data['data'] = $json;
$result = mysqli_query($mysqi.$sql);
echo json_encode($data);
?>