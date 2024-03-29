console.clear();

const ifYouWant = new Vue({
    el: "#vue-app-context", // this is the scope it will 'watch'

    data: function () { // "live" (watched for changes/updated) data
        return {
            username: "",
            message: "",
            outputStyle: "none",
        };
    },

    methods: {
        update(event) {
            event.preventDefault();
            if (this.username) {
                this.outputStyle = "yay";
                this.message = `Hello, ${this.username}, nice to meet you!`;
            } else {
                this.outputStyle = "nay";
                this.message = "Please enter your name";
            }
        }
    },

    computed: {
        anAutomaticallUpdatedProperty() {
            // mmmmm
        }
    },

});

const drive = new Vue({
    el: "#drive-app", // this is the scope it will 'watch'

    data: function () {
        // "live" (watched for changes/updated) data
        return {
            age: "",
            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();
            if (this.age >= 21) {
                this.something = "Yes."
                this.outputStyle = "yay";
                this.message = `You are ${this.age} years old, enough to legally drive. There's some more responsibility at this point.`;
            } else if (this.age < 21 && this.age >= 16) {
                this.something = "Yes."
                this.outputStyle = "yay";
                this.message = `You are ${this.age} years old, enough to legally drive. Insurance payments will be through the roof.`;
            } else if (this.age < 16 && this.age >= 13) {
                this.something = "Yes."
                this.outputStyle = "yay";
                this.message = `You are ${this.age} years old. Too young to drive but your time is coming.`;
            } else {
                this.something = "..."
                this.outputStyle = "nay";
                this.message = "You are not old enough to legally drive.";
            }
        }
    }
});

const area = new Vue({
    el: "#area-app",

    data: function () {
        return {
            length: "",
            width: "",
            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();
            if (this.length && this.width) {

                var area = this.length * this.width;
                this.outputStyle = "yay";
                this.message = `The area of a room with those dimensions is ${area} feet.`;
            } else {
                this.outputStyle = "nay";
                this.message = "Nope. Try again";
            }
        }
    },

    computed: {
        area() {
            return this.length * this.width
        }
    }
});

const count = new Vue({
    el: "#count-string-app",

    data: function () {
        return {
            phrase: "",
            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();
            if (this.phrase) {

                var count = this.countString(this.phrase);

                this.outputStyle = "yay";
                this.message = `The phrase ${this.phrase} has ${count} characters.`;

            } else {
                this.outputStyle = "nay";
                this.message = "Nope. Try again";
            }
        },

        countString(string) {
            let counter = 0;

            for (i = 0; i < string.length; i++) {

                let character = string[i]; // 

                if (character != ' ') {
                    counter++;
                }
            }

            return counter;
        }
    }
});

const interest = new Vue({
    el: "#interest-app",

    data: function () {
        return {
            principal: "",
            interest: "",
            time: "",
            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();
            if (this.principal && this.interest && this.time) {

                var amount = this.calculate(this.principal, this.time, this.interest)

                this.outputStyle = "yay";
                this.message = `After ${this.time} years at ${this.interest}% interest, the investment will be worth ${amount}.`;

            } else {
                this.outputStyle = "nay";
                this.message = "Nope. Try again";
            }
        },

        calculate(x, y, z) {

            let rate = parseInt(z) / 100;

            var amount = parseInt(x).toFixed(2).replace(/[.,]00$/, "") * (1 + (parseInt(rate).toFixed(2).replace(/[.,]00$/, "") * parseInt(y).toFixed(2).replace(/[.,]00$/, "")));

            return amount;
        }
    }
});

const madlib = new Vue({
    el: "#madlib-app", // this is the scope it will 'watch'

    data: function () {
        // "live" (watched for changes/updated) data
        return {
            noun: "",
            verb: "",
            adverb: "",
            adjective: "",
            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();
            if (this.noun && this.verb && this.adverb && this.adjective) {
                this.outputStyle = "yay";
                this.message = `${this.noun} is ${this.verb} ${this.adverb}  while maintaining ${this.adjective} poise!`;
            } else {
                this.outputStyle = "nay";
                this.message = "Nope. Try again";
            }
        }
    }
});

const paint = new Vue({
    el: "#paint-app",

    data: function () {
        return {
            length: "",
            width: "",
            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();
            if (this.length && this.width) {

                var area = parseInt(this.length) * parseInt(this.width);
                var paint = Math.ceil(area / 350);

                this.outputStyle = "yay";
                this.message = `The ceiling of the room is ${area} feet. You'll need ${paint} gallons to cover the entire ceiling`;

            } else {
                this.outputStyle = "nay";
                this.message = "Nope. Try again";
            }
        }
    }
});


