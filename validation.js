class Validate {
    constructor() {
        this.food = document.getElementById('item-name');
        this.calories = document.getElementById('item-calories');
    }

    validateName() {
        const re = /^[a-zA-Z ]{3,15}$/;
        if (!re.test(this.food.value)) {
            this.food.classList.add('invalid');
            this.food.classList.remove('valid');
            return false;
        }
        else {
            this.food.classList.remove('invalid')
            this.food.classList.add('valid');
            return true;
        }
    };

    validateCalories() {
        const re = /^[0-9]*$/;
        if (!re.test(this.calories.value)) {
            this.calories.classList.add('invalid');
            this.calories.classList.remove('valid');
            return false;
        }
        else {
            this.calories.classList.remove('invalid')
            this.calories.classList.add('valid');
            return true;
        }
    }

    removeStatus() {
        this.food.classList.remove('invalid');
        this.food.classList.remove('valid');
        this.calories.classList.remove('invalid')
        this.calories.classList.remove('valid');
    }
}