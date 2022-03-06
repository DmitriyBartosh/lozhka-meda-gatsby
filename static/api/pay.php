<?php

require 'yookassa-sdk/lib/autoload.php';

$_POST = json_decode(file_get_contents('php://input'), true);

$service = $_POST['service_name'];
$price = $_POST['service_price'];

use YooKassa\Client;

$client = new Client();
$client->setAuth(, "");
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

echo $confirmationUrl;

?>