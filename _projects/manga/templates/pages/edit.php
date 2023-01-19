<?php

$currentManga = '';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $currentManga = getMangaById($id);
}



//open the database and retrieve the mangas
$mangas = getMangas()["mangas"];

?>

<section class="form">
    <inner-column>
        <?php
        include("templates/modules/edit/template.php");
        ?>
    </inner-column>
</section>

<section class="display-manga">
    <inner-column>
        <?php
        include("templates/modules/detail-card/template.php");
        ?>
    </inner-column>
</section>