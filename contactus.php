<?php
if(!$_POST) exit;

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$name     = $_POST['name'];
$mobile   = $_POST['mobile'];

if($name!='' && $mobile!='')
{
$address = "info@palettetowers.oyorooms.com";
$email = "info@palettetowers.oyorooms.com";

$e_subject = 'You\'ve been contacted by ' . $name . '.';

$e_body = "Hi Team,\r\n You have been contacted by ".$name.".\r\n\r\n";
$e_reply = "You can contact $name via phone ".$mobile.".\r\n\r\n Thanks";

$msg = wordwrap( $e_body . $e_reply, 70 );

$headers = "From: $email" . PHP_EOL;
$headers .= "Reply-To: $email" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

@mail($address, $e_subject, $msg, $headers);
}