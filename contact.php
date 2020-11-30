<?php 
$ToEmail = 'sales@westroad.in'; 
$EmailSubject = 'Westroad Contact Form'; 
$mailheader = "From: ".$_POST["email"]."\r\n"; 
$mailheader .= "Reply-To: ".$_POST["email"]."\r\n"; 
$mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
$MESSAGE_BODY = "<br><br>Name: ".$_POST["name"]."<br>"; 
$MESSAGE_BODY .= "Mobile: ".$_POST["mobile"]."<br>"; 
$MESSAGE_BODY .= "Email: ".$_POST["email"]."<br>"; 
$MESSAGE_BODY .= "Message: ".nl2br($_POST["message"])."<br>"; 
if(mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader))
{
    header( 'Location: http://westroad.in/'); 
}
else
    echo "Failure"; 
?>
