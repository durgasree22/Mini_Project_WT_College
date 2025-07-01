<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "register";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch email and password from the form
$email = $_POST['email'];
$password = $_POST['password'];

// Query to check if user exists
$query = "SELECT * FROM registerform WHERE email='$email' AND password='$password'";
$result = mysqli_query($conn, $query);
$count = mysqli_num_rows($result);

if ($count > 0) {
    // Redirect to the dashboard page upon successful login
    header("Location: dashboard.html");
    exit();
} else {
    echo "Login failed";
}
?>