const login = new Vue({
    el: "#login-app",

    data: function () {
        return {
            username: "",
            password: "",
            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();


            let user = $usernameInput.value;
            let pass = $passwordInput.value;

            if (this.username == user && this.password == pass) {

                this.outputStyle = "yay";
                this.message = `You're logged in! Welcome!`;

            } else {
                this.outputStyle = "nay";
                this.message = "Wrong Something..";
            }

        }
    }
});

const quote = new Vue({
    el: "#quote-app",

    data: function () {
        return {
            author: "",
            quote: "",
            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();

            if (this.author && this.quote) {

                this.author = capitalizeFirstLetter(this.author);
                this.outputStyle = "yay";
                this.message = `${author} said “${quote}” `;

            } else {
                this.outputStyle = "nay";
                this.message = "Nope. Try again.";
            }

        }
    }
});


const retire = new Vue({
    el: "#retire-app",

    data: function () {
        return {
            age: "",
            retireAge: "",
            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();

            if (this.age && this.retireAge) {

                var ageDifference = parseInt(this.retireAge) - parseInt(this.age);
                let date = new Date();
                var currentYear = date.getFullYear();
                var retireYear = currentYear + ageDifference;

                this.outputStyle = "yay";
                this.message = `${ageDifference} years left until you can retire. It's ${currentYear}, so you can retire in ${retireYear} `;

            } else {

                this.outputStyle = "nay";
                this.message = "Nope. Try again.";
            }

        }
    }
});

const checkout = new Vue({
    el: "#checkout-app",

    data: function () {
        return {
            quantityOne: "",
            quantityTwo: "",

            priceOne: "",
            priceTwo: "",

            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();

            if (this.quantityOne && this.quantityTwo && this.priceOne && this.priceTwo) {

                var totalOne = parseInt(this.quantityOne) * parseInt(this.priceOne);
                var totalTwo = parseInt(this.quantityTwo) * parseInt(this.priceTwo);


                var subTotal = parseInt(totalOne, 10) + parseInt(totalTwo, 10);
                var tax = .055;

                this.outputStyle = "yay";
                this.message = `${ageDifference} years left until you can retire. It's ${currentYear}, so you can retire in ${retireYear} `;

            } else {

                this.outputStyle = "nay";
                this.message = "Nope. Try again.";
            }

        }
    }
});

const math = new Vue({
    el: "#math-app",

    data: function () {
        return {
            numOne: "",
            numTwo: "",

            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();

            if (this.numOne && this.numTwo) {

                var multiply = parseInt(this.numOne) * parseInt(this.numTwo);
                var divide = parseInt(this.numOne) / parseInt(this.numTwo);
                var add = parseInt(this.numOne) + parseInt(this.numTwo);
                var sub = parseInt(this.numOne) - parseInt(this.numTwo);

                this.outputStyle = "yay";
                this.message = `${this.numOne} + ${this.numTwo} = ${add}
                ${this.numOne} - ${this.numTwo} = ${sub}
                ${this.numOne} x ${this.numTwo} = ${multiply}
                ${this.numOne} / ${this.numTwo} = ${divide}
                `;

            } else {

                this.outputStyle = "nay";
                this.message = "Nope. Try again.";
            }

        }
    }
});


const pizza = new Vue({
    el: "#pizza-app",

    data: function () {
        return {
            people: "",
            pizza: "",
            plural: "pizza",

            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();

            if (this.people && this.pizza) {

                var slices = 8;
                var totalSlices = slices * parseInt(this.pizza);
                if (this.pizza > 1) {
                    this.plural = "pizzas";
                }

                var slicesPer = Math.floor(parseInt(totalSlices) / parseInt(this.people));
                var pluralSlices = "piece";

                var leftoverSlices = Math.floor(parseInt(totalSlices) % parseInt(this.people));
                var pluralLeftovers = "piece";

                if (leftoverSlices > 1) {
                    pluralLeftovers = "pieces";
                }


                if (slicesPer > 1) {
                    pluralSlices = "pieces";
                }

                console.log(Math.floor(slicesPer));

                this.message = `
                ${this.people} people with ${this.pizza} pizzas.
                Each person gets ${Math.floor(slicesPer)} ${pluralSlices} of pizza.
                There are ${leftoverSlices} leftover ${pluralLeftovers}.
                `;

                if (this.people > totalSlices) {
                    this.message = `There is only ${slices} slices but ${this.people} people.`;
                }

            } else {

                this.outputStyle = "nay";
                this.message = "Nope. Try again.";
            }

        }
    }
});

