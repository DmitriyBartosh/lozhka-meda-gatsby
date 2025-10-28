<?php
require 'yookassa-sdk/lib/autoload.php';

$_POST = json_decode(file_get_contents('php://input'), true);

$service = $_POST['service_name'];
$price = $_POST['service_price'];
$redirect_url = $_POST['redirect_url'];

$userPhone = $_POST['client_phone'] ?? '';
$companyEmail = "kapuz2008@mail.ru";

// Функция строгой проверки российского телефона
function isValidPhone($phone) {
    // Убираем все нецифровые символы
    $digits = preg_replace('/\D+/', '', $phone);

    // Российский формат: ровно 11 цифр, начинается с 7 или 8
    if (preg_match('/^[78]\d{10}$/', $digits)) {
        return true;
    }

    // Международный формат: + и 10-15 цифр после +
    if (preg_match('/^\+\d{11,15}$/', $phone)) {
        return true;
    }

    // Всё остальное — некорректно
    return false;
}

// Формируем customer в receipt
if (isValidPhone($userPhone)) {
    // Приводим к формату +7XXXXXXXXXX, если введена 8
    $digits = preg_replace('/\D+/', '', $userPhone);
    if (str_starts_with($digits, '8')) {
        $digits = '7' . substr($digits, 1);
    }
    $customerData = ['phone' => '+' . $digits];
} else {
    // Некорректный телефон → подставляем e-mail компании
    $customerData = ['email' => $companyEmail];
}


use YooKassa\Client;

$client = new Client();
$client->setAuth(, "live_");
$payment = $client->createPayment(
    array(
        'amount' => array(
            'value' => $price,
            'currency' => 'RUB',
        ),
        'confirmation' => array(
            'type' => 'redirect',
            'return_url' => $redirect_url,
        ),
        'capture' => true,
        'description' => $service,
        // 👇 ОБЯЗАТЕЛЬНЫЙ блок, если включён чек
        'receipt' => array(
            'customer' => $customerData,
            'items' => array(
                array(
                    'description' => $service,
                    'quantity' => '1.00',
                    'amount' => array(
                        'value' => $price,
                        'currency' => 'RUB',
                    ),
                    'vat_code' => 1, // чаще всего 1 — без НДС
		            'payment_subject' => "service",
		            'payment_mode' => "full_payment"
                )
            )
        ),
    ),
    uniqid('', true)
);

// Получаем ссылку на оплату
$confirmationUrl = $payment->getConfirmation()->getConfirmationUrl();

echo $confirmationUrl;

?>


