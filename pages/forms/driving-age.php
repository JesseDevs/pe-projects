<main>
    <section class='form-page'>

        <inner-column>





            <?php

            $age = null;
            $template = null;


            if (isset($_POST['submitted'])) {

                if (isset($_POST['age'])) {
                    if ($_POST['age'] >= 0) {
                        $age = $_POST['age'];
                    }
                }

                $template = ($age > 16 ? 'You are old enough to legally drive.' :  'You are not old enough to legally drive.');
            }
            ?>

            <form action="" method="post">

                <h2>Can you drive??!</h2>

                <field>

                    <label for="">What's your age?</label>
                    <input type="number" name='age' value='<?= $age ?>' required min='0'>

                </field>

                <button type="submit" name='submitted'>Check Age</button>


            </form>

            <results class='feedback'>
                <h3> The Results</h3>
                <p><?= $template ?></p>

                <a href="?page=e4p">&#8592; E4P Home</a>

            </results>



        </inner-column>
    </section>
</main>