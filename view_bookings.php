<?php
header('Content-Type: application/json; charset=UTF-8');

$xml_file = 'https://github.com/sarkobraadmin/sarkobarbershop/blob/main/bookings.xml';

if (file_exists($xml_file)) {
    $xml = simplexml_load_file($xml_file);
    $bookings = [];

    foreach ($xml->booking as $booking) {
        $bookings[] = [
            'name' => (string)$booking->name,
            'phone' => (string)$booking->phone,
            'barber' => (string)$booking->barber,
            'appointment_date' => (string)$booking->{'appointment-date'},
            'appointment_time' => (string)$booking->{'appointment-time'},
        ];
    }

    echo json_encode($bookings);
} else {
    echo json_encode([]);
}
?>
