<?php require_once('class.phpmailer.php');
        
    error_reporting(E_STRICT);

    $mail = new PHPMailer();
    $mail->SetFrom($_POST['email'], $_POST['name']);
    $mail->AddReplyTo($_POST['email'], $_POST['name']);
    $mail->Subject = "Inquiry ".$_POST['vendor'];

    $name = $_POST['name'];
    $email = $_POST['email'];
    $productname = $_POST['vendor'];
    $quantity = $_POST['state'];
    $company = $_POST['website'];
    $message = $_POST['message'];
    
    $htm = "Vendor Code : ".$productname."<br />";
    $htm .= "Name : ".$name."<br />";
    $htm .= "Email : ".$email."<br />";
    $htm .= "Quantity : ".$quantity."<br />";
    $htm .= "Company : ".$company."<br />";
    $htm .= "Message : ".$message."<br />";
    
    $mail->MsgHTML($htm);
    
    $mail->AddAddress("stasumanskiy@gmail.com", "Shakerfactory");

    /* auto reply */
    $mreply = new PHPMailer();      
    $mreply->SetFrom("stasumanskiy@gmail.com", "Shakerfactory");        
    $mreply->AddReplyTo("stasumanskiy@gmail.com", "Shakerfactory");     
    $mreply->Subject = "Shakerfactory Request Received!";       
    $mreply->MsgHTML("Thanks for your inquiry, we shall get back to you within one working day.");       
    $mreply->AddAddress($_POST['email'], $_POST['name']);
    $mreply->Send();        

    if(!$mail->Send()) {
      echo "Error: " . $mail->ErrorInfo;
    } else {
      echo "Complete";
    }
        
?>