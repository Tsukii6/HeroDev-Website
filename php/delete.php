<?php
if (isset($_GET["id"])) {
    $id = $_GET["id"];
    $servername = "localhost";
    $username = "root";
    $password  = "";
    $database = "myCompany";
    
    // Create Connection
    $connection = new mysqli($servername, $username, $password, $database);

    $sql = "DELETE FROM clients WHERE id=$id";
    $connection->query($sql);
}

header("location: ./index.php");
exit;