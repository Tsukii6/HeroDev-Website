<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h1>Company Stuff</h1>
    <a class="btn btn-primary" href="./create.php" role="button">New Client</a>
    <br>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Address</td>
          <td>Created At</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <?php
        $servername = "sql104.infinityfree.com";
        $username = "if0_37960595";
        $password  = "R4VIt0x5ZCW9nrw";
        $database = "if0_37960595_clients";

        // Create Connection
        $connection = new mysqli($servername, $username, $password, $database);

        // Check connection 
        if ($connection->connect_error) {
          die("Connection failed: ". $connection->connect_error);
        }

        // read all row from database table
        $sql = "SELECT * FROM clients";
        $result = $connection->query($sql);

        if (!$result) {
          die("Invalid query: ". $connection->error);
        }

        // read data of each row
        while ($row = $result->fetch_assoc()) {
          echo `
          <tr>
            <td>$row[id]</td>
            <td>$row[name]</td>
            <td>$row[email]</td>
            <td>$row[phone]</td>
            <td>$row[address]</td>
            <td>$row[created_at]</td>
            <td>
              <a class="btn btn-primary btn-sm" href="./includes/update.php?id=$row[id]">Edit</a>
              <a class="btn btn-primary btn-sm" href="./includes/delete.php?id=$row[id]">Delete</a>
            </td>
        </tr>
          `;
        }
        ?>
        
      </tbody>
    </table>
  </div>
</body>
</html>