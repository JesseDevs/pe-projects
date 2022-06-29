<?php echo $_SERVER['REQUEST_URI'] ?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>[[insert Title]]</title>
    <meta name='description' content="[[Insert description]]">
    <meta property="og:image" content="images/default-meta.png">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="css/style.css">

</head>

<body>


    <?php

    $page = null;

    if (isset($_GET["page"])) {
        $page = htmlspecialchars_decode($_GET["page"]); // url?page = string
    } else {
        $page = "home"; // default
    }

    ?>


    <header>
        <?php include('modules/site-menu/index.php'); ?>

    </header>

    <main>
        <inner-column>
            <?php
            if ($page == "home") {
                include("modules/home/index.php");
            }
            if ($page == "detail") {
                include("modules/fighter-detail/detail.php");
            }
            ?>
        </inner-column>
    </main>


    <footer>
        <?php include('modules/site-footer/index.php'); ?>

    </footer>

</body>

</html>