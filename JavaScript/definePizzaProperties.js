const pizza = {};

Object.defineProperties(pizza, {
    cheese: {
        value: 'mozzarella',
        writable: true,
        enumerable: true,
        configurable: true
    },
    sauce: {
        value: 'tomato',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    topping: {
        value:'bacon',
        writable: true,
        enumerable: true,
        configurable: true,
    },

    myFavoritePizza: {
        get() {
            return `I love ${this.cheese} ${this.sauce} ${this.topping} pizza!`
        },

        set(pizzaName) {
            [this.cheese, this.sauce, this.topping] = pizzaName.split(' '); 
        }
    }
})

pizza.myFavoritePizza = 'cheddar bbq pineapple'
console.log(pizza);