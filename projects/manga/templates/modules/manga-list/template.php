<?php

// Get all the mangas and is in reverse order
$mangas = getMangas()['mangas'];


?>


<manga-list>
    <ul>
        <?php foreach ($mangas as $manga) { ?>

            <a href="?page=detail&id=<?= $manga['id'] ?>">LINK ME</a>
            <li><?= ucwords($manga['title']) ?></li>
            <li><?= ucwords($manga['author']) ?></li>
            <li><?= $manga['chapters'] ?></li>
            <li><?= $manga['id'] ?></li>

        <?php } ?>
    </ul>
</manga-list>