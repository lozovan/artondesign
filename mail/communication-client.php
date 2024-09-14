<?php
$to = "arton.interior.design@gmail.com";
$tema = "Форма Зворотній звязок";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$comments = trim($_POST["comments"]);
$message = "Ім'я: $name \n\r Телефон: $phone \n\r Повідомлення: $comments"; 
mail($to, $tema, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $to");
?>