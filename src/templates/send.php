<?
    if ((isset($_POST['name']) && $_POST['name'] != "") && (isset($_POST['email']) && $_POST['email'] != "")) {
        $to = 'stasumanskiy@gmail.com';
        $subject = 'Shakefactory';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Name: '.$_POST['name'].'</p>
                        <p>Email: '.$_POST['email'].'</p>                       
                        <p>Website: '.$_POST['website'].'</p>                       
                        <p>Message: '.$_POST['message'].'</p>                     
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Отправитель <from@example.com>\r\n";
        mail($to, $subject, $message, $headers);
    }  
?>