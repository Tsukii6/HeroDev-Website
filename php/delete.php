<?php
if (isset($_GET["id"])) {
    $id = $_GET["id"];
    $servername = "sql104.infinityfree.com";
    $username = "if0_37960595";
    $password  = "R4VIt0x5ZCW9nrw";
    $database = "if0_37960595_clients";
    
    // Create Connection
    $connection = new mysqli($servername, $username, $password, $database);

    $sql = "DELETE FROM clients WHERE id=$id";
    $connection->query($sql);
}

header("location: ./index.php");
exit;