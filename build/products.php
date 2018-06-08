<?php require_once('class.phpmailer.php');
        
        error_reporting(E_STRICT);

        $mail = new PHPMailer();
        $mail->SetFrom($_POST['email'], $_POST['name']);
        $mail->AddReplyTo($_POST['email'], $_POST['name']);
        $mail->Subject = "Request Quote";

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
        
        $mail->AddAddress("info@shakerfactory.com", "Shakerfactory");

        /* auto reply */
        $mreply = new PHPMailer();      
        $mreply->SetFrom("info@shakerfactory.com", "Shakerfactory");        
        $mreply->AddReplyTo("info@shakerfactory.com", "Shakerfactory");     
        $mreply->Subject = "Shakerfactory Request Received!";       
        $mreply->MsgHTML("Thanks for your inquiry! We'll contact you shortly to learn more and answer any questions you might have.<br><br>Best Regards,<br>The Shakerfactory Team");       
        $mreply->AddAddress($_POST['email'], $_POST['name']);
        $mreply->Send();        

        if(!$mail->Send()) {
          echo "Error: " . $mail->ErrorInfo;
        } else {
          echo "Complete";
        }
        
?>