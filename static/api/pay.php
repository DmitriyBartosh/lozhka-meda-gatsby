<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

require 'yookassa-sdk/lib/autoload.php';

$_POST = json_decode(file_get_contents('php://input'), true);

$service = $_POST['service_name'];
$price = $_POST['service_price'];

echo($service);
echo($price);

use YooKassa\Client;

$client = new Client();
$client->setAuth(886851, "test_WD-1ieN3hJEXNJdJnrSuQRy5UC-Y1u2WXZV2VJUrJm4");
$payment = $client->createPayment(
    array(
        'amount' => array(
            'value' => $price,
            'currency' => 'RUB',
        ),
        'confirmation' => array(
            'type' => 'redirect',
            'return_url' => 'https://lmmassage.ru/',
        ),
        'capture' => true,
        'description' => $service,
    ),
    uniqid('', true)
);

// Получаем ссылку на оплату
$confirmationUrl = $payment->getConfirmation()->getConfirmationUrl();

echo($confirmationUrl);
// Отправляем пользователя на страницу оплаты
header('Location: '.$confirmationUrl);

?>