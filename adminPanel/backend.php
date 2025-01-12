<?php
header('Content-Type: application/json');

// Database connection
$servername = "localhost";
$username = "u418297519_mytreeofskills";
$password = "r4FRzY84/X";
$dbname = "u418297519_TreeOfSkills"; // Replace with your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed: " . $conn->connect_error]));
}

// Handle requests
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    $action = $_POST['action'];

    switch ($action) {
        case 'addAgeGroup':
            if (!empty($_POST['name'])) {
                $name = $conn->real_escape_string($_POST['name']);
                $stmt = $conn->prepare("INSERT INTO age_groups (name) VALUES (?)");
                $stmt->bind_param("s", $name);

                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Age group added successfully."]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Failed to add age group."]);
                }
                $stmt->close();
            }
            break;

        case 'deleteAgeGroup':
            if (!empty($_POST['id'])) {
                $id = intval($_POST['id']);
                $stmt = $conn->prepare("DELETE FROM age_groups WHERE id = ?");
                $stmt->bind_param("i", $id);

                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Age group deleted successfully."]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Failed to delete age group."]);
                }
                $stmt->close();
            }
            break;

        case 'addSubject':
            if (!empty($_POST['name']) && !empty($_POST['age_group_id'])) {
                $name = $conn->real_escape_string($_POST['name']);
                $ageGroupId = intval($_POST['age_group_id']);
                $stmt = $conn->prepare("INSERT INTO subjects (name, age_group_id) VALUES (?, ?)");
                $stmt->bind_param("si", $name, $ageGroupId);

                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Subject added successfully."]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Failed to add subject."]);
                }
                $stmt->close();
            }
            break;

        case 'deleteSubject':
            if (!empty($_POST['id'])) {
                $id = intval($_POST['id']);
                $stmt = $conn->prepare("DELETE FROM subjects WHERE id = ?");
                $stmt->bind_param("i", $id);

                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Subject deleted successfully."]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Failed to delete subject."]);
                }
                $stmt->close();
            }
            break;

        case 'addCourse':
            if (!empty($_POST['name']) && !empty($_POST['subject_id'])) {
                $name = $conn->real_escape_string($_POST['name']);
                $subjectId = intval($_POST['subject_id']);
                $stmt = $conn->prepare("INSERT INTO courses (name, subject_id) VALUES (?, ?)");
                $stmt->bind_param("si", $name, $subjectId);

                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Course added successfully."]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Failed to add course."]);
                }
                $stmt->close();
            }
            break;

        case 'deleteCourse':
            if (!empty($_POST['id'])) {
                $id = intval($_POST['id']);
                $stmt = $conn->prepare("DELETE FROM courses WHERE id = ?");
                $stmt->bind_param("i", $id);

                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Course deleted successfully."]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Failed to delete course."]);
                }
                $stmt->close();
            }
            break;

        case 'addStage':
            if (!empty($_POST['name']) && !empty($_POST['course_id'])) {
                $name = $conn->real_escape_string($_POST['name']);
                $courseId = intval($_POST['course_id']);
                $stmt = $conn->prepare("INSERT INTO stages (name, course_id) VALUES (?, ?)");
                $stmt->bind_param("si", $name, $courseId);

                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Stage added successfully."]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Failed to add stage."]);
                }
                $stmt->close();
            }
            break;

        case 'deleteStage':
            if (!empty($_POST['id'])) {
                $id = intval($_POST['id']);
                $stmt = $conn->prepare("DELETE FROM stages WHERE id = ?");
                $stmt->bind_param("i", $id);

                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Stage deleted successfully."]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Failed to delete stage."]);
                }
                $stmt->close();
            }
            break;

        case 'addDetails':
            if (!empty($_POST['details']) && !empty($_POST['stage_id'])) {
                $details = $conn->real_escape_string($_POST['details']);
                $stageId = intval($_POST['stage_id']);
                $stmt = $conn->prepare("INSERT INTO stage_details (details, stage_id) VALUES (?, ?)");
                $stmt->bind_param("si", $details, $stageId);

                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Details added successfully."]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Failed to add details."]);
                }
                $stmt->close();
            }
            break;

        default:
            echo json_encode(["status" => "error", "message" => "Invalid action."]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action'])) {
    $action = $_GET['action'];

    switch ($action) {
        case 'getAgeGroups':
            $result = $conn->query("SELECT * FROM age_groups");
            echo json_encode($result->fetch_all(MYSQLI_ASSOC));
            break;

        case 'getSubjects':
            if (!empty($_GET['age_group_id'])) {
                $ageGroupId = intval($_GET['age_group_id']);
                $result = $conn->query("SELECT * FROM subjects WHERE age_group_id = $ageGroupId");
                echo json_encode($result->fetch_all(MYSQLI_ASSOC));
            }
            break;

        case 'getCourses':
            if (!empty($_GET['subject_id'])) {
                $subjectId = intval($_GET['subject_id']);
                $result = $conn->query("SELECT * FROM courses WHERE subject_id = $subjectId");
                echo json_encode($result->fetch_all(MYSQLI_ASSOC));
            }
            break;

        case 'getStages':
            if (!empty($_GET['course_id'])) {
                $courseId = intval($_GET['course_id']);
                $result = $conn->query("SELECT * FROM stages WHERE course_id = $courseId");
                echo json_encode($result->fetch_all(MYSQLI_ASSOC));
            }
            break;

        default:
            echo json_encode(["status" => "error", "message" => "Invalid action."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request."]);
}

$conn->close();
?>
