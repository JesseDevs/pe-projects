<main>
    <section class='form-page'>

        <inner-column>

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

            $orderAmount = null;
            $subtotal = null;
            $state = '';
            $tax = null;
            $taxAmount = 0;
            $total = null;


            if (isset($_POST['submitted'])) {

                if (isset($_POST['orderAmount'])) {
                    if ($_POST['orderAmount'] > 0) {
                        $orderAmount = $_POST['orderAmount'];
                    }
                }

                if (isset($_POST['state'])) {
                    if ($_POST['state'] == 'CA') {
                        $tax = .105;
                    }
                }
                $subtotal = floatval($orderAmount);
                $taxAmount = $subtotal * $tax;

                $total = $subtotal + $taxAmount;
            } ?>

            <form action="" method="post">

                <h2>Tax Calculator</h2>

                <field>

                    <label for="">What is your order amount?</label>
                    <input type="number" name='orderAmount' value='<?= $length ?>' required min='0'>

                </field>

                <field class="field">

                    <select name="state">
                        <option disabled selected>Select Your State?</option>

                        <option value="CA">
                            CA
                        </option>
                        <option value="Not CA">
                            NOT CA
                        </option>
                    </select>

                </field>

                <button type="submit" name='submitted'>Calculate</button>


            </form>

            <results class='feedback'>
                <h3> The Results</h3>
                <p>The total will be: <?= $total ?></p>
                <a href="?page=e4p">&#8592; E4P Home</a>
            </results>



        </inner-column>
    </section>
</main>