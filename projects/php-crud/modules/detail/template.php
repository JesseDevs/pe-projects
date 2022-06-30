<?php include('../php-crud/data/fighter-data.php');

$chosenfighter = null;
$requested_id = null;

if (isset($_GET['id'])) {
    $requested_id = $_GET['id'];
}
// echo $requested_id; 
?>

<?php foreach ($fighters as $fighter) {
    if ($requested_id == $fighter['id']) {
        $chosenfighter = $fighter;
    }
}


?>
<section class='fighter-detail'>
    <inner-column>

        <?php if (isset($chosenfighter)) { ?>

            <h2 class=' attention-voice'>
                <?= $chosenfighter['name'] ?>
            </h2>
            <fighter-page class='detail'>


                <div class="container">
                    <picture class='portrait'>
                        <img src="<?= $chosenfighter['portrait'] ?>" alt="SFV:<?= $chosenfighter['name'] ?> ">
                    </picture>
                    <article-grid class='costumes'>
                        <?php foreach ($chosenfighter['costumes'] as $costumes) { ?>
                            <picture>
                                <img src="<?= $costumes ?>" alt=''>
                            </picture>
                        <?php } ?>
                    </article-grid>
                </div>

                <text-content>
                    <em class='calm-voice'><?= $chosenfighter['quote'] ?></em>

                    <audio controls>
                        <source src="<?= $chosenfighter['audio'] ?>" type='audio/wav'>
                        </source>
                    </audio>

                    <div>
                        <p><strong>Playstyle:</strong>&nbsp;<?= $chosenfighter['playstyle'] ?> </p>
                        <p><strong>Occupation:</strong>&nbsp; <?= $chosenfighter['occupation'] ?>
                        </p>
                    </div>
                    <p><?= $chosenfighter['description'] ?></p>

                    <h2 class="attention-voice">SPECIALS</h2>
                    <article-grid class='specials'>

                        <?php foreach ($chosenfighter['specials'] as $special) { ?>
                            <article>
                                <h3 class='deep-voice'><?= $special[0] ?></h3>

                                <picture>
                                    <img src="<?= $special[1] ?>" alt="">
                                </picture>
                            </article>
                        <?php } ?>
                    </article-grid>

                </text-content>
            </fighter-page>

        <?php } else { ?>

            <h1?> No Fighter found. </h1>


            <?php } ?>
    </inner-column>
</section>