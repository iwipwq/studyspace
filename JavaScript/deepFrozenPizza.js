const pizza = {
    name: 'Hawaiian pizza',
    ingredients: {
        cheese: 'mozzarella',
        sauce: ['tomato', 'bbq'],
        topping: {
            fruit: 'pineapple',
            vegetables: 'tomato',
            meat: 'bacon'
        }
    }
}

function deepFreeze(target) {
    if (target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

deepFreeze(pizza);

console.log(Object.isFrozen(pizza));
console.log(Object.isFrozen(pizza.topping));
console.log(Object.isFrozen(pizza.sauce));

pizza.ingredients.topping.meat = 'chicken';
console.log(pizza);
