<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit();
}

require_once __DIR__ . '/phpmailer/Exception.php';
require_once __DIR__ . '/phpmailer/PHPMailer.php';
require_once __DIR__ . '/phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$body = json_decode(file_get_contents('php://input'), true);

$service     = isset($body['serviceselect']) ? htmlspecialchars(trim($body['serviceselect'])) : '';
$orderDetail = isset($body['orderDetail'])   ? htmlspecialchars(trim($body['orderDetail']))   : '';
$name        = isset($body['name'])          ? htmlspecialchars(trim($body['name']))          : '';
$phone       = isset($body['phone'])         ? htmlspecialchars(trim($body['phone']))         : '';
$message     = isset($body['message'])       ? htmlspecialchars(trim($body['message']))       : '';

if (empty($name) || empty($phone) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit();
}

// ─── Настройки ───────────────────────────────────────────────
$fromEmail    = 's.lozhkameda@yandex.ru';
$fromName     = 'Сайт — Уведомление';
$smtpPassword = '';

$recipients = [
    'kapuz2008@mail.ru',
];
// ─────────────────────────────────────────────────────────────

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.yandex.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = $fromEmail;
    $mail->Password   = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($fromEmail, $fromName);

    foreach ($recipients as $recipient) {
        $mail->addAddress($recipient);
    }

    $mail->isHTML(true);
    $mail->Subject = 'Новая заявка с сайта' . ($service ? ': ' . $service : '');
    $mail->Body =
        "<html>
        <body style='font-family: Arial, sans-serif; font-size: 14px; color: #333;'>
            <h2 style='color: #444;'>Новая заявка с сайта</h2>
            <table cellpadding='8' cellspacing='0' border='0' style='border-collapse: collapse; width: 100%; max-width: 500px;'>
                " . ($service ? "<tr>
                    <td style='background:#f5f5f5; font-weight:bold; width:40%;'>Услуга</td>
                    <td>{$service}</td>
                </tr>" : "") . "
                " . ($orderDetail ? "<tr>
                    <td style='background:#f5f5f5; font-weight:bold;'>Детали заказа</td>
                    <td>{$orderDetail}</td>
                </tr>" : "") . "
                <tr>
                    <td style='background:#f5f5f5; font-weight:bold;'>Имя</td>
                    <td>{$name}</td>
                </tr>
                <tr>
                    <td style='background:#f5f5f5; font-weight:bold;'>Телефон / соц. сети</td>
                    <td>{$phone}</td>
                </tr>
                <tr>
                    <td style='background:#f5f5f5; font-weight:bold;'>Комментарий</td>
                    <td>{$message}</td>
                </tr>
            </table>
        </body>
        </html>";

    $mail->AltBody = "Новая заявка с сайта\n"
        . ($service     ? "Услуга: {$service}\n"     : '')
        . ($orderDetail ? "Детали: {$orderDetail}\n" : '')
        . "Имя: {$name}\n"
        . "Контакт: {$phone}\n"
        . "Комментарий: {$message}";

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $mail->ErrorInfo]);
}
