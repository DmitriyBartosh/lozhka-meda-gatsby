<?php


require_once = __DIR__ . 'yookassa-sdk/lib/autoload.php'

$service = $_POST['service_name'];
$price = $_POST('service_price');

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
?>