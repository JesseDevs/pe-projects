<header class='site-header'>

    <ul class='logo-container'>
        <li>
            <div class="svg-box">
                <?php include("templates/svg.php"); ?>
            </div>

        </li>
        <li>
            <a class='home-link' href="?page=home">
                <h1 class="logo">Jesse&nbsp;Devs</h1>

            </a>
        </li>

    </ul>



    <nav class='main-menu'>
        <ul>

            <li><a href="?page=home" class=" <?php activePage("home") ?>">Home</a></li>
            <li><a href="?page=about" class=" <?php activePage("about") ?>">About</a></li>
            <li><a href="?page=projects" class=" <?php activePage("projects") ?>">Projects</a></li>
            <li class="large-size">
                <a href="?page=writing " class="<?php activePage("writing") ?>">Writing</a>
            </li>
            <li class="larger-size">
                <a href="?page=forms " class="<?php activePage("forms") ?>">Forms</a>
            </li>
            <li class="larger-size">
                <a href="?page=style " class="<?php activePage("style") ?>">Guide</a>
            </li>
        </ul>

    </nav>

    <nav class='burger'>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
        </label>
        <nav class="menu">
            <a class="small-size" href="?page=home" class=" <?php activePage("home") ?>">Home</a>
            <a class="small-size" href="?page=about" class=" <?php activePage("about") ?>">About</a>
            <a class="small-size" href="?page=projects" class=" <?php activePage("projects") ?>">Projects</a>
            <a href="?page=writing " class="<?php activePage("writing") ?>">Writing</a>

            <a href="?page=forms" class="<?php activePage("forms") ?>">Forms</a>
            <a href="?page=style " class="<?php activePage("style") ?>">Guide</a>
        </nav>

    </nav>

</header>