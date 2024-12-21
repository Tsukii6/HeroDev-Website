<?php
// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $searchValue = $_POST['search_field']; // Get the submitted value

    // Database connection
    $conn = new mysqli('localhost', 'your_username', 'your_password', 'your_database');
    if ($conn->connect_error) {
        die('Connection failed: ' . $conn->connect_error);
    }

    // Query to fetch data based on user input
    $sql = "SELECT * FROM your_table WHERE column_name LIKE '%$searchValue%'";
    $result = $conn->query($sql);

    // Display results in an XHTML-compliant table
    echo '<!DOCTYPE html>';
    echo '<html xmlns="http://www.w3.org/1999/xhtml">';
    echo '<head><title>Search Results</title></head>';
    echo '<body>';

    if ($result->num_rows > 0) {
        echo '<table border="1">';
        echo '<thead>';
        echo '<tr><th>ID</th><th>Name</th></tr>';
        echo '</thead>';
        echo '<tbody>';
        while ($row = $result->fetch_assoc()) {
            echo '<tr>';
            echo '<td>' . htmlspecialchars($row['id']) . '</td>';
            echo '<td>' . htmlspecialchars($row['name']) . '</td>';
            echo '</tr>';
        }
        echo '</tbody>';
        echo '</table>';
    } else {
        echo '<p>No results found.</p>';
    }

    echo '</body>';
    echo '</html>';

    $conn->close();
}
?>
