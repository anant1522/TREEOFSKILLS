<?php
// Database connection details
$servername = "localhost"; // Change if needed
$username = "u418297519_mytreeofskills";
$password = "r4FRzY84/X";
$dbname = "u418297519_TreeOfSkills";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $center = $_POST['center'];
    $childName = $_POST['childName'];
    $gender = $_POST['gender'];
    $age = $_POST['age'];
    $parentName = $_POST['parentName'];
    $address = $_POST['address'];
    $mobile1 = $_POST['mobile1'];
    $mobile2 = $_POST['mobile2'] ?? null;

    // Sanitize inputs to prevent SQL Injection
    $center = $conn->real_escape_string($center);
    $childName = $conn->real_escape_string($childName);
    $gender = $conn->real_escape_string($gender);
    $age = intval($age);
    $parentName = $conn->real_escape_string($parentName);
    $address = $conn->real_escape_string($address);
    $mobile1 = $conn->real_escape_string($mobile1);
    $mobile2 = $conn->real_escape_string($mobile2);

    // Insert data into database
    $sql = "INSERT INTO registrations (center, child_name, gender, age, parent_name, address, mobile1, mobile2) 
            VALUES ('$center', '$childName', '$gender', $age, '$parentName', '$address', '$mobile1', '$mobile2')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
