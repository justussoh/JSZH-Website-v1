<?php

if (isset($_POST["submit"])) {
	$name = $_POST["name"];
	$subject = $_POST["subject"];
	$email = $_POST["email"];
	$message = $_POST["message"];

	$mailTo = "justus.soh@jszh.me";
	$headers = "From: ".$email;
	$txt = "You have an message from ".$name.".\n\n".$message;

	mail($mailTo, $subject, $txt, $headers);
	header("Location: index.html?mailsend");

}

?>