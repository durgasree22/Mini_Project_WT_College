<?php
// Establish connection to MySQL database
$conn = mysqli_connect("localhost", "root", "", "register");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
session_start();

// SQL to create the 'registerform' table if it doesn't exist
$sql = "CREATE TABLE IF NOT EXISTS registerform (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)";

if (!mysqli_query($conn, $sql)) {
    echo "Error creating table: " . mysqli_error($conn);
}

// Retrieve form data
$username = mysqli_real_escape_string($conn, $_POST['username']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);
$confirm_password = mysqli_real_escape_string($conn, $_POST['confirm-password']);

// Ensure the passwords match before inserting
if ($password === $confirm_password) {
    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepare the insert query
    $sql = "INSERT INTO registerform (username, email, password) 
            VALUES ('$username', '$email', '$hashed_password')";

    if (mysqli_query($conn, $sql)) {
        // Redirect to dashboard page after successful registration
        header('Location: signup.html');
        exit();
    } else {
        echo "Error inserting data: " . mysqli_error($conn);
    }
} else {
    echo "Passwords do not match";
}

// Close the database connection
mysqli_close($conn);
?>
