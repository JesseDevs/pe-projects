<?php include('functions.php'); ?>

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
    <header class='site-header'>
        <inner-column>

            <?php
            include('templates/modules/site-menu/template.php'); 
            ?>
        </inner-column>
    </header>
    
    <main class="page-content">

        <?php

        if ($pageId == 'home') { // home page
            include('templates/pages/home.php');
        }

        if ($pageId == 'projects') { // list page
            include('templates/pages/projects.php');
        }

        if ($pageId == 'project') { //detail page
            include('templates/pages/project.php');
        }
        ?>
    </main>

</body>

</html>

