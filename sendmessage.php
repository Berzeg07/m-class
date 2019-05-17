<?php
$to = "test@yandex.ru";
$name = $_POST['m-uname'];
$phone = $_POST['m-phone'];
$email = $_POST['m-email'];
$text = $_POST['m-text'];




// Формирование заголовка письма
$subject  = "Новое сообщение";
$headers  = "From: info@starlight.space" . "\r\n";
$headers .= "Reply-To: info@starlight.space".  "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body>";
$msg .= "<h2>Новое сообщение</h2>\r\n";
$msg .= "<p><strong>dsdffg:</strong> ".$name."</p>\r\n";
$msg .= "<p><strong>dffg:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>dffg:</strong> ".$email."</p>\r\n";
$msg .= "<p><strong>dffg:</strong> ".$text."</p>\r\n";

$msg .= "</body></html>";


// отправка сообщения
@mail($to, $subject, $msg, $headers);
?>
