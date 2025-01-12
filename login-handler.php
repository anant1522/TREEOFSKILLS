<?php
// Database connection details
$servername = "localhost";
$username = "u418297519_mytreeofskills";
$password = "r4FRzY84/X";
$dbname = "u418297519_TreeOfSkills";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle login submission
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $mobile1 = $_POST['mobile1'];

    // Sanitize input
    $mobile1 = $conn->real_escape_string($mobile1);

    // Check if mobile number exists
    $sql = "SELECT * FROM registrations WHERE mobile1 = '$mobile1'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "Login successful!";
    } else {
        http_response_code(401); // Unauthorized
        echo "Invalid mobile number.";
    }

    $conn->close();
}
?>
