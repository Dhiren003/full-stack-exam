<?php
require_once 'config.php';

$conn = getDBConnection();

$categories_result = $conn->query("SELECT * FROM categories ORDER BY sort_order ASC, id ASC");
$categories = [];

while ($cat = $categories_result->fetch_assoc()) {
    $cat_id = (int)$cat['id'];
    $slides_stmt = $conn->prepare("SELECT * FROM slides WHERE category_id = ? ORDER BY sort_order ASC, id ASC");
    $slides_stmt->bind_param('i', $cat_id);
    $slides_stmt->execute();
    $slides_result = $slides_stmt->get_result();
    $cat['slides'] = [];
    while ($slide = $slides_result->fetch_assoc()) {
        $cat['slides'][] = $slide;
    }
    $categories[] = $cat;
}

echo json_encode($categories);
$conn->close();
