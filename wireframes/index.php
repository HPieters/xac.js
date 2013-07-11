<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Xen Api Console</title>
    <style>
        html, body {
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
    <?php
        if($_GET['image']) {
            $image_title = $_GET['image'];
            echo  '<img src="'.$image_title.'@2x.png" with="1200" height="2000" />';
        } else {
            echo '<img src="notification@2x.png" with="1200" height="2000" />';
        }
    ?>
</body>
</html>