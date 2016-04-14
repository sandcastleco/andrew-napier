<?php
// Capture the information from the contact form. This gets loaded when the form is submitted.
$field_name = $_POST['name_input'];
$field_email = $_POST['email'];
$field_message = $_POST['message'];

// Set who gets the email and what the message subject is
$mail_to = 'kevin@sandcastle.co';
$subject = 'Hay Andrew, you got a message from ' . $field_name . ' on your website.';

// Set the body of the email
$body_message = 'From: '.$field_name."\n";
$body_message .= 'Email: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

// Set the from and reply to addressed of the email
$headers = "From: ".$field_email."\r\n";
$headers .= "Reply-To: ".$field_email."\r\n";

// Send the email
$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
  <script language="javascript" type="text/javascript">
  	window.location = '/thank-you';
  </script>
<?php
} else { ?>
<script language="javascript" type="text/javascript">
	alert('Message failed.');
	window.location = '/contact';
</script>
<?php
}?>