const temp = new Vue({
    el: "#temp-app",

    data: function () {
        return {
            picked: "Fahrenheit",
            degree: "",

            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();

            if (this.degree) {

                var newTemp = "";
                var notPicked = "Celsius";
                var letter = "C";
                if (this.picked == "Celsius") {
                    newTemp = (parseInt(this.degree) * 9 / 5) + 32;
                    notPicked = "Fahrenheit";
                    letter = "F";

                } else {

                    newTemp = (parseInt(this.degree) - 32) * 5 / 9;
                }

                this.message = `The temperature in ${notPicked} is ${newTemp}° ${letter}.`;

            } else {

                this.outputStyle = "nay";
                this.message = "Nope. Try again.";
            }

        }
    }
});

const bmi = new Vue({
    el: "#bmi-app",

    data: function () {
        return {
            feet: "",
            inches: "",
            weight: "",

            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();

            if (this.feet && this.inches && this.weight) {

                var totalHeight = (parseInt(this.feet) * 12) + parseInt(this.inches);
                var bmi = (parseInt(this.weight) / (totalHeight * totalHeight)) * 703;

                if (bmi < 18.5) {
                    this.message = `Your BMI is ${bmi.toFixed(1)}. According to BMI standards you are currently underweight.`;
                } else if (bmi > 25) {
                    this.message = `Your BMI is ${bmi.toFixed(1)}. According to BMI standards you are currently overweight.`;
                } else {
                    this.message = `Your BMI is ${bmi.toFixed(1)}. According to BMI standards you are at a normal weight.`;
                }



            } else {

                this.outputStyle = "nay";
                this.message = "Nope. Try again.";
            }

        }
    }
});

const calendar = new Vue({
    el: "#calendar-app",

    data: function () {
        return {
            month: "",

            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();

            if (this.month) {

                if (this.month > 12) {
                    this.message = "That number does not correspond with a month. Try again."
                } else {
                    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                    let selected = months[this.month - 1];
                    this.message = `The name of the month is ${selected}.`
                }


            } else {

                this.outputStyle = "nay";
                this.message = "Nope. Try again.";
            }

        }
    }
});

const cali = new Vue({
    el: "#cali-tax-app",

    data() {
        return {
            amount: "",
            selected: '.105',
            options: [
                {
                    text: "Los Angeles",
                    tax: .105
                },
                {
                    text: "Alameda",
                    tax: .1075
                },
                {
                    text: "Fresno",
                    tax: .09225
                },
                {
                    text: "Humboldt",
                    tax: .0925
                },
                {
                    text: "Imperial",
                    tax: .0875
                },
                {
                    text: "Kings",
                    tax: .0825
                },
                {
                    text: "Mariposa",
                    tax: .0875
                },
                {
                    text: "Merced",
                    tax: .0875
                },
                {
                    text: "Orange",
                    tax: .1025
                },
                {
                    text: "Riverside",
                    tax: .0925
                },
                {
                    text: "San Bernardino",
                    tax: .1025
                },
                {
                    text: "San Diego",
                    tax: .0875
                },
                {
                    text: "San Francisco",
                    tax: .09875
                },
                {
                    text: "Santa Cruz",
                    tax: .0975
                }
            ],

            message: "",
            outputStyle: "none"
        }
    },

    methods: {
        update(event) {
            event.preventDefault();

            // if (this.amount) {



            // } else {

            //     this.outputStyle = "nay";
            //     this.message = "Nope. Try again.";
            // }

        }
    }
});

const compare = new Vue({
    el: "#compare-app",

    data: function () {
        return {
            numbers: [],
            number: "",
            phrase: "Enter your first number!",

            message: "",
            outputStyle: "none"
        };
    },

    methods: {
        update(event) {
            event.preventDefault();

            if (this.number == '') {
                this.number = 0;
            }
            var numberInput = this.number;
            this.numbers.push(numberInput);

            numberList = [...new Set(this.numbers)];

            this.number = "";
            var highest = numberList[0];

            for (let x = 0; x < numberList.length; x++) {
                if (numberList[x] > highest) {
                    highest = numberList[x];
                }
            }

            if (this.numbers.length > 0) {
                this.phrase = "Add more numbers to compare..";
            }

            var template = `List of numbers: [`;

            for (let x = 0; x < numberList.length; x++) {
                const element = numberList[x];
                if (x == 0) {
                    template += `${element}`;
                } else {
                    template += `, ${element}`;
                }
            }

            template += `]`;

            this.message = `<span>${template}</span>  <br>    
            <span>This highest number is ${highest}!</span>`
        }
    }
});