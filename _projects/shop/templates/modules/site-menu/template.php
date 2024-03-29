<?php


$jsonData = file_get_contents("data/components/header.json");
$headerData = json_decode($jsonData, true);

?>

<header class='site-header'>
    <inner-column>

        <nav class='menu'>

            <div class='logo'>
                <?php include('images/logo.php'); ?>
            </div>
            <ul class='actions'>

                <?php foreach ($headerData['pages'] as $pageLinks) { ?>
                    <li><a href="<?= $pageLinks['link'] ?>"><?= $pageLinks['title'] ?> </a></li>

                <?php } ?>
            </ul>

            <ul class='login'>

                <?php if ($page !== 'template-three') { ?>
                    <li class='globe-icon'>
                        <?php include('images/globe.php') ?>
                        <span>EN</span>
                    </li>
                <?php } else { ?>
                    <li><a class='small-voice sign' href="#"><span>SignUp</span></a></li>
                <?php } ?>
                <li><a class='small-voice log' href="#"><span>LogIn</span></a></li>
            </ul>

            <div class="burger-container">
                <button class='toggle-burger' rel="toggle">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <nav class="burger">
                    <?php foreach ($headerData['pages'] as $pageLinks) { ?>
                        <a href="<?= $pageLinks['link'] ?>"><?= $pageLinks['title'] ?> </a>

                    <?php } ?>
                </nav>
            </div>

        </nav>


    </inner-column>
</header>