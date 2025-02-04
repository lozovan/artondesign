<?php
$to = "arton.interior.design@gmail.com";
$tema = "Запит від клієнта";
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$comments = trim($_POST["comments"]);
$message = "Ім'я: $name \n\r \n\r Email: $email \n\r Телефон: $phone \n\r Повідомлення: $comments"; 
mail($to, $tema, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $to");
?>