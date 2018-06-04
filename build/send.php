<?
    if ((isset($_POST['name']) && $_POST['name'] != "") && (isset($_POST['email']) && $_POST['email'] != "")&& (isset($_POST['url']) && $_POST['url'] != "") && (isset($_POST['message']) && $_POST['message'] != "")) { //Проверка отправилось ли наше поля name и не пустые ли они
            $to = 'stasumanskiy@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
            $subject = 'Shakefactory'; //Загаловок сообщения
            $message = '
                    <html>
                        <head>
                            <title>'.$subject.'</title>
                        </head>
                        <body>
                            <p>Name: '.$_POST['name'].'</p>
                            <p>Email: '.$_POST['email'].'</p>                       
                            <p>Website: '.$_POST['url'].'</p>                       
                            <p>Message: '.$_POST['message'].'</p>                     
                        </body>
                    </html>'; //Текст нашего сообщения можно использовать HTML теги
            $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
            $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
            mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
        }
?>