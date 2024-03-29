<?php
$heading = $section['heading'] ?? ucfirst($page);


?>

<landing-block>

    <div class="color-changer">
        Color
        <input type="color">
    </div>

    <text-content>
        <h1 class="heading roar-voice"><?= $heading ?></h1>

        <p class='intro'> <?= $section["intro"] ?></p>
    </text-content>

    <?php
    if ($section['type'] == "links") { ?>
        <action-links>
            <?php foreach ($section['actions'] as $link) { ?>
                <a href="<?= $link['link'] ?>"> <?= $link['title'] ?> </a>
            <?php } ?>
        </action-links>

    <?php } ?>

    <?php
    if ($section['type'] == "email") { ?>
        <email-input>

            <input type="email" placeholder="Email Address">


            <a href="#">
                SignUp
            </a>
        </email-input>
    <?php } ?>



</landing-block>

<divider>


    <svg width="100%" height="100%" viewBox="0 0 1684 287" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <g transform="matrix(1,0,0,1,7.02556,-786.051)">
            <g transform="matrix(1,0,0,1,-615.876,-749.808)">
                <g transform="matrix(1.00695,0,0,1.02813,601.558,727.693)">
                    <path d="M7.242,1064.26C7.242,1064.26 452.47,849.308 769.411,932.408C1086.35,1015.51 1042.45,1087.62 1529.24,861.339L1678.69,786.051L1678.69,1064.26L7.242,1064.26Z" style="fill:#FFFFFF" />
                </g>
            </g>
        </g>
    </svg>

</divider>