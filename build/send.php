<?php require_once('class.phpmailer.php');
                
    error_reporting(E_STRICT);
    
    $mail = new PHPMailer();
    $mail->SetFrom($_POST['email'], $_POST['name']);
    $mail->AddReplyTo($_POST['email'], $_POST['name']);
    $mail->Subject = "Contact From";

    $name = $_POST['name'];
    $email = $_POST['email'];
    $company = $_POST['website'];
    $message = $_POST['message'];
    
    $htm = "Name : ".$name."<br />";
    $htm .= "Email : ".$email."<br />";
    $htm .= "Company : ".$company."<br />";
    $htm .= "Message : ".$message."<br />";
    
    $mail->MsgHTML($htm);
    
    $mail->AddAddress("info@shakerfactory.com", "Shakerfactory");

    /* auto reply */
    $mreply = new PHPMailer();      
    $mreply->SetFrom("info@shakerfactory.com", "Shakerfactory");        
    $mreply->AddReplyTo("info@shakerfactory.com", "Shakerfactory");     
    $mreply->Subject = "Shakerfactory Contact";     
    $mreply->MsgHTML("Thanks for your inquiry, we will get back to you shortly.");      
    $mreply->AddAddress($_POST['email'], $_POST['name']);
    $mreply->Send();        

    if(!$mail->Send()) {
      echo "Error: " . $mail->ErrorInfo;
    } else {
      echo "Complete";
    }
?>
