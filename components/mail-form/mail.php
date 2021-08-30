<?php
$destino= "svenebal@gmail.com"
$name = $_POST["name"];
$mail = $_POST["mail"];
$phone = $_POST["phone"];
$comment = $_POST["comment"];
$content= "Nombre: " . $name . "\nCorreo: " . $mail . "\nTelefono: " . $phone . "\nMensaje: " . $comment;

mail($destino,"Contacto",$content);