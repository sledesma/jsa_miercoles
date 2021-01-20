<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php
    if($_GET['productId']) {
        echo '<b>Detalle del producto: '.$_GET['productId'].'</b>';
    }
    ?>

</body>
</html>