<?php
$_POST = json_decode(file_get_contents('php://input'), true);

$message = $_POST['telegram_message'];

$token = "5241062767:AAEmpZWh6CUh-Z1uxelNQWz89lwz1Nguh7o";
$chat_id = "-1001568454196";


$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}","r");
?>