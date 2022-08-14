<?php

            // function format($variable)
            // {
            //     echo "<pre>";
            //     echo "<code>";
            //     print_r($variable);
            //     echo "</code>";
            //     echo "</pre>";
            // }

            // format($_POST);

$length = '';
$width = '';
$area = null;
$templateOne = "";
$templateTwo = '';
$final = '';

if (isset($_POST['submitted'])) {

    if (isset($_POST['length'])) {
        if ($_POST['length'] >= 0) {
            $length = $_POST['length'];
        }
    }

    if (isset($_POST['width'])) {
        if ($_POST['width'] >= 0) {
            $width = $_POST['width'];
        }
    }

    $area = floatval($length) * floatval($width);
    $templateOne = 'The length is: ' .  $length;
    $templateTwo = 'The width is: ' .  $width;
    $final = "Thus, the area is: " . $area;
}

?>

<form action="" method="post">

    <field>
        <label for="">What is the length of the room?</label>
        <input type="number" name='length' value='<?= $length ?>' required min='0'>
    </field>

    <field>

        <label for="">What is the width of the room?</label>
        <input type="number" name='width' value='<?= $width ?>' required min='0'>

    </field>

    <button type="submit" name='submitted'>Calculate</button>


</form>

<div class='feedback'>
    <h3 class="chant-voice"> The Results</h3>
    <p> <?= $templateOne ?></p>
    <p> <?= $templateTwo ?> </p>

    <p><strong> <?= $final ?></strong> </p>


</div>
