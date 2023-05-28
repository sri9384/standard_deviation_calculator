<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

function calculateStandardDeviation($numbers) {
  $n = count($numbers);

  if ($n === 0) {
    return 0;
  }

  $mean = array_sum($numbers) / $n;
  $variance = 0;

  foreach ($numbers as $number) {
    $variance += pow($number - $mean, 2);
  }

  $stdDeviation = sqrt($variance / $n);

  return round($stdDeviation,4);
}

$jsonPayload = file_get_contents('php://input');
$data = json_decode($jsonPayload, true);
$numbers_str = $data['numbers'];
$numbers = explode(",",$numbers_str);
$standardDeviation = calculateStandardDeviation($numbers);

// Return the result as a JSON response
header('Content-Type: application/json');
echo json_encode(['standardDeviation' => $standardDeviation]);
?>
