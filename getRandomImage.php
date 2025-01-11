<?php
// Get the map and category from the URL parameters
$map = $_GET['map'] ?? '';
$category = $_GET['category'] ?? '';

// Define the base folder path
$baseFolderPath = "Maps";

// List of available maps (ensure this list is correct)
$allMaps = [
        'Ursprung', 'Bootcamp', 'Donner', 'Asylum', 'Anzio', 'Brittany', 'Casino', 'Hangar', 'Nezhit', 'Yards',
        'Cliffside', 'Flakturm', 'Gdansk', 'Nuketown', 'Station', 'Storm', 'Inferno', 'Meadows', 'Shimajiri' 
    ];

// Check if the map is valid, otherwise pick a random map
if (!in_array($map, $allMaps)) {
    // If the map is not in the valid list, pick a random map
    $map = $allMaps[array_rand($allMaps)];
}

// Define the folder path for the selected map and category
$folderPath = "$baseFolderPath/$map/$category";

// Check if the directory exists
if (is_dir($folderPath)) {
    // Get all image files (with valid extensions) in the folder
    $files = array_values(array_filter(scandir($folderPath), function($file) use ($folderPath) {
        return !is_dir("$folderPath/$file") && preg_match('/\.(jpg|jpeg|png|gif)$/i', $file);
    }));

    // If files are found, randomly pick one
    if (count($files) > 0) {
        $randomFile = $files[array_rand($files)];
        echo "$folderPath/$randomFile";  // Return the image path
    } else {
        http_response_code(404);
        echo 'No valid images found in the folder.';
    }
} else {
    http_response_code(404);
    echo 'Invalid folder path or map/category not found.';
}
?>
